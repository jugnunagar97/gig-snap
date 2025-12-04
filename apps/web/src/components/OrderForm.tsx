"use client";

import React, { useState, useEffect } from "react";
import { 
  X, ChevronDown, ShieldCheck, Sparkles, Star, Crown, 
  ArrowRight, ArrowLeft, Loader2, Minus, Plus, Lock 
} from "lucide-react";
import { useOrderModal } from "./OrderModalContext";

// --- Types (Preserved) ---
declare global { interface Window { Razorpay?: any; } }
type PricingType = "hourly" | "unit" | "project";
type TierKey = "starter" | "professional" | "enterprise";
type UrgencyKey = "standard" | "express" | "rush";

type TierInfo = {
  name: string;
  icon: React.ReactNode;
  multiplier: number;
  gradient: string;
};

type ServiceItem = {
  name: string;
  basePrice: number;
  pricingType: PricingType;
  unit?: string;
  options?: number[];
};

// --- Data Configuration ---
const TIERS: Record<TierKey, TierInfo> = {
  starter: { name: "Starter", icon: <Star className="w-4 h-4" />, multiplier: 1, gradient: "from-zinc-500 to-zinc-600" },
  professional: { name: "Professional", icon: <Sparkles className="w-4 h-4" />, multiplier: 1.4, gradient: "from-emerald-500 to-teal-500" },
  enterprise: { name: "Enterprise", icon: <Crown className="w-4 h-4" />, multiplier: 1.8, gradient: "from-violet-500 to-fuchsia-500" },
};

const SERVICES: Record<string, ServiceItem[]> = {
  "Administrative Support": [
    { name: "Email & Calendar Management", basePrice: 25, pricingType: "hourly" },
    { name: "Inbox Triage", basePrice: 20, pricingType: "hourly" },
    { name: "Data Entry", basePrice: 25, pricingType: "unit", unit: "entries" },
  ],
  "Social Media & Marketing": [
    { name: "Content Scheduling", basePrice: 35, pricingType: "unit", unit: "posts" },
    { name: "Community Engagement", basePrice: 20, pricingType: "hourly" },
  ],
  "E-commerce Support": [
    { name: "Product Listing", basePrice: 38, pricingType: "unit", unit: "products" },
    { name: "Customer Support", basePrice: 25, pricingType: "hourly" },
  ],
  "Research & Analysis": [
    { name: "Lead Generation", basePrice: 65, pricingType: "unit", unit: "leads" },
    { name: "Market Research", basePrice: 75, pricingType: "project" },
  ],
};

const URGENCY_OPTIONS: Record<UrgencyKey, { label: string; multiplier: number }> = {
  standard: { label: "Standard (48h)", multiplier: 1 },
  express: { label: "Express (24h)", multiplier: 1.25 },
  rush: { label: "Rush (Same Day)", multiplier: 1.5 },
};

export default function OrderForm({ initialCategory }: { initialCategory?: string }) {
  const { close } = useOrderModal();
  const [page, setPage] = useState<number>(1);
  const [selectedTier, setSelectedTier] = useState<TierKey>("professional");
  const [category, setCategory] = useState(initialCategory || "");
  const [serviceName, setServiceName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [urgency, setUrgency] = useState<UrgencyKey>("standard");
  const [details, setDetails] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [authData, setAuthData] = useState({ name: "", email: "", password: "" });
  const [isProcessing, setIsProcessing] = useState(false);

  const availableServices = category ? SERVICES[category] : [];
  const activeService = availableServices?.find(s => s.name === serviceName);

  const calculateTotal = () => {
    if (!activeService) return 0;
    const base = activeService.basePrice * quantity;
    const tiered = base * TIERS[selectedTier].multiplier;
    const urgent = tiered * URGENCY_OPTIONS[urgency].multiplier;
    return Math.round(urgent);
  };

  const total = calculateTotal();

  const handlePay = async () => {
    setIsProcessing(true);
    setTimeout(() => { alert(`Payment of $${total} Successful!`); setIsProcessing(false); close(); }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[800px] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Close Button */}
        <button onClick={close} className="absolute top-4 right-4 z-50 p-2 bg-zinc-100/80 hover:bg-zinc-200 rounded-full text-zinc-600 transition-all">
          <X className="w-5 h-5" />
        </button>

        {/* --- LEFT PANEL: Live Receipt (Top on Mobile) --- */}
        <div className="w-full md:w-[40%] bg-[#1a1f2e] text-white p-6 md:p-10 flex flex-col justify-between relative overflow-hidden shrink-0 min-h-[280px]">
           <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />
           
           <div className="relative z-10">
             <div className="flex items-center gap-2 mb-2">
               <ShieldCheck className="w-5 h-5 text-emerald-400" />
               <span className="text-sm font-medium text-zinc-400">Secure Checkout</span>
             </div>
             <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Task Partner</h2>
           </div>

           {/* The "Card" Graphic */}
           <div className="relative z-10 my-4 md:my-8">
             <div className={`w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br ${TIERS[selectedTier].gradient} p-5 md:p-6 shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden transition-all duration-500`}>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
                <div className="relative flex justify-between items-start">
                   <div className="w-10 h-8 rounded bg-amber-200/80 shadow-inner border border-amber-300/50" />
                   <div className="text-right">
                     <span className="block text-[10px] font-bold text-white/70 uppercase tracking-wider">Total</span>
                     <span className="block text-2xl font-bold text-white">${total}</span>
                   </div>
                </div>
                <div className="relative">
                  <div className="text-[10px] text-white/60 uppercase mb-1">Active Tier</div>
                  <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                    {TIERS[selectedTier].icon} {selectedTier}
                  </div>
                </div>
             </div>
           </div>

           <div className="relative z-10 hidden md:block text-xs text-zinc-500">
             Powered by Stripe • 256-bit SSL Encrypted
           </div>
        </div>

        {/* --- RIGHT PANEL: Form Inputs --- */}
        <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 md:p-10">
            
            {/* Steps */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <span className={`font-bold ${page === 1 ? "text-zinc-900" : "text-emerald-600"}`}>1. Configure</span>
              <span className="text-zinc-300">/</span>
              <span className={`font-bold ${page === 2 ? "text-zinc-900" : "text-zinc-400"}`}>2. Payment</span>
            </div>

            {page === 1 ? (
              <div className="space-y-6">
                
                {/* 1. Category & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-500 uppercase">Category</label>
                    <div className="relative">
                      <select 
                        className="w-full h-12 pl-4 pr-10 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none appearance-none transition-all"
                        value={category}
                        onChange={(e) => { setCategory(e.target.value); setServiceName(""); }}
                      >
                        <option value="">Select Category...</option>
                        {Object.keys(SERVICES).map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-500 uppercase">Service</label>
                    <div className="relative">
                      <select 
                        className="w-full h-12 pl-4 pr-10 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none appearance-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        disabled={!category}
                      >
                        <option value="">Select Service...</option>
                        {availableServices?.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* 2. Tier Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Quality Tier</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(TIERS).map(([key, tier]) => {
                      const isSel = selectedTier === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedTier(key as TierKey)}
                          className={`relative p-3 rounded-xl border-2 text-left transition-all ${isSel ? 'border-emerald-500 bg-emerald-50' : 'border-zinc-100 hover:border-zinc-200 bg-white'}`}
                        >
                          <div className={`mb-1.5 w-7 h-7 rounded-lg bg-gradient-to-br ${tier.gradient} flex items-center justify-center text-white`}>
                            {tier.icon}
                          </div>
                          <div className="font-bold text-xs md:text-sm text-zinc-900">{tier.name}</div>
                          <div className="text-[10px] text-zinc-500 font-medium">x{tier.multiplier} Rate</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 3. Quantity Stepper & Urgency */}
                {activeService && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Custom Number Stepper */}
                      <div className="w-full md:w-1/3 space-y-1.5">
                        <label className="text-xs font-bold text-zinc-500 uppercase">
                          {activeService.pricingType === 'hourly' ? 'Hours' : 'Quantity'}
                        </label>
                        <div className="flex items-center h-12 bg-zinc-50 border border-zinc-200 rounded-xl px-1">
                          <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="flex-1 text-center font-bold text-zinc-900 text-lg">
                            {quantity}
                          </div>
                          <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-lg transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 space-y-1.5">
                        <label className="text-xs font-bold text-zinc-500 uppercase">Urgency</label>
                        <div className="flex bg-zinc-100 p-1 rounded-xl h-12">
                          {Object.entries(URGENCY_OPTIONS).map(([k, v]) => (
                            <button
                              key={k}
                              onClick={() => setUrgency(k as UrgencyKey)}
                              className={`flex-1 text-xs font-bold rounded-lg transition-all ${urgency === k ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                            >
                              {v.label.split(" ")[0]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-500 uppercase">Task Details</label>
                      <textarea 
                        className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none resize-none transition-all shadow-inner"
                        rows={3}
                        placeholder="Describe your requirements clearly..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                {/* PAGE 2: Summary */}
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                   <h3 className="text-sm font-bold text-zinc-900 mb-4">Order Summary</h3>
                   <div className="space-y-3 text-sm font-medium">
                      <div className="flex justify-between text-zinc-600">
                        <span>{selectedTier} Tier</span>
                        <span>x{TIERS[selectedTier].multiplier}</span>
                      </div>
                      <div className="flex justify-between text-zinc-600">
                        <span>Base Rate</span>
                        <span>${activeService?.basePrice}</span>
                      </div>
                      <div className="flex justify-between text-zinc-600">
                         <span>Multiplier ({quantity})</span>
                         <span>x{quantity}</span>
                      </div>
                      <div className="border-t border-zinc-200 my-2" />
                      <div className="flex justify-between items-center text-lg">
                         <span className="font-bold text-zinc-900">Total</span>
                         <span className="font-bold text-emerald-600">${total}</span>
                      </div>
                   </div>
                </div>

                {/* Auth Fields - Fixed Contrast */}
                <div className="space-y-4">
                   <div className="flex items-center justify-between mb-1">
                     <h3 className="text-sm font-bold text-zinc-900">Contact Info</h3>
                     <button onClick={() => setIsLoginMode(!isLoginMode)} className="text-xs text-emerald-600 font-bold hover:underline">
                        {isLoginMode ? "Create Account" : "Login Instead"}
                     </button>
                   </div>
                   
                   {!isLoginMode && (
                     <input 
                       type="text" placeholder="Full Name" 
                       className="w-full h-14 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-900 placeholder-zinc-400 outline-none focus:border-emerald-500 transition-all shadow-inner"
                       value={authData.name} onChange={e => setAuthData({...authData, name: e.target.value})}
                     />
                   )}
                   <input 
                      type="email" placeholder="Email Address" 
                      className="w-full h-14 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-900 placeholder-zinc-400 outline-none focus:border-emerald-500 transition-all shadow-inner"
                      value={authData.email} onChange={e => setAuthData({...authData, email: e.target.value})}
                   />
                   <input 
                      type="password" placeholder="Password" 
                      className="w-full h-14 px-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-900 placeholder-zinc-400 outline-none focus:border-emerald-500 transition-all shadow-inner"
                      value={authData.password} onChange={e => setAuthData({...authData, password: e.target.value})}
                   />
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-zinc-100 bg-white">
             {page === 1 ? (
               <button 
                 onClick={() => setPage(2)} 
                 disabled={!activeService || !details}
                 className="w-full h-14 bg-zinc-900 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-lg shadow-zinc-900/10"
               >
                 Continue <ArrowRight className="w-5 h-5" />
               </button>
             ) : (
               <div className="flex gap-3">
                 <button onClick={() => setPage(1)} className="w-14 h-14 flex items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-600 transition-all">
                   <ArrowLeft className="w-5 h-5" />
                 </button>
                 <button 
                   onClick={handlePay}
                   disabled={isProcessing}
                   className="flex-1 h-14 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-500 disabled:opacity-70 flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
                 >
                   {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-4 h-4" />}
                   {isProcessing ? "Processing..." : `Pay $${total}`}
                 </button>
               </div>
             )}
          </div>

        </div>
      </div>
    </div>
  );
}