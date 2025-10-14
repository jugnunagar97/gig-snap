"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  CloudIcon,
  DocumentTextIcon,
  CalendarIcon,
  ChartBarIcon,
  QueueListIcon,
  RocketLaunchIcon,
  ShoppingCartIcon,
  SparklesIcon,
  StarIcon,
  PaperClipIcon,
  EnvelopeIcon,
  UserGroupIcon,
  DocumentPlusIcon,
} from '@/components/Icons';

// Local SEO‑friendly types and data (removes missing module errors)
type Tool = { name: string; logo: string; fallbackIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> };
type ToolCategory = { name: string; tools: Tool[] };

const TOOLS_DATA: ToolCategory[] = [
  {
    name: 'Communication',
    tools: [
      { name: 'Gmail', logo: '/gmail.png', fallbackIcon: EnvelopeIcon },
      { name: 'Outlook', logo: '/outlook.png', fallbackIcon: DocumentTextIcon },
      { name: 'Slack', logo: '/Slack.png', fallbackIcon: ChatIconFallback },
      { name: 'Microsoft Teams', logo: '/microsoft-teams.png', fallbackIcon: UserGroupIcon },
    ],
  },
  {
    name: 'Productivity',
    tools: [
      { name: 'Google Calendar', logo: '/google-calendar.png', fallbackIcon: CalendarIcon },
      { name: 'Notion', logo: '/Notion.png', fallbackIcon: PaperClipIcon },
      { name: 'Trello', logo: '/Trello.png', fallbackIcon: QueueListIcon },
      { name: 'Asana', logo: '/Asana.png', fallbackIcon: StarIcon },
    ],
  },
  {
    name: 'Marketing',
    tools: [
      { name: 'Mailchimp', logo: '/mailchimp.svg', fallbackIcon: RocketLaunchIcon },
      { name: 'HubSpot', logo: '/hubspot.svg', fallbackIcon: SparklesIcon },
      { name: 'WordPress', logo: '/wordpress.svg', fallbackIcon: DocumentPlusIcon },
      { name: 'Google Analytics', logo: '/google-analytics.svg', fallbackIcon: ChartBarIcon },
    ],
  },
  {
    name: 'E‑commerce',
    tools: [
      { name: 'Shopify', logo: '/shopify.svg', fallbackIcon: ShoppingCartIcon },
      { name: 'Amazon', logo: '/amazon.svg', fallbackIcon: ShoppingCartIcon },
      { name: 'eBay', logo: '/ebay.svg', fallbackIcon: ShoppingCartIcon },
      { name: 'WooCommerce', logo: '/woocommerce.svg', fallbackIcon: ShoppingCartIcon },
    ],
  },
  {
    name: 'Storage',
    tools: [
      { name: 'Google Drive', logo: '/google-drive.svg', fallbackIcon: CloudIcon },
      { name: 'Dropbox', logo: '/dropbox.svg', fallbackIcon: CloudIcon },
      { name: 'OneDrive', logo: '/onedrive.svg', fallbackIcon: CloudIcon },
      { name: 'Box', logo: '/Box.png', fallbackIcon: CloudIcon },
    ],
  },
];

// Fallback simple chat bubble (since we don't have a Slack icon)
function ChatIconFallback(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6" />
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 10-16 0 8 8 0 003.2 6.4L9 21l3-1.2A8 8 0 0021 12z" />
    </svg>
  );
}

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>(TOOLS_DATA[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = TOOLS_DATA.findIndex(cat => cat.name === activeCategory.name);
    const activeTabNode = tabsRef.current[activeIndex];
    const containerNode = tabsContainerRef.current;

    if (activeTabNode && containerNode) {
      const { offsetLeft, offsetWidth } = activeTabNode;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeCategory]);

  return (
    <section id="tools" className="relative py-20 md:py-28 bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-emerald-200/35" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl bg-cyan-200/30" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Task Partner • Tooling
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Tools & Platforms We Master</h2>
          <p className="mt-4 text-lg text-gray-600">
            We plug into your existing stack—no hand‑holding required. From communication to commerce, our assistants keep work moving.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div ref={tabsContainerRef} className="relative border-b border-gray-200 mb-12">
            <div className="flex justify-center flex-wrap gap-3 md:gap-6">
              {TOOLS_DATA.map((category: ToolCategory, index: number) => (
                <button
                  key={category.name}
                  // FIX: Changed ref callback to not return a value to match the expected type.
                  ref={el => { tabsRef.current[index] = el; }}
                  onClick={() => setActiveCategory(category)}
                  className={`py-2.5 px-3 md:px-4 text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg ${
                    activeCategory.name === category.name
                      ? 'text-emerald-700 bg-emerald-50 border border-emerald-100'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="absolute bottom-[-1px] h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 ease-in-out" style={indicatorStyle} />
          </div>

          <div key={activeCategory.name} className="animate-fade-in">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-10 place-items-center">
              {activeCategory.tools.map((tool: Tool) => (
                <div key={tool.name} className="group relative flex flex-col items-center justify-center text-center min-h-[6rem]">
                  <div className="relative mx-auto flex items-center justify-center h-16 w-16">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-200/30 to-cyan-200/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
                    {tool.logo ? (
                      <Image src={tool.logo} alt={tool.name} width={64} height={64} className="relative max-h-12 max-w-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                    ) : tool.fallbackIcon ? (
                      <tool.fallbackIcon className="relative h-12 w-12 text-gray-500 group-hover:text-emerald-600 transition-all duration-300 transform group-hover:scale-110" />
                    ) : null}
                  </div>
                  <span className="absolute -bottom-7 w-max text-center text-xs md:text-sm bg-gray-900 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {tool.name}
                        </span>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
