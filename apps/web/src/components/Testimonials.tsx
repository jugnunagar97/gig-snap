export default function Testimonials() {
  const quotes = [
    { q: "GigSnap turned our backlog into shipped outcomes in days.", a: "Growth Lead, SaaS" },
    { q: "Super fast, super consistent. Exactly what we needed.", a: "Founder, D2C" },
    { q: "The pro plan pays for itself every week.", a: "Ops Manager" },
  ];
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Loved by fast teams</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {quotes.map((t, idx) => (
            <figure key={t.q} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-400 to-emerald-400" />
                <div className="text-sm font-semibold">{t.a}</div>
              </div>
              <blockquote className="mt-3 text-sm">“{t.q}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


