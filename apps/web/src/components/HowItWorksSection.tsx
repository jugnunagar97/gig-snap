"use client";
import React, { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    k: 1,
    title: "Post your gig",
    desc: "Share the micro‑task, context and deadline. We’ll map it to a playbook and the right VA.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"/></svg>
    )
  },
  {
    k: 2,
    title: "We start within hours",
    desc: "Your VA spins up the workspace, templates and checklists. You can monitor progress live.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H8m4-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )
  },
  {
    k: 3,
    title: "Review & iterate",
    desc: "Approve deliverables or request edits. Every gig gets a QA pass and documented learnings.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75"/></svg>
    )
  }
];

export default function HowItWorksSection() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) setRevealed(true);
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="how-it-works" className="relative py-24 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            How it works
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Delegate today, ship tomorrow</h2>
          <p className="mt-4 text-lg text-gray-600">A fast, transparent flow designed for micro‑tasks and overnight turnarounds.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.k}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDuration: "600ms", transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-emerald-200/30" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm">
                    {s.icon}
                  </div>
                  <div className="text-sm font-semibold text-emerald-700">Step {s.k}</div>
                </div>
                <div className="mt-3 text-xl font-bold tracking-tight text-gray-900">{s.title}</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>

                <div className="mt-6 h-1 w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#post-gig" className="gs-btn gs-gradient inline-flex items-center gap-2">
            Post a gig now
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a href="#contact" className="gs-btn inline-flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-3 font-semibold text-gray-900">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}


