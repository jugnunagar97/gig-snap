export default function CTA() {
  return (
    <section id="get-started" className="py-20 sm:py-28 bg-gradient-to-tr from-sky-50 to-emerald-50 dark:from-[#071a25] dark:to-[#0b2a2a]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="rounded-3xl border border-sky-200/60 dark:border-emerald-900/40 bg-white/80 dark:bg-neutral-900/50 backdrop-blur p-8 sm:p-12 text-center shadow-[0_20px_80px_-40px_rgba(56,189,248,0.45)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Start building your team</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Free to try. No credit card required.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#create-account" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-[#06202c] px-6 py-3 text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(56,189,248,0.6)] hover:shadow-[0_12px_28px_-10px_rgba(56,189,248,0.75)]">Create account</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}


