"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate premium "processing" delay
    setTimeout(() => {
      try {
        window.localStorage.setItem("tp_user", JSON.stringify({ name: name || "User", email }));
      } catch {}
      login();
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <main className="min-h-screen w-full flex bg-white">
      
      {/* LEFT SIDE: Creative Abstract Art (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900 overflow-hidden">
        {/* Abstract 3D Background */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
             alt="Abstract 3D Flow" 
             className="w-full h-full object-cover opacity-90 scale-105 hover:scale-110 transition-transform duration-[20s] ease-in-out"
           />
           {/* Gradient Overlay for Text Readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-emerald-900/20 mix-blend-multiply" />
           <div className="absolute inset-0 bg-black/20" /> 
        </div>

        {/* Floating Glass Elements */}
        <div className="absolute top-1/4 right-10 w-24 h-24 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-[80px]" />

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 text-white">
          <Link href="/" className="flex items-center gap-3 w-fit group">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
               <img src="/tp-logo.png" alt="Logo" className="w-6 h-6 object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight">Task Partner</span>
          </Link>

          <div className="space-y-8 max-w-lg mb-12">
             {/* Floating Trust Card */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-6 h-6 rounded-full border border-zinc-800 bg-zinc-800 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" />
                   </div>
                 ))}
              </div>
              <span className="text-xs font-medium text-emerald-200">Trusted by 2,500+ leaders</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Focus on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                 what matters.
              </span>
            </h1>
            
            <div className="pl-6 border-l-2 border-emerald-500/50">
              <p className="text-zinc-300 text-lg leading-relaxed italic">
                "The most reliable way to scale operations. We handed off our busy work and grew 3x in one quarter."
              </p>
              <div className="mt-4 flex items-center gap-3">
                 <img src="https://i.pravatar.cc/100?img=33" alt="CEO" className="w-10 h-10 rounded-full border border-white/10" />
                 <div>
                    <div className="text-sm font-bold text-white">Alex Rivera</div>
                    <div className="text-xs text-emerald-400">Founder, NexaCorp</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white relative">
        <div className="w-full max-w-[420px] space-y-8 relative z-10">
          
          {/* Mobile Header (Only visible on small screens) */}
          <div className="lg:hidden text-center mb-8">
             <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <img src="/tp-logo.png" alt="Logo" className="w-8 h-8" />
                <span className="font-bold text-lg text-zinc-900">Task Partner</span>
             </Link>
          </div>

          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
              {mode === 'login' ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-zinc-500">
              {mode === 'login' 
                ? 'Enter your details to access your dashboard.' 
                : 'Get started your VA hiring journey with us.'}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="p-1 bg-zinc-100/80 rounded-xl flex items-center">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                mode === "login" 
                ? "bg-white text-zinc-900 shadow-sm" 
                : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                mode === "signup" 
                ? "bg-white text-zinc-900 shadow-sm" 
                : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {mode === "signup" && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-sm font-semibold text-zinc-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white"
                  placeholder="e.g. Jordan Smith"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-zinc-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-zinc-700">Password</label>
                {mode === 'login' && (
                  <button type="button" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all pr-10 focus:bg-white"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all duration-200 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/10"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-zinc-500 mt-6">
            By clicking continue, you agree to our{' '}
            <a href="#" className="underline hover:text-zinc-800">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-zinc-800">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </main>
  );
}