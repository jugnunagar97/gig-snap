export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "$0", note: "Pay per task", features: ["Email support", "48h turnaround"] },
    { name: "Pro", price: "$299", note: "/mo", features: ["Priority queue", "24h turnaround", "Weekly reports"] },
    { name: "Scale", price: "Custom", note: "", features: ["Dedicated team", "SLA", "Custom workflows"] },
  ];
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Simple pricing</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-3xl p-[1px] ${t.name === 'Pro' ? 'bg-gradient-to-tr from-sky-400 via-cyan-400 to-emerald-400' : 'bg-neutral-200/60 dark:bg-neutral-800/60'}`}>
              <div className={`rounded-[22px] h-full w-full bg-white dark:bg-neutral-950 border ${t.name === 'Pro' ? 'border-transparent' : 'border-neutral-200 dark:border-neutral-800'} p-6 flex flex-col`}>
                {t.name === 'Pro' && (<span className="absolute -top-3 right-6 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] px-2 py-0.5 font-semibold">Popular</span>)}
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="mt-2 text-4xl font-extrabold">{t.price}<span className="text-base font-normal">{t.note}</span></div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {t.features.map((f) => (<li key={f}>• {f}</li>))}
                </ul>
                <a href="#get-started" className={`mt-6 inline-flex justify-center rounded-full px-5 py-2 text-sm font-semibold ${t.name === 'Pro' ? 'bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-[#06202c] shadow-[0_8px_24px_-8px_rgba(56,189,248,0.6)]' : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90'}`}>Choose {t.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


