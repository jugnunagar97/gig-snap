"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import ProfilePanel from "@/components/ProfilePanel";
import NewOrderForm from "@/components/NewOrderForm";
import OrdersList from "@/components/OrdersList";
import TransactionsList from "@/components/TransactionsList";
import {
  User,
  PlusCircle,
  ListOrdered,
  Receipt,
  LogOut,
  Sparkles,
} from "lucide-react";

const tabs = [
  { key: "Profile", label: "Profile", icon: User },
  { key: "New Order", label: "New Order", icon: PlusCircle },
  { key: "Orders", label: "Orders", icon: ListOrdered },
  { key: "Transactions", label: "Transactions", icon: Receipt },
] as const;
type Tab = (typeof tabs)[number]["key"];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");
  const router = useRouter();
  const { logout, user, isAuthenticated, isReady } = useAuth();

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace("/");
    }
  }, [isReady, isAuthenticated, router]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* PREMIUM LEFT SIDEBAR */}
      <aside className="w-72 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white flex flex-col shadow-2xl relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

        {/* Brand / Profile strip */}
        <div className="relative z-10 px-5 pt-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-lg font-extrabold tracking-tight">Task Partner</div>
          </div>
          <div className="mt-4 bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-3">
            <div className="flex items-center gap-3">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user?.name || user?.email || "User")}&backgroundType=gradientLinear&fontWeight=700`}
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white/30 shadow-lg"
              />
              <div>
                <div className="text-sm font-bold leading-tight">{user?.name || ""}</div>
                <div className="text-[10px] text-emerald-100/90 font-medium">{user?.email || ""}</div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Navigation */}
        <nav className="relative z-10 flex-1 px-5 py-4">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200 px-2 mb-2">Private</div>
          <div className="space-y-1.5">
            {tabs.map(({ key, label, icon: Icon }) => {
              const selected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    selected
                      ? "bg-white/20 text-white ring-1 ring-white/30"
                      : "text-emerald-50 hover:bg-white/10"
                  }`}
                >
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg ${selected ? "bg-white/30" : "bg-white/10"}`}>
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <span className="tracking-tight">{label}</span>
                </button>
              );
            })}
          </div>

          
        </nav>

        {/* Footer action */}
        <div className="relative z-10 px-5 py-4 border-t border-white/10">
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-red-200 text-red-50 hover:text-white hover:bg-red-500/70 backdrop-blur bg-white/10 transition-all text-sm font-semibold"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* PREMIUM RIGHT CONTENT AREA */}
      <main className="flex-1 overflow-auto p-8 bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Header Card */}
        <header className="bg-white border border-gray-200 rounded-2xl shadow-lg px-8 py-6 mb-6">
          <div className="flex items-center gap-4">
            {(() => {
              const active = tabs.find((t) => t.key === activeTab)!;
              const Icon = active.icon;
              return (
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                  <Icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
              );
            })()}
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                {tabs.find((t) => t.key === activeTab)?.label}
              </h1>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {activeTab === "Profile" && "Update your personal information and preferences."}
                {activeTab === "New Order" && "Submit a new task request for your VA."}
                {activeTab === "Orders" && "View all your orders and their current status."}
                {activeTab === "Transactions" && "Review your payment and transaction history."}
              </p>
            </div>
          </div>
        </header>

        {/* Content Panel */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
          {activeTab === "Profile" && <ProfilePanel />}
          {activeTab === "New Order" && <NewOrderForm />}
          {activeTab === "Orders" && <OrdersList />}
          {activeTab === "Transactions" && <TransactionsList />}
        </div>
      </main>
    </div>
  );
}
