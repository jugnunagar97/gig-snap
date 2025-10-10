"use client";

import React, { useState } from "react";
import { ChevronDown, Zap, Package, Mail, Lock, User } from "lucide-react";

type ServiceItem = { name: string; price: number; time: string };
type Services = Record<string, ServiceItem[]>;
type UrgencyKey = "standard" | "express" | "rush";
type UrgencyOption = {
  label: string;
  sublabel: string;
  multiplier: number;
  color: "blue" | "purple" | "orange";
};

export default function OrderForm() {
  const [page, setPage] = useState<number>(1);
  const [formData, setFormData] = useState({
    category: "",
    service: "",
    urgency: "standard" as UrgencyKey,
    quantity: 1,
    details: "",
    email: "",
    password: "",
    name: "",
  });
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const services: Services = {
    "Administrative Support": [
      { name: "Email & Calendar Management", price: 20, time: "1-2h" },
      { name: "Inbox Triage & Organization", price: 12, time: "30-60min" },
      { name: "Travel Itinerary Planning", price: 35, time: "2-3h" },
      { name: "Data Entry (per 100 entries)", price: 20, time: "1-2h" },
      { name: "Cloud File Organization", price: 20, time: "1-2h" },
      { name: "Audio/Video Transcription", price: 50, time: "4-5h" },
      { name: "Meeting Minutes & Notes", price: 25, time: "1-2h" },
    ],
    "Social Media & Marketing": [
      { name: "Content Scheduling (7 days)", price: 28, time: "1-2h" },
      { name: "Community Engagement", price: 15, time: "30-60min" },
      { name: "Basic Graphic Creation", price: 30, time: "1-2h" },
      { name: "Profile Optimization", price: 40, time: "2-3h" },
      { name: "Blog Post Formatting", price: 20, time: "30-60min" },
      { name: "Keyword Research", price: 35, time: "2-3h" },
      { name: "On-Page SEO Checks", price: 30, time: "1-2h" },
      { name: "Newsletter Formatting", price: 20, time: "1h" },
    ],
    "E-commerce Support": [
      { name: "Product Listing (10 products)", price: 30, time: "2-3h" },
      { name: "Inventory Updates", price: 22, time: "1-2h" },
      { name: "Competitor Price Monitoring", price: 28, time: "1-2h" },
      { name: "Order Fulfillment Admin", price: 20, time: "1-2h" },
      { name: "Customer Support (10 tickets)", price: 30, time: "2-3h" },
      { name: "Review Management", price: 25, time: "1-2h" },
    ],
    "Research & Analysis": [
      { name: "Lead Generation (50 leads)", price: 50, time: "3-4h" },
      { name: "Competitor Analysis Report", price: 75, time: "4-6h" },
      { name: "Market Data Collection", price: 60, time: "3-5h" },
      { name: "Content Research", price: 35, time: "2-3h" },
      { name: "Recruitment Support", price: 50, time: "3-4h" },
      { name: "Podcast/Guest Research", price: 45, time: "2-4h" },
    ],
  };

  const urgencyOptions: Record<UrgencyKey, UrgencyOption> = {
    standard: { label: "Standard Delivery", sublabel: "24-48 hours", multiplier: 1, color: "blue" },
    express: { label: "Express Delivery", sublabel: "12-24 hours", multiplier: 1.25, color: "purple" },
    rush: { label: "Rush Delivery", sublabel: "Same day", multiplier: 1.5, color: "orange" },
  };

  const calculateTotal = (): number => {
    if (!formData.service) return 0;
    const selectedService = Object.values(services)
      .flat()
      .find((s) => s.name === formData.service);
    if (!selectedService) return 0;
    return Math.round(
      selectedService.price * urgencyOptions[formData.urgency].multiplier * formData.quantity
    );
  };

  const getServiceDetails = (): ServiceItem | null => {
    if (!formData.service) return null;
    return (
      Object.values(services)
        .flat()
        .find((s) => s.name === formData.service) || null
    );
  };

  const total = calculateTotal();
  const serviceDetails = getServiceDetails();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 text-gray-900">
      <div className="w-full max-w-5xl">
        {page === 1 && (
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Place Your Order</h1>
              <p className="text-indigo-100">Select your service and we&apos;ll handle the rest</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Service Category
                </label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value, service: "" })
                    }
                    className="w-full px-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl appearance-none cursor-pointer focus:border-indigo-500 focus:outline-none transition-all text-lg font-medium"
                  >
                    <option value="">Choose a category...</option>
                    {Object.keys(services).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {formData.category && (
                <div className="mb-8 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Specific Service
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl appearance-none cursor-pointer focus:border-indigo-500 focus:outline-none transition-all text-lg font-medium"
                    >
                      <option value="">Select a service...</option>
                      {services[formData.category].map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name} - ${service.price} ({service.time})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              )}

              {formData.service && (
                <div className="mb-8 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Delivery Speed
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(urgencyOptions).map(([key, option]) => {
                      const k = key as UrgencyKey;
                      const isSelected = formData.urgency === k;
                      return (
                        <button
                          key={k}
                          onClick={() => setFormData({ ...formData, urgency: k })}
                          className={
                            "p-6 rounded-xl border-2 transition-all " +
                            (isSelected
                              ? option.color === "blue"
                                ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                                : option.color === "purple"
                                  ? "border-purple-500 bg-purple-50 shadow-lg scale-105"
                                  : "border-orange-500 bg-orange-50 shadow-lg scale-105"
                              : "border-gray-200 hover:border-gray-300 hover:shadow")
                          }
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div
                              className={
                                "font-bold text-lg " +
                                (isSelected
                                  ? option.color === "blue"
                                    ? "text-blue-700"
                                    : option.color === "purple"
                                      ? "text-purple-700"
                                      : "text-orange-700"
                                  : "text-gray-900")
                              }
                            >
                              {option.label}
                            </div>
                            {option.multiplier > 1 && (
                              <span
                                className={
                                  "text-xs font-bold px-2 py-1 rounded-full " +
                                  (option.color === "blue"
                                    ? "bg-blue-100 text-blue-700"
                                    : option.color === "purple"
                                      ? "bg-purple-100 text-purple-700"
                                      : "bg-orange-100 text-orange-700")
                                }
                              >
                                +{Math.round((option.multiplier - 1) * 100)}%
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{option.sublabel}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {formData.service && (
                <div className="mb-8 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: parseInt(e.target.value, 10) || 1 })
                    }
                    className="w-full px-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all text-lg font-medium"
                  />
                </div>
              )}

              {formData.service && (
                <div className="mb-8 animate-fadeIn">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Task Details
                  </label>
                  <textarea
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe exactly what you need done. Be as specific as possible..."
                    rows={5}
                    className="w-full px-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all resize-none text-base"
                  />
                </div>
              )}

              {formData.service && formData.details && (
                <div className="animate-fadeIn">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Order Total</div>
                        <div className="text-4xl font-bold text-indigo-600">${total}</div>
                        {serviceDetails && (
                          <div className="text-xs text-gray-500 mt-1">
                            ${serviceDetails.price} × {formData.quantity} × {urgencyOptions[formData.urgency].multiplier}x
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-purple-600 font-semibold">
                          <Zap className="w-5 h-5" />
                          {urgencyOptions[formData.urgency].sublabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setPage(2)}
                    className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Continue to Checkout →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
              <button
                onClick={() => setPage(1)}
                className="text-purple-100 hover:text-white mb-4 flex items-center gap-2"
              >
                ← Back to order
              </button>
              <h1 className="text-4xl font-bold mb-2">{isLogin ? "Welcome Back" : "Create Account"}</h1>
              <p className="text-purple-100">
                {isLogin ? "Login to complete your order" : "Sign up to get started"}
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={
                    "flex-1 py-3 rounded-lg font-semibold transition-all " +
                    (isLogin ? "bg-white shadow text-indigo-600" : "text-gray-600")
                  }
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={
                    "flex-1 py-3 rounded-lg font-semibold transition-all " +
                    (!isLogin ? "bg-white shadow text-indigo-600" : "text-gray-600")
                  }
                >
                  Sign Up
                </button>
              </div>

              <div className="space-y-6">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all text-lg"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full pl-12 pr-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-6 py-4 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all text-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-gray-900">Order Summary</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-semibold text-gray-900">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-semibold text-gray-900">{urgencyOptions[formData.urgency].label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity</span>
                    <span className="font-semibold text-gray-900">×{formData.quantity}</span>
                  </div>
                  <div className="border-t border-purple-200 pt-3 mt-3 flex justify-between items-center">
                    <span className="text-gray-900 font-bold text-lg">Total</span>
                    <span className="text-3xl font-bold text-purple-600">${total}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                {isLogin ? "Login & Pay" : "Sign Up & Pay"} ${total}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">Secure payment powered by Stripe & PayPal</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}


