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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-modal
          role="dialog"
        >
          <button
            aria-label="Close order modal"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <div className="relative w-full max-w-5xl">
            <button
              onClick={close}
              className="absolute -top-3 -right-3 z-[101] rounded-full bg-white text-gray-700 shadow p-2 leading-none hover:bg-gray-50"
              aria-label="Close"
            >
              ✕
            </button>
            <OrderContent />
          </div>
        </div>
      )}
    </OrderModalContext.Provider>
  );
}


