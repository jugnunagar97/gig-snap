import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300">Free signup — No credit card required</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
              <li><Link href="#blog" className="hover:underline">Blog</Link></li>
              <li><Link href="#careers" className="hover:underline">Careers</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#cookies" className="hover:underline">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Follow</div>
            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
              <Link href="#x" aria-label="X / Twitter" className="hover:text-black dark:hover:text-white">X</Link>
              <Link href="#linkedin" aria-label="LinkedIn" className="hover:text-black dark:hover:text-white">LinkedIn</Link>
              <a href="#top" className="ml-auto text-sm px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">Back to Top</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <div>© 2025 GigSnap • All Rights Reserved</div>
          <div className="mt-2 sm:mt-0">www.GigSnap.work.gd</div>
        </div>
      </div>
    </footer>
  );
}


