import Image from "next/image";

type HeroProps = {
  headlineEmphasis?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  subtitle?: string;
};

export default function Hero({
  headlineEmphasis = "GigSnap",
  primaryCtaText = "Start building your team",
  primaryCtaHref = "#get-started",
  secondaryCtaText = "Contact us",
  secondaryCtaHref = "#contact",
  subtitle =
    "We help you hire and retain the top 1% of global talent, ensuring a high-performing, fully equipped team with world‑class support for your success.",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#082536] text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_400px_at_90%_60%,rgba(16,185,129,0.08),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Build your dedicated
              <br />
              remote offshore team
              <br />
              with <span className="text-sky-400">{headlineEmphasis}</span>
            </h1>
            <p className="mt-6 text-lg text-sky-50/80 max-w-prose">{subtitle}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch">
              <a
                href={primaryCtaHref}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 via-cyan-400 to-emerald-400 text-[#082536] px-7 py-3 text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(56,189,248,0.6)] hover:shadow-[0_12px_28px_-10px_rgba(56,189,248,0.75)] transition-all"
              >
                <span className="mr-1">{primaryCtaText}</span>
                <svg className="size-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 6.414V17a1 1 0 11-2 0V6.414l-3.293 3.293A1 1 0 015.293 8.293l5-5z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white/80 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                {secondaryCtaText}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/homepage-hero-section.png"
                alt="GigSnap hero illustration"
                width={1200}
                height={900}
                className="w-full h-auto select-none [image-rendering:crisp-edges] sm:[image-rendering:auto]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" />
    </section>
  );
}


