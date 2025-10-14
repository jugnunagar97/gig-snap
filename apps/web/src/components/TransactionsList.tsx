"use client";

import React, { useEffect, useState } from "react";

const DUMMY_TXNS: any[] = [];

export default function TransactionsList() {
  const [txns, setTxns] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(`/api/transactions?page=${page}&pageSize=${pageSize}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load transactions");
        const data = await res.json();
        if (mounted) {
          setTxns((data.transactions || []).map((t: any) => ({
            id: t.id ?? t.txnId ?? t._id ?? "",
            amount: t.amount ?? t.total ?? 0,
            date: t.date ?? t.createdAt ?? "",
            status: t.status ?? t.state ?? "",
          })));
          setTotal(Number(data.total ?? 0));
        }
      } catch (e: any) {
        if (mounted) setError(e?.message || "Failed to load transactions");
      }
    })();
    return () => {
      mounted = false;
    };
  }, [page, pageSize]);

  const loading = txns === null && !error;

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">Transaction History</h2>
        <p className="text-sm text-gray-500">A record of your payments and settlements.</p>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-2">
          <div className="h-10 bg-emerald-100/50 rounded-xl" />
          <div className="h-24 bg-emerald-50/60 rounded-xl" />
        </div>
      ) : error ? (
        <div className="border border-red-200 bg-red-50 text-red-700 rounded-xl p-4 text-sm">{error}</div>
      ) : txns!.length === 0 ? (
        <div className="border border-dashed border-emerald-200 rounded-2xl p-8 text-center bg-emerald-50/30">
          <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">💳</div>
          <div className="font-semibold text-gray-800">No transactions yet</div>
          <div className="text-sm text-gray-600">Once you make a payment, it will show up here.</div>
        </div>
      ) : (
        <div className="bg-white/80 backdrop-blur border border-emerald-100/70 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700">
                <tr>
                  <th className="py-3.5 px-4">Transaction ID</th>
                  <th className="py-3.5 px-4">Amount (USD)</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {txns!.map((txn) => (
                  <tr key={txn.id} className="border-t border-emerald-100/60 hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3 px-4 font-mono text-gray-900">{txn.id}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">${txn.amount}</td>
                    <td className="py-3 px-4 text-gray-700">{txn.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                          txn.status === "Paid"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        <div className="flex items-center justify-between p-3 border-t border-emerald-100/70 text-sm text-gray-700">
          <div>
            Page {page} of {Math.max(1, Math.ceil(total / pageSize))}
          </div>
          <div className="flex gap-2">
            <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className={`px-3 py-1.5 rounded-lg border ${page <= 1 ? "text-gray-400 border-gray-200" : "text-gray-700 border-gray-200 hover:bg-emerald-50"}`}>Previous</button>
            <button disabled={page >= Math.ceil(total / pageSize)} onClick={() => setPage((p) => p + 1)} className={`px-3 py-1.5 rounded-lg border ${page >= Math.ceil(total / pageSize) ? "text-gray-400 border-gray-200" : "text-gray-700 border-gray-200 hover:bg-emerald-50"}`}>Next</button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
