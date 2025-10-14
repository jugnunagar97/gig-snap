"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthContext";

export default function ProfilePanel() {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
  }, [user]);
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">Your Profile</h2>
        <p className="text-sm text-gray-500">Update your personal information and preferences.</p>
      </div>

      <div className="bg-white/80 backdrop-blur border border-emerald-100/70 rounded-2xl shadow-sm p-4 sm:p-6">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-gray-900">
          <div>
            <label className="block mb-1.5 font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>
          <div>
            <label className="block mb-1.5 font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-1.5 font-semibold text-gray-700">Bio</label>
            <textarea
              rows={3}
              placeholder="Tell us a little about yourself..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-end gap-3">
            <button type="button" className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold">Cancel</button>
            <button
              className="px-5 py-2.5 rounded-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
