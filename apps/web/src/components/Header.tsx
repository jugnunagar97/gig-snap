"use client";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useOrderModal } from "@/components/OrderModalContext";
import { useAuth } from "@/components/AuthContext";
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  User, 
  Briefcase, 
  FileText, 
  Megaphone, 
  ShoppingBag, 
  BarChart, 
  CheckCircle2 
} from "lucide-react";

const brandFont = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });

export default function Header() {
  const { open } = useOrderModal();
  const { isAuthenticated, isReady } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl transition-all duration-300 border-b border-zinc-100/50">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* 1. Logo (Far Left) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
               <Image 
                 src="/tp-logo.png" 
                 alt="Task Partner" 
                 fill
                 className="object-contain transition-transform duration-500 group-hover:rotate-12" 
                 priority 
               />
            </div>
            <span className={`${brandFont.className} text-xl md:text-2xl font-bold text-zinc-900 tracking-tight group-hover:text-emerald-700 transition-colors`}>
              Task Partner
            </span>
          </Link>

          {/* 2. Navigation (Centered & Floating) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link href="/" className="text-sm font-semibold text-zinc-900 hover:text-emerald-600 transition-colors">
              Home
            </Link>

            {/* Services Dropdown - FIXED: Includes ALL sub-services */}
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 text-sm font-semibold text-zinc-600 hover:text-emerald-600 transition-colors py-4">
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Premium Glass Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                <div className="w-[700px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 overflow-hidden ring-1 ring-zinc-900/5">
                   
                   {/* 2-Column Grid for Services */}
                   <div className="grid grid-cols-2 gap-8 p-8">
                      
                      {/* Left Column */}
                      <div className="space-y-8">
                        {/* Admin Support */}
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                              <FileText className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm">Administrative Support</h3>
                          </div>
                          <ul className="space-y-2 pl-11">
                            {["Email & Calendar", "Data & File Management", "Transcription & Typing"].map(item => (
                              <li key={item} className="text-sm text-zinc-500 hover:text-emerald-600 cursor-pointer flex items-center gap-2 group/item transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/item:bg-emerald-400 transition-colors" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Digital Marketing */}
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                              <Megaphone className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm">Digital Marketing</h3>
                          </div>
                          <ul className="space-y-2 pl-11">
                            {["Social Media Support", "Content & SEO", "Email Marketing"].map(item => (
                              <li key={item} className="text-sm text-zinc-500 hover:text-emerald-600 cursor-pointer flex items-center gap-2 group/item transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/item:bg-emerald-400 transition-colors" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        {/* E-commerce */}
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                              <ShoppingBag className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm">E-commerce Support</h3>
                          </div>
                          <ul className="space-y-2 pl-11">
                            {["Product & Inventory", "Customer Service"].map(item => (
                              <li key={item} className="text-sm text-zinc-500 hover:text-emerald-600 cursor-pointer flex items-center gap-2 group/item transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/item:bg-emerald-400 transition-colors" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Research */}
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                              <BarChart className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm">Research & Analysis</h3>
                          </div>
                          <ul className="space-y-2 pl-11">
                            {["Market Research", "Specialized Research"].map(item => (
                              <li key={item} className="text-sm text-zinc-500 hover:text-emerald-600 cursor-pointer flex items-center gap-2 group/item transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/item:bg-emerald-400 transition-colors" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                   </div>

                   {/* Footer CTA */}
                   <div className="bg-zinc-50 p-6 flex justify-between items-center border-t border-zinc-100">
                      <div>
                        <div className="text-sm font-bold text-zinc-900">Ready to delegate?</div>
                        <div className="text-xs text-zinc-500">Get matched with a pro in minutes.</div>
                      </div>
                      <button 
                        onClick={() => open()} 
                        className="px-5 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                      >
                        Get Started
                      </button>
                   </div>
                </div>
              </div>
            </div>

            <Link href="#how-it-works" className="text-sm font-semibold text-zinc-600 hover:text-emerald-600 transition-colors">
              How it Works
            </Link>
            
            <Link href="#about" className="text-sm font-semibold text-zinc-600 hover:text-emerald-600 transition-colors">
              About
            </Link>

            <Link href="#contact" className="text-sm font-semibold text-zinc-600 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* 3. Action Area (Far Right) */}
          <div className="flex items-center gap-4">
             {isReady && !isAuthenticated && (
              <Link href="/auth/login" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-emerald-600 transition-colors">
                <User className="w-4 h-4" />
                <span>Log In</span>
              </Link>
            )}

            <button 
              onClick={() => open()}
              className="hidden sm:flex items-center gap-2 bg-zinc-900 hover:bg-emerald-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            >
              <Briefcase className="w-4 h-4" />
              <span>Post a Gig</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}