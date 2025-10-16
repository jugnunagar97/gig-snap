"use client";
import React, { useEffect, useRef, useState } from "react";
import { useOrderModal } from "@/components/OrderModalContext";

const PLANS = [
  {
    name: "Starter",
    badge: "Budget‑Friendly",
    headline: "Best for small, well‑defined tasks",
    desc: "Great for simple, one‑off gigs. Vetted VAs with standard delivery.",
    features: ["Vetted VAs", "Basic support", "24–48h delivery"],
    highlight: false,
  },
  {
    name: "Professional",
    badge: "Most Popular",
    headline: "Premium assistants, priority delivery",
    desc: "Our recommended tier for most gigs: higher quality and faster turnaround.",
    features: ["Premium VAs", "Priority support", "Quality review", "12–24h delivery"],
    highlight: true,
  },
  {
    name: "Enterprise",
    badge: "Best Value",
    headline: "Top 1% VAs and dedicated management",
    desc: "For complex or ongoing work. Dedicated manager and double QA review.",
    features: ["Top 1% VAs", "Dedicated manager", "Double QA review", "Same‑day delivery"],
    highlight: false,
  },
];

export default function PricingSection() {
  const [reveal, setReveal] = useState(false);
  const { open } = useOrderModal();
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setReveal(true);
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="pricing" className="relative py-24 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Three‑tier system
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Choose your delivery style</h2>
          <p className="mt-4 text-lg text-gray-600">Pick a tier to shape speed, QA and collaboration. You’ll configure the task on the next step—no vague "quotes" here.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <div key={p.name} className={`group relative rounded-3xl border ${p.highlight ? 'border-transparent bg-gradient-to-br from-emerald-400 to-cyan-400 p-[1px]' : 'border-gray-200'} ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all`} style={{ transitionDuration: '600ms', transitionDelay: `${i * 120}ms` }}>
              <div className="rounded-3xl bg-white p-6 h-full">
                {p.highlight && <div className="absolute -top-3 right-6 text-xs font-semibold px-2 py-0.5 rounded-full bg-black text-white">Most popular</div>}
                <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-emerald-700">{p.name}</div>
                  {p.badge && <div className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{p.badge}</div>}
                </div>
                <div className="mt-2 text-base font-semibold text-gray-900">{p.headline}</div>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => open({ tier: p.name.toLowerCase() as "starter" | "professional" | "enterprise" })}
                  className={`mt-6 inline-flex items-center gap-2 w-full justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-sm transition-all`}
                >
                  Start with {p.name}
                </button>
                <a href="/order" className="mt-3 block text-center text-xs font-semibold text-emerald-700 hover:text-emerald-800">Prefer full customization? Go to order page →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <div className="font-semibold text-gray-900">Why cheaper than marketplaces?</div>
            <p className="mt-2">We avoid 15–20% platform markups and bidding overhead. Your budget goes directly to skilled assistants and QA.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <div className="font-semibold text-gray-900">Quality without surprises</div>
            <p className="mt-2">Playbooks, SLAs and review checklists make output consistent—no lottery. Scale up or down anytime.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <div className="font-semibold text-gray-900">Fair for you and VAs</div>
            <p className="mt-2">Transparent pricing and on‑shore coordination keep delivery efficient while paying VAs fairly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


