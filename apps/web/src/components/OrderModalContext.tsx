"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import OrderContent from "@/components/OrderContent";

type OrderModalContextValue = {
  open: (opts?: { tier?: "starter" | "professional" | "enterprise"; category?: string }) => void;
  close: () => void;
  isOpen: boolean;
  initialTier?: "starter" | "professional" | "enterprise";
  initialCategory?: string;
};

const OrderModalContext = createContext<OrderModalContextValue | undefined>(undefined);

export function useOrderModal(): OrderModalContextValue {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error("useOrderModal must be used within OrderModalProvider");
  return ctx;
}

export default function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTier, setInitialTier] = useState<"starter" | "professional" | "enterprise" | undefined>(undefined);
  const [initialCategory, setInitialCategory] = useState<string | undefined>(undefined);

  const open = useCallback((opts?: { tier?: "starter" | "professional" | "enterprise"; category?: string }) => {
    if (opts?.tier) setInitialTier(opts.tier);
    if (opts?.category) setInitialCategory(opts.category);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <OrderModalContext.Provider value={{ open, close, isOpen, initialTier, initialCategory }}>
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
