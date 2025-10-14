"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  CheckCircle2,
  Upload,
  X,
  FileText,
  Clock,
  Hash,
  Layers,
  Star,
  Sparkles,
  Crown,
  Loader2,
} from "lucide-react";

// Global declaration for Razorpay
declare global {
  interface Window {
    Razorpay?: any;
  }
}

type PricingType = "hourly" | "unit" | "project";
type TierKey = "starter" | "professional" | "enterprise";

type TierInfo = {
  name: string;
  icon: React.ReactNode;
  badge: string;
  multiplier: number;
  benefits: string[];
  color: string;
};

type ServiceItem = {
  name: string;
  basePrice: number;
  pricingType: PricingType;
  unit?: string;
  options?: number[];
};

type Services = Record<string, ServiceItem[]>;
type UrgencyKey = "standard" | "express" | "rush";
type UrgencyOption = {
  label: string;
  sublabel: string;
  multiplier: number;
  color: "emerald" | "cyan" | "orange";
};

export default function DashboardOrderForm() {
  const [selectedTier, setSelectedTier] = useState<TierKey>("professional");
  const [formData, setFormData] = useState({
    category: "",
    service: "",
    urgency: "standard" as UrgencyKey,
    quantity: 1,
    details: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // TIERED PRICING SYSTEM (Same as original)
  const tiers: Record<TierKey, TierInfo> = {
    starter: {
      name: "Starter",
      icon: <Star className="w-5 h-5" />,
      badge: "Budget-Friendly",
      multiplier: 1,
      benefits: ["Vetted VAs", "Basic Support", "24-48h delivery"],
      color: "from-gray-500 to-gray-600",
    },
    professional: {
      name: "Professional",
      icon: <Sparkles className="w-5 h-5" />,
      badge: "Most Popular",
      multiplier: 1.4,
      benefits: ["Premium VAs", "Priority Support", "Quality Review", "12-24h delivery"],
      color: "from-emerald-500 to-cyan-500",
    },
    enterprise: {
      name: "Enterprise",
      icon: <Crown className="w-5 h-5" />,
      badge: "Best Value",
      multiplier: 1.8,
      benefits: ["Top 1% VAs", "Dedicated Manager", "Double QA Review", "Same-day delivery", "Direct communication"],
      color: "from-purple-500 to-pink-500",
    },
  };

  // BASE PRICING (Same services as original)
  const services: Services = {
    "Administrative Support": [
      { name: "Email & Calendar Management", basePrice: 25, pricingType: "hourly", unit: "hour", options: [2, 5, 10, 20, 40] },
      { name: "Inbox Triage & Organization", basePrice: 20, pricingType: "hourly", unit: "hour", options: [1, 2, 4, 8] },
      { name: "Travel Itinerary Planning", basePrice: 45, pricingType: "project", unit: "project" },
      { name: "Data Entry", basePrice: 25, pricingType: "unit", unit: "100 entries", options: [1, 2, 3, 5, 10] },
      { name: "Cloud File Organization", basePrice: 22, pricingType: "hourly", unit: "hour", options: [2, 5, 10] },
      { name: "Audio/Video Transcription", basePrice: 30, pricingType: "hourly", unit: "hour", options: [1, 2, 4, 8] },
      { name: "Meeting Minutes & Notes", basePrice: 30, pricingType: "project", unit: "meeting", options: [1, 2, 3, 5] },
    ],
    "Social Media & Marketing": [
      { name: "Content Scheduling", basePrice: 35, pricingType: "unit", unit: "week", options: [1, 2, 4, 8] },
      { name: "Community Engagement", basePrice: 20, pricingType: "hourly", unit: "hour", options: [2, 5, 10, 20] },
      { name: "Basic Graphic Creation", basePrice: 40, pricingType: "unit", unit: "graphic", options: [1, 3, 5, 10] },
      { name: "Profile Optimization", basePrice: 50, pricingType: "project", unit: "profile", options: [1, 2, 3] },
      { name: "Blog Post Formatting", basePrice: 25, pricingType: "unit", unit: "post", options: [1, 3, 5, 10] },
      { name: "Keyword Research", basePrice: 45, pricingType: "project", unit: "project" },
      { name: "On-Page SEO Checks", basePrice: 38, pricingType: "unit", unit: "page", options: [1, 5, 10, 20] },
      { name: "Newsletter Formatting", basePrice: 28, pricingType: "unit", unit: "newsletter", options: [1, 2, 4] },
    ],
    "E-commerce Support": [
      { name: "Product Listing", basePrice: 38, pricingType: "unit", unit: "10 products", options: [1, 2, 5, 10] },
      { name: "Inventory Updates", basePrice: 28, pricingType: "hourly", unit: "hour", options: [1, 2, 5, 10] },
      { name: "Competitor Price Monitoring", basePrice: 35, pricingType: "hourly", unit: "hour", options: [2, 5, 10] },
      { name: "Order Fulfillment Admin", basePrice: 25, pricingType: "hourly", unit: "hour", options: [2, 5, 10, 20] },
      { name: "Customer Support", basePrice: 38, pricingType: "unit", unit: "10 tickets", options: [1, 2, 5] },
      { name: "Review Management", basePrice: 32, pricingType: "hourly", unit: "hour", options: [2, 5, 10] },
    ],
    "Research & Analysis": [
      { name: "Lead Generation", basePrice: 65, pricingType: "unit", unit: "50 leads", options: [1, 2, 4, 10] },
      { name: "Competitor Analysis Report", basePrice: 95, pricingType: "unit", unit: "competitor", options: [1, 3, 5] },
      { name: "Market Data Collection", basePrice: 75, pricingType: "project", unit: "project" },
      { name: "Content Research", basePrice: 42, pricingType: "hourly", unit: "hour", options: [2, 5, 10] },
      { name: "Recruitment Support", basePrice: 58, pricingType: "hourly", unit: "hour", options: [3, 5, 10, 20] },
      { name: "Podcast/Guest Research", basePrice: 58, pricingType: "project", unit: "project" },
    ],
  };

  const urgencyOptions: Record<UrgencyKey, UrgencyOption> = {
    standard: { label: "Standard", sublabel: "24-48h", multiplier: 1, color: "emerald" },
    express: { label: "Express", sublabel: "12-24h", multiplier: 1.25, color: "cyan" },
    rush: { label: "Rush", sublabel: "Same day", multiplier: 1.5, color: "orange" },
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getSelectedService = (): ServiceItem | null => {
    if (!formData.service || !formData.category) return null;
    return services[formData.category]?.find((s) => s.name === formData.service) || null;
  };

  const calculateTotal = (): number => {
    const selectedService = getSelectedService();
    if (!selectedService) return 0;
    return Math.round(
      selectedService.basePrice *
        formData.quantity *
        tiers[selectedTier].multiplier *
        urgencyOptions[formData.urgency].multiplier
    );
  };

  const getPricingIcon = (type: PricingType) => {
    switch (type) {
      case "hourly":
        return <Clock className="w-4 h-4" />;
      case "unit":
        return <Hash className="w-4 h-4" />;
      case "project":
        return <Layers className="w-4 h-4" />;
    }
  };

  const getPricingLabel = (service: ServiceItem) => {
    const tierPrice = Math.round(service.basePrice * tiers[selectedTier].multiplier);
    switch (service.pricingType) {
      case "hourly":
        return `$${tierPrice}/hour`;
      case "unit":
        return `$${tierPrice} per ${service.unit}`;
      case "project":
        return `$${tierPrice} (fixed)`;
    }
  };

  const getDropdownLabel = (service: ServiceItem, quantity: number): string => {
    const tierPrice = Math.round(service.basePrice * tiers[selectedTier].multiplier);
    const totalPrice = tierPrice * quantity;
    
    if (service.pricingType === "unit") {
      if (service.unit === "100 entries") return `${quantity * 100} entries - $${totalPrice}`;
      if (service.unit === "10 products") return `${quantity * 10} products - $${totalPrice}`;
      if (service.unit === "10 tickets") return `${quantity * 10} tickets - $${totalPrice}`;
      if (service.unit === "50 leads") return `${quantity * 50} leads - $${totalPrice}`;
      if (service.unit === "week") return `${quantity} ${quantity === 1 ? "week" : "weeks"} - $${totalPrice}`;
      if (service.unit === "graphic") return `${quantity} ${quantity === 1 ? "graphic" : "graphics"} - $${totalPrice}`;
      if (service.unit === "post") return `${quantity} ${quantity === 1 ? "post" : "posts"} - $${totalPrice}`;
      if (service.unit === "page") return `${quantity} ${quantity === 1 ? "page" : "pages"} - $${totalPrice}`;
      if (service.unit === "newsletter") return `${quantity} ${quantity === 1 ? "newsletter" : "newsletters"} - $${totalPrice}`;
      if (service.unit === "competitor") return `${quantity} ${quantity === 1 ? "competitor" : "competitors"} - $${totalPrice}`;
      return `${quantity} ${service.unit}${quantity > 1 ? "s" : ""} - $${totalPrice}`;
    }
    
    if (service.pricingType === "hourly") return `${quantity} ${quantity === 1 ? "hour" : "hours"} - $${totalPrice}`;
    if (service.options) return `${quantity} ${service.unit}${quantity > 1 ? "s" : ""} - $${totalPrice}`;
    return `${quantity}`;
  };

  const getQuantityLabel = (service: ServiceItem): string => {
    if (service.pricingType === "hourly") return "Hours Needed";
    if (service.pricingType === "unit") return "Quantity";
    if (service.pricingType === "project" && service.options) return "Scope";
    return "Quantity";
  };

  useEffect(() => {
    const selectedService = getSelectedService();
    if (selectedService?.options) {
      setFormData((prev) => ({ ...prev, quantity: selectedService.options![0] }));
    } else {
      setFormData((prev) => ({ ...prev, quantity: 1 }));
    }
  }, [formData.service]);

  const selectedService = getSelectedService();
  const total = calculateTotal();

  const handlePay = async () => {
    setIsProcessing(true);
    const amount = total;
    const currency = "USD";

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });

      const data = await res.json();
      if (!res.ok || !data?.orderId) {
        alert("Unable to start payment: " + (data?.error || "Unknown error"));
        return;
      }

      if (!window.Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Razorpay"));
          document.body.appendChild(script);
        });
      }

      const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY as string;
      if (!key) {
        alert("Missing NEXT_PUBLIC_RAZORPAY_KEY. Add it to .env.local");
        setIsProcessing(false);
        return;
      }

      const rzp = new window.Razorpay({
        key,
        amount: data.amount,
        currency: data.currency,
        name: "Task Partner",
        description: "Order Payment",
        order_id: data.orderId,
        handler: function (response: any) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        theme: { color: "#10b981" },
      });

      rzp.open();
    } catch (e: any) {
      alert("Payment error: " + (e?.message || "Unknown error"));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* TIER SELECTION */}
      <div>
        <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Select Your Tier</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {Object.entries(tiers).map(([key, tier]) => {
            const isSelected = selectedTier === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedTier(key as TierKey)}
                className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-cyan-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {key === "professional" && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-r ${tier.color} text-white`}>
                    {tier.icon}
                  </div>
                  <div>
                    <div className="font-bold text-base text-gray-900">{tier.name}</div>
                    <div className="text-xs text-gray-500">{tier.badge}</div>
                  </div>
                </div>

                <ul className="space-y-1">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {isSelected && (
                  <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CATEGORY & SERVICE */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
          <div className="relative">
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value, service: "" })}
              className="w-full px-4 py-2.5 bg-white text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
            >
              <option value="">Choose category...</option>
              {Object.keys(services).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {formData.category && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service</label>
            <div className="relative">
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 bg-white text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
              >
                <option value="">Select service...</option>
                {services[formData.category].map((service) => (
                  <option key={service.name} value={service.name}>{service.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        )}
      </div>

      {/* PRICING DISPLAY */}
      {selectedService && (
        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
              {getPricingIcon(selectedService.pricingType)}
            </div>
            <div>
              <div className="text-xs text-gray-600 font-semibold uppercase">{tiers[selectedTier].name} Tier Pricing</div>
              <div className="text-base font-bold text-gray-900">{getPricingLabel(selectedService)}</div>
            </div>
          </div>
        </div>
      )}

      {/* DELIVERY SPEED */}
      {formData.service && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Speed</label>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(urgencyOptions).map(([key, option]) => {
              const k = key as UrgencyKey;
              const isSelected = formData.urgency === k;
              return (
                <button
                  key={k}
                  onClick={() => setFormData({ ...formData, urgency: k })}
                  className={`relative p-3 rounded-lg border-2 transition text-left ${
                    isSelected
                      ? option.color === "emerald"
                        ? "border-emerald-500 bg-emerald-50"
                        : option.color === "cyan"
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {isSelected && <CheckCircle2 className="absolute top-2 right-2 w-4 h-4 text-emerald-600" />}
                  <div className="font-bold text-sm text-gray-900">{option.label}</div>
                  <div className="text-xs text-gray-600">{option.sublabel}</div>
                  {option.multiplier > 1 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block bg-emerald-100 text-emerald-700">
                      +{Math.round((option.multiplier - 1) * 100)}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* QUANTITY */}
      {selectedService && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{getQuantityLabel(selectedService)}</label>
          {selectedService.options ? (
            <div className="relative">
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value, 10) })}
                className="w-full px-4 py-2.5 bg-white text-sm text-gray-900 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
              >
                {selectedService.options.map((opt) => (
                  <option key={opt} value={opt}>{getDropdownLabel(selectedService, opt)}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          ) : (
            <input
              type="number"
              min={1}
              max={10}
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value, 10) || 1 })}
              className="w-28 px-4 py-2.5 bg-white text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
            />
          )}
        </div>
      )}

      {/* TASK DETAILS & FILE UPLOAD */}
      {formData.service && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Task Details</label>
          <textarea
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Describe what you need done in detail..."
            rows={4}
            className="w-full px-4 py-2.5 bg-white text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition resize-none"
          />

          <div className="mt-3">
            <label
              htmlFor="file-upload-dash"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-dashed border-emerald-300 rounded-lg cursor-pointer hover:from-emerald-100 hover:to-cyan-100 transition"
            >
              <Upload className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Upload Files (Optional)</span>
              <input
                id="file-upload-dash"
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png"
              />
            </label>

            {uploadedFiles.length > 0 && (
              <div className="mt-2 space-y-1.5">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 truncate">{file.name}</span>
                      <span className="text-xs text-gray-500 flex-shrink-0">({(file.size / 1024).toFixed(1)}KB)</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="ml-2 p-1 hover:bg-red-100 rounded transition"
                      aria-label="Remove file"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ORDER SUMMARY & PAY */}
      {formData.service && formData.details && (
        <div className="pt-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-0.5">Total Cost</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">${total}</div>
              </div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${tiers[selectedTier].color} text-white text-xs font-bold`}>
                {tiers[selectedTier].icon}
                {tiers[selectedTier].name}
              </div>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>Base Price ({tiers[selectedTier].name}):</span>
                <span className="font-semibold">${Math.round(selectedService!.basePrice * tiers[selectedTier].multiplier)} × {formData.quantity}</span>
              </div>
              {urgencyOptions[formData.urgency].multiplier > 1 && (
                <div className="flex justify-between">
                  <span>Urgency ({urgencyOptions[formData.urgency].label}):</span>
                  <span className="font-semibold">×{urgencyOptions[formData.urgency].multiplier}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handlePay}
            disabled={isProcessing}
            className={`w-full py-3.5 rounded-lg font-bold text-base shadow-lg transition flex items-center justify-center gap-2 ${
              isProcessing
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-xl hover:from-emerald-600 hover:to-cyan-600"
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              `Pay $${total}`
            )}
          </button>
        </div>
      )}
    </div>
  );
}
