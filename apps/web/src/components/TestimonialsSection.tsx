"use client";
import React, { useMemo } from "react";

type Review = {
  id: string;
  name: string;
  position: string;
  industry: string;
  gigType: string;
  task: string;
  country: string; // with emoji
  date: string; // ISO or readable
  rating: number; // 1-5
  text: string;
};

const REVIEWS: Review[] = [
  { id: "GS-2025-1182", name: "Ava Thompson", position: "Founder", industry: "DTC Skincare", gigType: "Inbox Zero", task: "Email triage + calendar guardrails", country: "🇺🇸 USA", date: "2025-01-18", rating: 5, text: "Handed off my inbox on Friday—woke up Monday with a clean slate and templates I still use. Actual relief." },
  { id: "GS-2025-1093", name: "Daniel Weber", position: "Ops Lead", industry: "SaaS", gigType: "Lead List", task: "Lead gen + enrichment", country: "🇩🇪 Germany", date: "2025-02-02", rating: 5, text: "Solid list quality. Bounce rate was near zero and the custom fields matched our ICP perfectly." },
  { id: "GS-2025-1270", name: "Priya Nair", position: "Marketing Manager", industry: "EdTech", gigType: "Content Repurpose", task: "Turn webinar into blog + social", country: "🇬🇧 UK", date: "2025-01-09", rating: 5, text: "On-brand drafts with internal links and meta done. Published the same day." },
  { id: "GS-2025-1201", name: "Lucas Pereira", position: "eCom Owner", industry: "Home Goods", gigType: "Catalog Update", task: "Product listings + images", country: "🇧🇷 Brazil", date: "2024-12-28", rating: 5, text: "Fast SKU fixes and clean image renames. Reviews improved after the refresh." },
  { id: "GS-2025-1137", name: "Sofia Rossi", position: "Operations", industry: "Hospitality", gigType: "Docs Prep", task: "Proposal template + pricing table", country: "🇮🇹 Italy", date: "2025-01-31", rating: 4, text: "Template was crisp with all variables. Minor revisions handled same day." },
  { id: "GS-2025-1049", name: "Noah Clark", position: "Growth", industry: "Fintech", gigType: "Competitor Grid", task: "Features + pricing + angles", country: "🇨🇦 Canada", date: "2025-02-05", rating: 5, text: "Exactly what I needed for a board deck. Sources included. Saved me a full weekend." },
  { id: "GS-2025-1160", name: "Maya Cohen", position: "Founder", industry: "Health Coaching", gigType: "Newsletter", task: "Format + segment + send", country: "🇮🇱 Israel", date: "2025-01-22", rating: 5, text: "Segments were cleaned, links tracked, and we finally shipped weekly again." },
  { id: "GS-2025-1112", name: "Kenji Sato", position: "PM", industry: "IoT", gigType: "Minutes & Actions", task: "Meeting notes + tasks", country: "🇯🇵 Japan", date: "2025-01-27", rating: 5, text: "Notes caught nuances I missed. Action items synced to Trello. Super helpful." },
  { id: "GS-2025-1255", name: "Emma Martin", position: "COO", industry: "Legal Services", gigType: "Document Cleanup", task: "Contracts formatting", country: "🇫🇷 France", date: "2024-12-30", rating: 4, text: "Formatting matched our style guide perfectly. Quick turnaround over the weekend." },
  { id: "GS-2025-1084", name: "Arjun Mehta", position: "Founder", industry: "Creator Tools", gigType: "Social Calendar", task: "30‑day schedule + assets", country: "🇮🇳 India", date: "2025-02-04", rating: 5, text: "Queue filled with useful posts. Captions were on brand and short." },
  { id: "GS-2025-1078", name: "Chloe Nguyen", position: "Ops", industry: "Events", gigType: "Itinerary", task: "Travel plan + holds", country: "🇸🇬 Singapore", date: "2025-01-12", rating: 5, text: "They found better flight times than me and blocked calendars. Smooth." },
  { id: "GS-2025-1229", name: "Oliver Wright", position: "CEO", industry: "B2B Services", gigType: "CRM Hygiene", task: "Duplicates + fields", country: "🇦🇺 Australia", date: "2025-01-17", rating: 5, text: "Pipeline finally readable. Deduping rules were documented for next time." },
  { id: "GS-2025-1213", name: "Isabella García", position: "Head of CS", industry: "Marketplace", gigType: "Macros", task: "Support macros + tags", country: "🇲🇽 Mexico", date: "2025-02-01", rating: 4, text: "Ticket macros cut first response time. Good starter set with clear naming." },
  { id: "GS-2025-1107", name: "Ethan Brown", position: "Ops Analyst", industry: "Logistics", gigType: "Data Clean", task: "Sheets cleanup + checks", country: "🇺🇸 USA", date: "2025-01-05", rating: 5, text: "Formulas, validation and color rules. Sheet is usable again without fear." },
  { id: "GS-2025-1145", name: "Marta Kowalska", position: "Marketing", industry: "NGO", gigType: "Research", task: "Partner shortlist", country: "🇵🇱 Poland", date: "2025-01-21", rating: 5, text: "Good filters and contact info. Saved days of hunting." },
  { id: "GS-2025-1196", name: "Jonas Lind", position: "Founder", industry: "AI Tools", gigType: "Blog Prep", task: "Outline + meta + sources", country: "🇸🇪 Sweden", date: "2025-01-29", rating: 5, text: "Tight outlines with sources. Writer moved faster and we ranked for the long‑tail." },
  { id: "GS-2025-1062", name: "Layla Hussein", position: "E‑com Ops", industry: "Fashion", gigType: "Review Ops", task: "Request + moderate", country: "🇦🇪 UAE", date: "2025-01-08", rating: 4, text: "Requests sent on schedule and off‑topic reviews flagged. Neat reporting." },
  { id: "GS-2025-1238", name: "Victor Almeida", position: "BizDev", industry: "Services", gigType: "Prospect List", task: "List + first‑line", country: "🇵🇹 Portugal", date: "2025-01-24", rating: 5, text: "Personalized first‑lines were useful. We booked 3 intro calls." },
  { id: "GS-2025-1154", name: "Zara Khan", position: "Founder", industry: "Coaching", gigType: "Calendar", task: "Blocks + buffers", country: "🇵🇰 Pakistan", date: "2025-01-15", rating: 5, text: "Buffers and color coding helped me avoid context switching. Great little change." },
  { id: "GS-2025-1242", name: "Hannah Lee", position: "Product", industry: "EdTech", gigType: "Notes", task: "Summaries + action items", country: "🇰🇷 South Korea", date: "2025-01-26", rating: 5, text: "Concise summaries with action items linked to tickets. Exactly what I hoped for." },
];

export default function TestimonialsSection() {
  // JSON-LD for SEO
  const aggregateRating = useMemo(() => {
    const total = REVIEWS.length;
    const avg = REVIEWS.reduce((s, r) => s + r.rating, 0) / total;
    return { ratingValue: Number(avg.toFixed(1)), reviewCount: total };
  }, []);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GigSnap Micro-task Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    },
    review: REVIEWS.map(r => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      datePublished: r.date,
    })),
  }), []);

  const [revealed, setRevealed] = React.useState(false);
  const [slidesPerView, setSlidesPerView] = React.useState(1);
  const [current, setCurrent] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setRevealed(true);
    }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Determine slides per view responsively
  React.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setSlidesPerView(3);
      else if (w >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  // Build pages
  const pages = React.useMemo(() => {
    const arr: typeof REVIEWS[] = [] as any;
    for (let i = 0; i < REVIEWS.length; i += slidesPerView) {
      arr.push(REVIEWS.slice(i, i + slidesPerView));
    }
    return arr;
  }, [slidesPerView]);

  // Autoplay carousel
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % pages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [pages.length]);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            What our clients say
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Trusted by busy teams worldwide</h2>
          <p className="mt-4 text-lg text-gray-600">Real outcomes from real micro‑tasks—overnight results, clear scope and consistent quality.</p>
        </div>

        {/* Responsive, authentic grid */}
        {/* Carousel */}
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${pages.length * 100}%`, transform: `translateX(-${current * (100 / pages.length)}%)` }}
            >
              {pages.map((page, pIdx) => (
                <div key={pIdx} className="w-full" style={{ width: `${100 / pages.length}%` }}>
                  <div className={`grid gap-6 ${slidesPerView === 1 ? 'grid-cols-1' : slidesPerView === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {page.map((r) => (
                      <article key={r.id} className={`group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all card-interactive ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-emerald-200/30" />
                        <div className="relative z-10">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-base font-semibold text-gray-900 tracking-tight">{r.name}</div>
                              <div className="text-xs text-gray-600">{r.position} • {r.industry}</div>
                            </div>
                            <div className="text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-md px-2 py-1">{r.country}</div>
                          </div>
                          <div className="mt-3 text-sm text-gray-700 leading-relaxed">{r.text}</div>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-600">
                            <div className="rounded-lg border border-gray-200 bg-white px-2 py-1"><span className="font-semibold text-gray-900">Gig:</span> {r.gigType}</div>
                            <div className="rounded-lg border border-gray-200 bg-white px-2 py-1"><span className="font-semibold text-gray-900">Task:</span> {r.task}</div>
                            <div className="rounded-lg border border-gray-200 bg-white px-2 py-1"><span className="font-semibold text-gray-900">Order:</span> {r.id}</div>
                            <div className="rounded-lg border border-gray-200 bg-white px-2 py-1"><span className="font-semibold text-gray-900">Date:</span> {new Date(r.date).toLocaleDateString()}</div>
                          </div>
                          <div className="mt-4 inline-flex items-center gap-1 text-amber-500" aria-label={`Rating ${r.rating} out of 5`}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < r.rating ? 'fill-amber-400' : 'fill-gray-200'}`} viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.85L19.335 24 12 19.897 4.665 24 6 15.598 0 9.748l8.332-1.73z"/></svg>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {pages.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i+1}`} className={`h-2.5 w-2.5 rounded-full ${current === i ? 'bg-emerald-500' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
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


