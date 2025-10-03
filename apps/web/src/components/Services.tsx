"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, AdminSupportIcon, DigitalMarketingIcon, ECommerceIcon, ResearchAnalysisIcon } from '@/components/Icons';

// Local types and data to remove missing module errors and keep content SEO‑friendly
type Service = {
  category: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SERVICE_MENU: Service[] = [
  {
    category: 'Administrative & Executive Support',
    description:
      'Delegate inbox triage, calendar coordination and document preparation to a dedicated assistant. We keep your day unblocked and your priorities moving.',
    icon: AdminSupportIcon,
  },
  {
    category: 'Digital Marketing & Social Media',
    description:
      'Ship consistent content with lightweight support for scheduling, community replies and on‑page SEO checks that improve discoverability.',
    icon: DigitalMarketingIcon,
  },
  {
    category: 'E‑commerce & Online Store Ops',
    description:
      'Keep catalogs accurate with product listings, inventory updates and Tier‑1 order support that protects customer satisfaction.',
    icon: ECommerceIcon,
  },
  {
    category: 'Research & Analysis',
    description:
      'Surface decision‑ready insights with lead lists, competitor reviews and market snapshots tailored to your niche.',
    icon: ResearchAnalysisIcon,
  },
];

const FULL_SERVICE_LIST: Record<string, string[]> = {
  'Administrative & Executive Support': [
    'Inbox triage and response templates',
    'Calendar booking and follow‑ups',
    'Travel itinerary planning',
    'Cloud file organization',
    'Document formatting and slides',
    'Audio/video transcription',
  ],
  'Digital Marketing & Social Media': [
    'Content scheduling and republishing',
    'Community replies and DM routing',
    'Keyword research (basic) and on‑page checks',
    'Newsletter formatting and list hygiene',
  ],
  'E‑commerce & Online Store Ops': [
    'Product listing with images/specs',
    'Inventory audits and updates',
    'Order admin and Tier‑1 customer support',
    'Review requests and moderation',
  ],
  'Research & Analysis': [
    'Lead generation with basic enrichment',
    'Competitor feature and pricing grids',
    'Market data collection and snapshots',
    'Content and guest/podcast research',
  ],
};

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Service>(SERVICE_MENU[0]);
  const [highlighterStyle, setHighlighterStyle] = useState({});
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const selectedIndex = SERVICE_MENU.findIndex(s => s.category === selectedCategory.category);
    const selectedNavItem = navItemRefs.current[selectedIndex];

    if (selectedNavItem) {
      const top = selectedNavItem.offsetTop;
      const height = selectedNavItem.offsetHeight;

      setHighlighterStyle({
        transform: `translateY(${top}px)`,
        height: `${height}px`,
      });
    }
  }, [selectedCategory]);

  return (
    <section id="services" className="relative py-20 md:py-28 bg-white">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            GigSnap • Services
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Built for Your Workflow
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            From administrative tasks to market research, our virtual assistants plug into your stack and deliver overnight.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Left Navigation */}
          <div className="w-full md:w-1/3 md:sticky md:top-24 self-start">
            <div ref={navContainerRef} className="relative">
              <div
                className="absolute left-0 w-full rounded-lg transition-all duration-500 ease-in-out bg-gray-100/70 border border-emerald-100"
                style={highlighterStyle}
              />
              {SERVICE_MENU.map((service: Service, index: number) => (
                <button
                  key={service.category}
                  // FIX: Changed ref callback to not return a value to match the expected type.
                  ref={el => { navItemRefs.current[index] = el; }}
                  onClick={() => setSelectedCategory(service)}
                  className={`relative w-full text-left p-4 rounded-lg text-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    selectedCategory.category === service.category
                      ? 'font-semibold text-gray-900'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  aria-selected={selectedCategory.category === service.category}
                >
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    {service.category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3">
            <div key={selectedCategory.category} className="animate-fade-in-right">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl flex-shrink-0 border border-emerald-100 shadow-sm">
                  <selectedCategory.icon className="h-8 w-8" />
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{selectedCategory.category}</h3>
                </div>
              </div>
              <div className="relative rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm">
                <p className="text-gray-700 text-base leading-relaxed mb-6">{selectedCategory.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {FULL_SERVICE_LIST[selectedCategory.category].map((subItem: string, idx: number) => (
                    <div key={subItem} className="flex items-start" style={{ transitionDelay: `${idx * 30}ms` }}>
                      <CheckIcon className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800">{subItem}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-sm transition-all">
                  Get started
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIX: Removed the unsupported `jsx` prop from the `<style>` tag. The styles are now passed as children. */}
      <style>{`
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;