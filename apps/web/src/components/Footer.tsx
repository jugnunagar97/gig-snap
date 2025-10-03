"use client";
import Image from "next/image";
import Link from "next/link";

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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg flex items-center justify-center text-white font-bold">G</div>
              <div className="text-2xl font-bold tracking-tight text-gray-900">GigSnap</div>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-md">Delegate micro‑tasks with confidence. Fixed‑scope quotes, QA on every delivery, and overnight turnarounds from certified assistants.</p>

            {/* Certifications */}
            <div className="mt-6 space-y-3">
              <div className="text-xs font-semibold text-gray-900">Certifications</div>
              <div className="flex items-center gap-4">
                <Image src="/certified.png" alt="GigSnap certified" width={192} height={192} className="h-16 w-auto object-contain" />
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
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} GigSnap. All rights reserved.</div>
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


