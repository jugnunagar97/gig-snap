"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import OrderContent from "@/components/OrderContent";

type OrderModalContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const OrderModalContext = createContext<OrderModalContextValue | undefined>(undefined);

export function useOrderModal(): OrderModalContextValue {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error("useOrderModal must be used within OrderModalProvider");
  return ctx;
}

export default function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <OrderModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          aria-modal
          role="dialog"
        >
          <OrderContent />
        </div>
      )}
    </OrderModalContext.Provider>
  );
}
