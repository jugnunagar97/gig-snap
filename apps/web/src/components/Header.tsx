"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 relative">
      {/* Accent hairline */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" />
      <div className="absolute inset-0 z-0 h-16 bg-white/95 dark:bg-neutral-950/95 border-b border-neutral-200 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/75" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="inline-flex items-center">
            <Image src="/logo.png" alt="GigSnap" width={90} height={90} priority className="w-[90px] h-[90px] -my-3 rounded-sm drop-shadow-sm object-contain" />
          </Link>
          <span className="hidden md:inline-block text-xs text-neutral-500 select-none truncate">www.GigSnap.work.gd</span>
        </div>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-neutral-700 dark:text-neutral-300">
          <Link href="/" className="relative hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full">Home</Link>
          <div className="group relative">
            <button className="relative inline-flex items-center gap-1 hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all group-hover:after:w-full">Services
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
            </button>
            <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl p-4 grid grid-cols-2 gap-2">
              <Link href="#email-mgmt" className="rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="text-sm font-semibold">Email Management</div>
                <div className="text-xs text-neutral-500">Inbox triage, filtering, smart replies</div>
              </Link>
              <Link href="#scheduling" className="rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="text-sm font-semibold">Scheduling</div>
                <div className="text-xs text-neutral-500">Calendar booking, reminders, follow‑ups</div>
              </Link>
              <Link href="#data-work" className="rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="text-sm font-semibold">Data Work</div>
                <div className="text-xs text-neutral-500">Cleanup, enrichment, research</div>
              </Link>
              <Link href="#ai-integrations" className="rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="text-sm font-semibold">AI Integrations</div>
                <div className="text-xs text-neutral-500">Automations that scale with you</div>
              </Link>
            </div>
          </div>
          <Link href="#pricing" className="relative hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full">Pricing</Link>
          <Link href="#about" className="relative hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full">About</Link>
          <Link href="#contact" className="relative hover:text-black dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full">Contact</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <Link href="#login" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white">Login</Link>
          <Link href="#get-started" className="inline-flex text-sm px-5 py-2 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-[#06202c] font-semibold shadow-[0_8px_24px_-8px_rgba(56,189,248,0.6)] hover:shadow-[0_12px_28px_-10px_rgba(56,189,248,0.75)]">Get Started</Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-white/15" />
    </header>
  );
}


