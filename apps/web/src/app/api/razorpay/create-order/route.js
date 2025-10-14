// app/api/razorpay/create-order/route.js

import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
  // DO NOT hardcode! Instead, put these in your .env file (see below)
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_SECRET;

  if (!key_id || !key_secret) {
    return NextResponse.json({ error: "Razorpay config missing" }, { status: 500 });
  }

  const { amount, currency, receipt } = await req.json();
  const normalizedCurrency = (currency || 'USD').toUpperCase();

  const razorpay = new Razorpay({
    key_id,
    key_secret,
  });

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Razorpay expects subunits
      currency: normalizedCurrency,
      receipt: receipt || "receipt_order_" + Math.floor(Math.random() * 100000),
    });

    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
