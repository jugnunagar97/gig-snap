"use client";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700","800"] });

export default function Footer() {
  return (
    <footer className="relative mt-6 border-t border-gray-200 bg-white">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl bg-emerald-200/30" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl bg-cyan-200/25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-6 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/tp-logo.png" alt="Task Partner" width={80} height={80} className="object-contain" />
              <div className={`${brandFont.className} text-2xl sm:text-3xl font-extrabold leading-none tracking-[-0.02em] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 group-hover:from-emerald-600 group-hover:via-emerald-600 group-hover:to-teal-600 transition-[background] duration-300 [text-rendering:optimizeLegibility] antialiased drop-shadow-sm`}>Task Partner</div>
            </Link>
            <p className="mt-3 text-sm text-gray-600 max-w-md">Delegate micro‑tasks with confidence. Fixed‑scope quotes, QA on every delivery, and overnight turnarounds from certified assistants.</p>

            {/* Certifications */}
            <div className="mt-6 space-y-3">
              <div className="text-xs font-semibold text-gray-900">Certifications</div>
              <div className="flex items-center gap-4">
                <Image src="/certified.png" alt="Task Partner certified" width={192} height={192} className="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="#about-company" className="hover:text-gray-900">The Company</Link></li>
              <li><Link href="#our-team" className="hover:text-gray-900">Our Team</Link></li>
              <li><Link href="#blog" className="hover:text-gray-900">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="#services" className="hover:text-gray-900">Services</Link></li>
              <li><Link href="#how-it-works" className="hover:text-gray-900">How it works</Link></li>
              <li><Link href="#tools" className="hover:text-gray-900">Tools</Link></li>
              <li><Link href="#pricing" className="hover:text-gray-900">Pricing (Quote)</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-2 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} Task Partner. All rights reserved.</div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-900">Privacy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-gray-900">Terms</Link>
            <span>•</span>
            <Link href="#post-gig" className="px-3 py-1 rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-emerald-50 transition">Post a gig</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


