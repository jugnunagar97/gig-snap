"use client";
import React, { useMemo, useRef, useState, useLayoutEffect } from "react";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "How does GigSnap pricing work?",
    a: "You post a gig with context and deadline. We respond quickly with a fixed quote, scope and ETA—no platform markups or hidden fees.",
  },
  {
    q: "What kinds of tasks can I delegate?",
    a: "Administrative support (email, calendar, docs), marketing (social scheduling, basic SEO, newsletters), e‑commerce ops (listings, inventory, Tier‑1 support) and research (leads, competitors, market snapshots).",
  },
  {
    q: "How fast is delivery?",
    a: "Most micro‑tasks are turned around within 24 hours. With time‑zone leverage, you can hand off end‑of‑day and wake up to results.",
  },
  {
    q: "How do you ensure quality?",
    a: "Every delivery is QA reviewed against a checklist. We document learnings into playbooks so output gets faster and more consistent over time.",
  },
  {
    q: "Is my data secure? Will you sign an NDA?",
    a: "We follow least‑privilege access, revoke on completion, and can sign NDAs. We only request the minimum access required to complete the gig.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [heights, setHeights] = useState<number[]>([]);

  // Measure panels to prevent peek issues and animate exact height
  useLayoutEffect(() => {
    const hs = FAQS.map((_, i) => panelRefs.current[i]?.scrollHeight || 0);
    setHeights(hs);
  }, []);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }), []);

  return (
    <section id="faqs" className="relative py-24 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            FAQs
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Questions, answered</h2>
          <p className="mt-4 text-lg text-gray-600">Everything you need to know about delegating micro‑tasks with GigSnap.</p>
        </div>

        {/* Two-column responsive accordion with premium borders */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className={`group relative rounded-2xl p-[1.2px] bg-gradient-to-br from-emerald-200/60 to-cyan-200/40 ${isOpen ? 'opacity-100' : 'opacity-95'} transition`}> 
                <div className="rounded-[calc(1rem)] bg-white">
                  <button
                    className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 rounded-[calc(1rem)] ${isOpen ? 'bg-emerald-50/50' : ''} focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900 tracking-tight">
                      {item.q}
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-md border ${isOpen ? 'border-emerald-300 text-emerald-700 bg-emerald-50' : 'border-gray-300 text-gray-700'} transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    ref={el => (panelRefs.current[idx] = el)}
                    aria-hidden={!isOpen}
                    className={`px-5 overflow-hidden ${isOpen ? 'pt-1 pb-5' : 'pt-0 pb-0'}`}
                    style={{ maxHeight: isOpen ? `${heights[idx] || 0}px` : '0px', transition: 'max-height 320ms ease' }}
                  >
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}


