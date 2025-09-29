export default function FAQ() {
  const faqs = [
    { q: "How fast can you start?", a: "Most tasks begin within 24 hours, often same‑day." },
    { q: "Can I scale down or up?", a: "Yes—start with one task and move into recurring workflows as needed." },
    { q: "What about NDAs?", a: "We support NDAs and confidentiality for sensitive work." },
  ];
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                {f.q}
                <svg className="size-4 text-neutral-400 group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
              </summary>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


