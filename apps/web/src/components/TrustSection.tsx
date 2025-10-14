"use client";
import React, { useEffect, useRef, useState } from 'react';

const counters = [
  { label: 'Tasks Delivered', value: 254 },
  { label: 'Avg. Turnaround (hrs)', value: 12 },
  { label: 'Client Satisfaction', value: 98 },
  { label: 'Active Assistants', value: 250 },
];

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

const TrustSection: React.FC = () => {
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
    <section ref={ref} className="relative py-24 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Why teams trust Task Partner
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Proven, reliable, accountable</h2>
          <p className="mt-4 text-lg text-gray-600">Transparent delivery, audited quality checks and battle‑tested playbooks—so you can delegate with confidence.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {counters.map((c, i) => {
            const val = useCountUp(revealed ? c.value : 0, 1200 + i * 200);
            return (
              <div key={c.label} className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {val}
                  {c.label.includes('Satisfaction') && '%'}
                </div>
                <div className="mt-1 text-sm text-gray-600">{c.label}</div>
                <div className="absolute inset-x-8 -bottom-2 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((k) => (
            <div key={k} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all card-interactive">
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-emerald-200/30" />
              <div className="relative z-10">
                <div className="text-sm font-semibold text-emerald-700">Case study</div>
                <div className="mt-2 text-xl font-bold tracking-tight text-gray-900">Overnight inbox zero for a US SaaS CEO</div>
                <p className="mt-3 text-sm text-gray-600">We built a triage system, response templates and calendar guardrails. Results: 12h turnaround, 35% fewer meetings.</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gray-900 link-underscore">
                  Read more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;


