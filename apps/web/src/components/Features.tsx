export default function Features() {
  const items = [
    {
      title: "Email management",
      desc: "Triage, tag, and respond with AI‑assisted templates and SLAs.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7l9 6 9-6"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
      ),
    },
    {
      title: "Scheduling",
      desc: "Calendar booking, timezone handling, follow‑ups and reminders.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
      ),
    },
    {
      title: "Data work",
      desc: "Cleanup, enrichment, research and structured deliverables.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
      ),
    },
    {
      title: "Automation",
      desc: "Plug in AI flows to remove repetitive steps across tools.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1 .6 1.65 1.65 0 00-.33 1.82l.02.06a2 2 0 11-3.64 0l.02-.06A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-.6-1 1.65 1.65 0 00-1.82-.33l-.06.02a2 2 0 110-3.64l.06.02A1.65 1.65 0 004.6 9c.23-.41.37-.88.4-1.36a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6c.41-.23.88-.37 1.36-.4a1.65 1.65 0 001-.6l.02-.02a2 2 0 113.24 0l.02.02c.27.27.62.46 1 .6.48.03.95.17 1.36.4.41-.23.88-.37 1.36-.4.41.23.88.37 1.36.4"/></svg>
      ),
    },
  ];
  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Services built for speed and scale</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Start small with micro‑tasks and expand into always‑on workflows.</p>
        </header>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <div key={f.title} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-200 via-cyan-200 to-emerald-200 dark:from-sky-900/40 dark:via-cyan-900/40 dark:to-emerald-900/40">
              <div className="rounded-[15px] h-full w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-5 transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="inline-flex items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800 text-sky-600 dark:text-sky-300 p-2">
                  {f.icon}
                </div>
                <div className="mt-3 text-base font-semibold">{f.title}</div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


