"use client";
import Link from "next/link";
import Image from "next/image";
import { useOrderModal } from "@/components/OrderModalContext";

export default function Header() {
  const { open } = useOrderModal();
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image src="/tp-logo.png" alt="Task Partner" width={85} height={85} className="object-contain" priority />
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
                Task Partner
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {/* Services Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-300 py-2">
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu with hover bridge */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                {/* Invisible bridge to prevent gap */}
                <div className="h-2 w-full"></div>
                <div className="bg-white rounded-xl shadow-xl border border-gray-100/80 backdrop-blur-sm">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-5">
                      {/* Administrative & Executive Support */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-7 h-7 bg-emerald-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <span className="text-base">Administrative Support</span>
                        </h3>
                        <div className="space-y-2">
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Email & Calendar</span>
                            </div>
                          </div>
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Data & File Management</span>
                            </div>
                          </div>
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Transcription & Typing</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Digital Marketing & Social Media */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-7 h-7 bg-emerald-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 8h6m-6 4h6m-6 4h6" />
                            </svg>
                          </div>
                          <span className="text-base">Digital Marketing</span>
                        </h3>
                        <div className="space-y-2">
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Social Media Support</span>
                            </div>
                          </div>
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Content & SEO</span>
                            </div>
                          </div>
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Email Marketing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-5">
                      {/* E-commerce & Online Store Assistance */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-7 h-7 bg-emerald-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </div>
                          <span className="text-base">E-commerce Support</span>
                        </h3>
                        <div className="space-y-2">
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Product & Inventory</span>
                            </div>
                          </div>
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Customer Service</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Research & Analysis */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-7 h-7 bg-emerald-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <span className="text-base">Research & Analysis</span>
                        </h3>
                        <div className="space-y-2">
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Market Research</span>
                            </div>
                          </div>
                          <div className="group/item">
                            <div className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-emerald-50/50">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">Specialized Research</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action Section */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 rounded-lg p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 mb-1">Ready to get started?</h4>
                          <p className="text-gray-600 text-sm">Let our virtual professionals handle your tasks.</p>
                        </div>
                        <div className="ml-4">
                          <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-md hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-sm hover:shadow-md text-sm">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
        </div>
            
            {/* About Us Dropdown */}
          <div className="group relative">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-300 py-2">
                <span>About Us</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                <div className="p-6 grid sm:grid-cols-2 gap-3">
                  <a href="#about-company" className="flex items-start gap-3 rounded-xl p-3 hover:bg-emerald-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">The Company</div>
                      <div className="text-xs text-gray-600">Our mission, values and story</div>
                    </div>
                  </a>
                  <a href="#contact" className="flex items-start gap-3 rounded-xl p-3 hover:bg-emerald-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3H12v9h9v.79z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Contact Us</div>
                      <div className="text-xs text-gray-600">Talk to our team</div>
                    </div>
                  </a>
                  <a href="#our-team" className="flex items-start gap-3 rounded-xl p-3 hover:bg-emerald-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5V10H2v10h5m5-6l5-4v10"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Our Team</div>
                      <div className="text-xs text-gray-600">Meet the people behind GigSnap</div>
                    </div>
                  </a>
                  <a href="#blog" className="flex items-start gap-3 rounded-xl p-3 hover:bg-emerald-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Blog</div>
                      <div className="text-xs text-gray-600">Guides and updates</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <Link 
              href="#how-it-works" 
              className="text-gray-700 hover:text-emerald-600 font-medium text-sm tracking-wide transition-colors duration-300 py-2"
            >
              How It Works
              </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={open}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 tracking-wide"
            >
              Post Gig
            </button>
            </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-emerald-600 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


