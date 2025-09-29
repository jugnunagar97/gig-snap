export default function HowItWorks() {
  const steps = [
    { title: "Post a task", desc: "Describe outcomes, timeframes and any context." },
    { title: "We match fast", desc: "Assigned expert starts within hours, not days." },
    { title: "Review & iterate", desc: "Track progress, request changes, and approve." },
    { title: "Scale up", desc: "Turn tasks into recurring workflows when ready." },
  ];
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How it works</h2>
        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <ol className="space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="relative grid sm:grid-cols-2 gap-6 items-start">
                <div className="sm:text-right pr-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-[#06202c] font-bold shadow-sm">{i + 1}</span>
                    Step {i + 1}
                  </div>
                  <div className="mt-2 text-base font-semibold">{s.title}</div>
                </div>
                <div className="pl-6 text-sm text-neutral-600 dark:text-neutral-400">{s.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}


