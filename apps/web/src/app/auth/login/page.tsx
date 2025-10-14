"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [keep, setKeep] = useState(true);
  const [agree, setAgree] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setLoading(true);
    setTimeout(() => {
      try {
        window.localStorage.setItem("tp_user", JSON.stringify({ name, email }));
      } catch {}
      login();
      router.push("/dashboard");
    }, 300);
  };

  return (
    <main className="min-h-[90vh] w-full bg-[linear-gradient(120deg,#E8F7EF_0%,#FFFFFF_40%,#E8F7EF_100%)] flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-white">
          {/* Left panel */}
          <div className="relative hidden lg:block bg-[linear-gradient(180deg,#E9FAEF_0%,#E6F7F0_100%)]">
            <div className="p-10 h-full">
              <Link href="/" className="inline-flex items-center gap-2">
                <img src="/tp-logo.png" alt="Task Partner" className="h-9 w-9 object-contain" />
                <span className="text-xl font-semibold tracking-tight text-gray-800">Task Partner</span>
              </Link>
              <div className="mt-12">
                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">Hire Top Talent<br/>Without Any Hassle</h2>
                <p className="mt-4 text-sm text-gray-600 max-w-sm">World‑class assistants vetted on proven results. Streamlined onboarding and fast turnarounds.</p>
              </div>
              {/* Illustration */}
              <div className="mt-10 pr-6">
                <img src="/login-signup.png" alt="Task Partner onboarding" className="w-full h-auto object-cover rounded-2xl shadow-xl" />
              </div>
              <div className="absolute left-10 right-10 bottom-8 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl blur-md opacity-70" />
            </div>
          </div>

          {/* Right form card */}
          <div className="p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="text-sm text-gray-500">Hey! Welcome back,</div>
                <h1 className="mt-1 text-2xl font-extrabold text-gray-900">{mode === "login" ? "Login to your account" : "Create your account"}</h1>
              </div>

              <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <button
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${mode === "login" ? "text-emerald-700 bg-emerald-50" : "text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setMode("login")}
                >
                  Log In
                </button>
                <button
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${mode === "signup" ? "text-emerald-700 bg-emerald-50" : "text-gray-600 hover:text-gray-900"}`}
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                {mode === "signup" && (
                  <div>
                    <label className="block text-base font-semibold text-gray-800 mb-1.5">Full name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base bg-white placeholder-gray-600 text-gray-900 caret-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500"
                      placeholder="Jane Doe"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base bg-white placeholder-gray-600 text-gray-900 caret-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500"
                    placeholder="e.g. abc@company.com"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base bg-white placeholder-gray-400 text-gray-900 caret-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500 pr-10"
                      placeholder="••••••••"
                    />
                    <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(v=>!v)} className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                      {showPassword ? (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12c.6-1.36 1.5-2.62 2.6-3.68M9.9 4.24A10.94 10.94 0 0 1 12 4c5 0 9.27 3.89 11 8-1.02 2.31-2.73 4.31-4.9 5.76M1 1l22 22"/></svg>
                      ) : (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-gray-700">
                  <label className="inline-flex items-center gap-2 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-300" checked={keep} onChange={(e)=>setKeep(e.target.checked)} />
                    <span>Keep me logged in</span>
                  </label>
                  <label className="inline-flex items-center gap-2 md:whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-300" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
                    <span>I agree to the <a className="text-emerald-700 font-semibold hover:underline" href="#">Terms & Conditions</a> and <a className="text-emerald-700 font-semibold hover:underline" href="#">Privacy Policy</a></span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !agree}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition-colors"
                >
                  {mode === "login" ? "Log in" : "Create account"}
                </button>

                

                {mode === "login" ? (
                  <p className="text-xs text-gray-600 text-center">
                    New here? <button type="button" className="text-emerald-700 font-semibold hover:underline" onClick={() => setMode("signup")}>Create an account</button>
                  </p>
                ) : (
                  <p className="text-xs text-gray-600 text-center">
                    Already have an account? <button type="button" className="text-emerald-700 font-semibold hover:underline" onClick={() => setMode("login")}>Log in</button>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


