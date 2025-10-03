"use client";
import React, { useEffect, useRef, useState } from "react";

const GUARANTEES = [
  {
    title: "Fixed‑scope quotes",
    desc: "Every gig includes a written scope, ETA and fixed quote before work starts.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7"/></svg>
    )
  },
  {
    title: "QA on every delivery",
    desc: "A second set of eyes verifies accuracy, formatting and completeness.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75"/></svg>
    )
  },
  {
    title: "Data privacy & NDA",
    desc: "We follow least‑privilege access, revoke on completion and can sign NDAs.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4 0-7 2-7 6v2h14v-2c0-4-3-6-7-6z"/></svg>
    )
  },
  {
    title: "Overnight turnarounds",
    desc: "Time‑zone leverage means you wake up to progress and deliverables.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"/></svg>
    )
  }
];

export default function GuaranteesSection() {
  const [reveal, setReveal] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setReveal(true);
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="guarantees" className="relative py-24 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Guarantees & Trust
          </span>
           <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Quality you can rely on</h2>
           <p className="mt-4 text-lg text-gray-600">We combine clear scopes, QA and privacy standards so every micro‑task is done right—on time and on budget.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g, i) => (
            <div key={g.title} className={`group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDuration: '600ms', transitionDelay: `${i * 120}ms` }}>
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-emerald-200/30" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm">{g.icon}</div>
                <div className="mt-3 text-base font-semibold text-gray-900 tracking-tight">{g.title}</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{g.desc}</p>
                <div className="mt-5 h-1 w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#post-gig" className="gs-btn gs-gradient inline-flex items-center gap-2">
            Post a gig for a fast quote
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}


