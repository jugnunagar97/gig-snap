"use client";

import React from "react";
import OrderForm from "@/components/OrderForm";
import { useOrderModal } from "@/components/OrderModalContext";

export default function OrderContent() {
  const { initialTier, initialCategory } = useOrderModal();
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl">
      <OrderForm initialTier={initialTier} initialCategory={initialCategory} />
    </div>
  );
}


