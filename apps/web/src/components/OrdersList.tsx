"use client";

import React from "react";

const DUMMY_ORDERS = [
  {
    id: "GIG10251001",
    service: "Email & Calendar Management",
    status: "Pending",
    amount: 250,
    date: "2025-10-12",
  },
  {
    id: "GIG10251002",
    service: "Lead Generation",
    status: "Completed",
    amount: 140,
    date: "2025-09-20",
  },
];

export default function OrdersList() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">Your Orders</h2>
        <p className="text-sm text-gray-500">Track the progress and details of your recent orders.</p>
      </div>

      <div className="bg-white/80 backdrop-blur border border-emerald-100/70 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700">
              <tr>
                <th className="py-3.5 px-4">Order ID</th>
                <th className="py-3.5 px-4">Service</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Amount (USD)</th>
                <th className="py-3.5 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_ORDERS.map((order) => (
                <tr key={order.id} className="border-t border-emerald-100/60 hover:bg-emerald-50/40 transition-colors">
                  <td className="py-3 px-4 font-mono text-gray-900">{order.id}</td>
                  <td className="py-3 px-4 text-gray-800">{order.service}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-emerald-100 text-emerald-800"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">${order.amount}</td>
                  <td className="py-3 px-4 text-gray-700">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
