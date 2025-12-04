"use client";

import React, { useState, useEffect, useRef, useMemo, useLayoutEffect } from "react";
import Image from "next/image";
import { 
  Check, X, Star, ChevronDown, ChevronRight, ArrowRight, 
  Menu, ShieldCheck, Clock, Zap, Users, Globe, 
  LayoutTemplate, BarChart3, ShoppingBag, Search 
} from "lucide-react";
import { useOrderModal } from "@/components/OrderModalContext";

// --- Types & Data ---

type Service = {
  id: string;
  category: string;
  description: string;
  icon: React.ElementType;
  features: string[];
};

const SERVICES: Service[] = [
  {
    id: "admin",
    category: "Admin & Executive",
    description: "Delegate inbox triage, calendar coordination, and document prep. We keep your priorities moving while you sleep.",
    icon: LayoutTemplate,
    features: ["Inbox triage & response templates", "Calendar booking & travel planning", "Cloud file organization", "Document formatting & slides"]
  },
  {
    id: "marketing",
    category: "Digital Marketing",
    description: "Consistent content shipping with support for scheduling, community management, and on-page SEO.",
    icon: Users,
    features: ["Content scheduling & republishing", "Community replies & DM routing", "Basic Keyword research", "Newsletter formatting"]
  },
  {
    id: "ecommerce",
    category: "E-commerce Ops",
    description: "Accurate catalogs, inventory updates, and Tier-1 order support to protect your customer ratings.",
    icon: ShoppingBag,
    features: ["Product listing & specs", "Inventory audits", "Order admin & support", "Review moderation"]
  },
  {
    id: "research",
    category: "Research & Analysis",
    description: "Decision-ready insights with lead lists, competitor reviews, and market snapshots.",
    icon: Search,
    features: ["Lead gen & enrichment", "Competitor pricing grids", "Market data collection", "Podcast/Guest research"]
  }
];

const TOOLS_DATA = [
  { 
    category: "Communication", 
    items: [
      { name: "Slack", src: "https://cdn.simpleicons.org/slack" },
      { name: "Microsoft Teams", src: "https://cdn.simpleicons.org/microsoftteams" },
      { name: "Gmail", src: "https://cdn.simpleicons.org/gmail" },
      { name: "Outlook", src: "https://cdn.simpleicons.org/microsoftoutlook" },
      { name: "Zoom", src: "https://cdn.simpleicons.org/zoom" }
    ] 
  },
  { 
    category: "Productivity", 
    items: [
      { name: "Notion", src: "https://cdn.simpleicons.org/notion" },
      { name: "Trello", src: "https://cdn.simpleicons.org/trello" },
      { name: "Asana", src: "https://cdn.simpleicons.org/asana" },
      { name: "Monday.com", src: "https://cdn.simpleicons.org/mondaydotcom" },
      { name: "ClickUp", src: "https://cdn.simpleicons.org/clickup" }
    ] 
  },
  { 
    category: "Marketing", 
    items: [
      { name: "HubSpot", src: "https://cdn.simpleicons.org/hubspot" },
      { name: "Mailchimp", src: "https://cdn.simpleicons.org/mailchimp" },
      { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress" },
      { name: "Canva", src: "https://cdn.simpleicons.org/canva" },
      { name: "Buffer", src: "https://cdn.simpleicons.org/buffer" }
    ] 
  },
  { 
    category: "E-commerce", 
    items: [
      { name: "Shopify", src: "https://cdn.simpleicons.org/shopify" },
      { name: "WooCommerce", src: "https://cdn.simpleicons.org/woocommerce" },
      { name: "Amazon Seller", src: "https://cdn.simpleicons.org/amazon" },
      { name: "Zendesk", src: "https://cdn.simpleicons.org/zendesk" },
      { name: "Intercom", src: "https://cdn.simpleicons.org/intercom" }
    ] 
  }
];

const TESTIMONIALS_DATA = [
  { 
    name: "Sarah Jenkins", 
    handle: "@sarah_j_ops", 
    role: "COO at TechFlow", 
    avatar: "https://i.pravatar.cc/150?u=sarah",
    platform: "trustpilot",
    icon: "https://cdn.simpleicons.org/trustpilot/00b67a", // LinkedIn Blue
    text: "Task Partner is our daily tool to bypass administrative bottlenecks. We handed off our entire inbox management and woke up to zero unread emails. Actual magic." 
  },
  { 
    name: "David Chen", 
    handle: "@dchen_growth", 
    role: "Founder, ScaleUp", 
    avatar: "https://i.pravatar.cc/150?u=david",
    platform: "trustpilot",
    icon: "https://cdn.simpleicons.org/trustpilot/00b67a", // Trustpilot Green
    text: "From novice to pro, the VAs here are on another level. They didn't just 'do tasks', they built a whole SOP library for my marketing team. 5 stars easily." 
  },
  { 
    name: "Elena Rodriguez", 
    handle: "@elena_rodd", 
    role: "Marketing Director", 
    avatar: "https://i.pravatar.cc/150?u=elena",
    platform: "slack",
    icon: "https://cdn.simpleicons.org/slack", 
    text: "Task Partner empowers our whole team, techies or not, to dive into market research without losing focus. The data quality on the lead lists was 99% accurate." 
  },
  { 
    name: "James Wilson", 
    handle: "@jwilson_dev", 
    role: "CTO, DevCorp", 
    avatar: "https://i.pravatar.cc/150?u=james",
    platform: "trustpilot",
    icon: "https://cdn.simpleicons.org/trustpilot/00b67a",
    text: "A game-changer for our dev sprints. We offloaded all the non-technical documentation and scheduling. It's our daily ally in shipping features faster." 
  },
  { 
    name: "Anita Patel", 
    handle: "@anita_p", 
    role: "E-com Owner", 
    avatar: "https://i.pravatar.cc/150?u=anita",
    platform: "trustpilot",
    icon: "https://cdn.simpleicons.org/trustpilot/00b67a",
    text: "Bypassed average results and hit our Q4 targets. The inventory management support was flawless. I can finally sleep without checking Shopify every hour!" 
  },
  { 
    name: "Mark Thompson", 
    handle: "@mthompson_vc", 
    role: "Angel Investor", 
    avatar: "https://i.pravatar.cc/150?u=mark",
    platform: "trustpilot",
    icon: "https://cdn.simpleicons.org/trustpilot/00b67a",
    text: "I recommend Task Partner to all my portfolio companies. It is the most cost-effective way to scale operations without the headache of hiring full-time staff." 
  }
];

const FAQS = [
  { q: "How does pricing work?", a: "You post a gig with context. We respond with a fixed quote and ETA. No hidden fees or hourly surprises." },
  { q: "What is the turnaround time?", a: "Most micro-tasks are delivered within 24 hours. Our time-zone advantage means we work while you sleep." },
  { q: "How do you ensure quality?", a: "Every delivery goes through a QA checklist. We document learnings into playbooks so quality improves over time." },
  { q: "Is my data secure?", a: "Yes. We follow least-privilege access, sign NDAs, and revoke access immediately upon project completion." },
];

const BADGES = [
  { name: "Trustpilot", src: "/trust/trustpilot.webp", rating: "4.9" },
  { name: "Clutch", src: "/trust/clutch.webp", rating: "4.9" },
  { name: "Indeed", src: "/trust/Indeed.webp", rating: "4.8" },
  { name: "Glassdoor", src: "/trust/Glassdoor.webp", rating: "4.7" },
  { name: "LinkedIn", src: "/trust/Linkedin.webp", rating: "Top Rated" }, // customized for visual balance
];

// --- Sub-Components ---

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-6">
    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
    {children}
  </div>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
      <Check className="w-3.5 h-3.5 text-emerald-600" />
    </div>
    <span className="text-zinc-600 text-sm leading-relaxed">{text}</span>
  </div>
);

// --- Main Page Component ---

export default function Home() {
  const { open } = useOrderModal();
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [activeToolCat, setActiveToolCat] = useState(TOOLS_DATA[0].category);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-white selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="/hero-banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Trusted by 2,500+ Growing Businesses
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Transform Your Business with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Elite Virtual Talent
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
            Stop wasting time on hiring headaches. Get a dedicated, pre-vetted virtual professional who integrates into your team instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => open({ tier: "professional" })} 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
            >
              Get Your Virtual Pro
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm text-white font-medium rounded-full transition-all"
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES (Static & Big) */}
      <section className="border-y border-zinc-100 bg-zinc-50/50 py-20 relative overflow-hidden">
        {/* Ambient background blur for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
             <h3 className="text-lg md:text-xl font-medium text-zinc-500">
               Powering operations for <span className="font-bold text-zinc-900">2,500+</span> industry leaders
             </h3>
          </div>

          {/* Static Layout: Centered, Large Cards, No Animation */}
          <div className="flex flex-wrap justify-center gap-6">
            {BADGES.map((badge, i) => (
               <div key={i} className="group flex items-center gap-5 px-8 py-6 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                 {/* Logo - Significantly Larger (h-9) */}
                 <div className="h-9 w-auto flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <img src={badge.src} alt={badge.name} className="h-full w-auto object-contain" />
                 </div>
                 
                 {/* Divider */}
                 <div className="w-px h-10 bg-zinc-100" />
                 
                 {/* Rating - Bolder and Stacked */}
                 <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1.5">
                        <span className="text-lg font-bold text-zinc-900 leading-none">{badge.rating}</span>
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Score</span>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION (Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <SectionTag>About Us</SectionTag>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-6">
              The <span className="text-emerald-600">reliability</span> of an agency. <br />
              The <span className="text-emerald-600">agility</span> of a freelancer.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              We bridge the gap between expensive agencies and unreliable marketplaces. Our talent pool is pre-vetted, trained on modern stacks (Notion, Slack, AI), and managed by onshore account leads.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Vetted Talent", value: "Top 0.1%" },
                { label: "Avg Turnaround", value: "12 Hours" },
                { label: "Active Clients", value: "2,500+" },
                { label: "Satisfaction", value: "98%" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-4 border-emerald-500 pl-4">
                  <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl opacity-50 blur-2xl" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 flex flex-col gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Zero Risk</h3>
                  <p className="text-sm text-zinc-500 mt-1">Free replacement guarantee and money-back assurance.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 flex flex-col gap-4 mt-8 sm:mt-0">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Overnight Delivery</h3>
                  <p className="text-sm text-zinc-500 mt-1">Submit tasks EOD, wake up to done. The time-zone advantage.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 flex flex-col gap-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">AI-Augmented</h3>
                  <p className="text-sm text-zinc-500 mt-1">Our VAs use the latest AI tools to work 3x faster than average.</p>
                </div>
              </div>
               <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-2xl shadow-xl flex flex-col justify-between text-white mt-8 sm:mt-0">
                <div>
                  <h3 className="font-bold text-lg">Ready to start?</h3>
                  <p className="text-sm text-emerald-100 mt-1">Post your first gig today.</p>
                </div>
                <button onClick={() => open()} className="bg-white text-emerald-700 text-sm font-bold py-2 px-4 rounded-lg mt-4 w-fit hover:bg-emerald-50 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (Tabbed Interface) */}
      <section id="services" className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag>Our Capabilities</SectionTag>
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Built for your entire workflow</h2>
            <p className="mt-4 text-lg text-zinc-600">Specialized assistants for every department, ready to plug into your existing stack.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    activeService.id === service.id 
                    ? "bg-white shadow-lg shadow-emerald-900/5 border border-emerald-100 ring-1 ring-emerald-500/20" 
                    : "hover:bg-white/50 hover:pl-7 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${activeService.id === service.id ? "bg-emerald-100 text-emerald-700" : "bg-zinc-100 text-zinc-500 group-hover:bg-emerald-50 group-hover:text-emerald-600"}`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold ${activeService.id === service.id ? "text-zinc-900" : "text-zinc-500"}`}>
                      {service.category}
                    </span>
                  </div>
                  {activeService.id === service.id && <ChevronRight className="w-5 h-5 text-emerald-500" />}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-200 shadow-xl min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-bl-full opacity-50 -z-0" />
                
                <div className="relative z-10 animate-in fade-in duration-500" key={activeService.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-600 rounded-xl text-white shadow-lg shadow-emerald-200">
                      <activeService.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">{activeService.category}</h3>
                  </div>
                  
                  <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                    {activeService.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {activeService.features.map((feature, idx) => (
                      <CheckItem key={idx} text={feature} />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-zinc-100">
                  <button onClick={() => open({ category: activeService.category })} className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700 hover:gap-3 transition-all">
                    Get started with {activeService.category} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTag>The Difference</SectionTag>
          <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Why the top 1% choose us</h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl bg-white">
           {/* Scroll Hint for Mobile */}
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent md:hidden pointer-events-none z-10" />
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="p-6 text-left w-1/4">Feature</th>
                  <th className="p-6 text-center w-1/4 bg-emerald-50/50 text-emerald-900 font-bold border-x border-emerald-100">
                    Task Partner
                    <div className="text-[10px] font-normal text-emerald-600 uppercase tracking-wider mt-1">Recommended</div>
                  </th>
                  <th className="p-6 text-center w-1/4 text-zinc-500 font-medium">Marketplaces</th>
                  <th className="p-6 text-center w-1/4 text-zinc-500 font-medium">Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {[
                  { feat: "Vetting Process", us: "Top 0.1% + Skill Tested", comp1: "Self-Reported", comp2: "Variable" },
                  { feat: "Onboarding Speed", us: "60 Minutes", comp1: "1-3 Weeks", comp2: "2-4 Weeks" },
                  { feat: "Cost Efficiency", us: "No Markups / Flat Rate", comp1: "20% Platform Fee", comp2: "High Retainers" },
                  { feat: "Management", us: "Dedicated Account Mgr", comp1: "Self-Managed", comp2: "Project Manager" },
                  { feat: "Replacement Guarantee", us: "Instant & Free", comp1: "Dispute Process", comp2: "Contract Dependent" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                    <td className="p-6 font-medium text-zinc-700">{row.feat}</td>
                    <td className="p-6 text-center bg-emerald-50/30 border-x border-emerald-100/50 font-semibold text-emerald-800">
                      {row.us}
                    </td>
                    <td className="p-6 text-center text-zinc-500">{row.comp1}</td>
                    <td className="p-6 text-center text-zinc-500">{row.comp2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (Timeline) */}
      <section id="how-it-works" className="bg-zinc-900 py-24 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-6">
              Workflow
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Delegate in 3 simple steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-zinc-800 z-0" />

            {[
              { step: "01", title: "Post a Gig", desc: "Share your task requirements. We'll map it to a specific playbook and the right expert." },
              { step: "02", title: "We Execute", desc: "Your dedicated VA starts within hours. You can monitor progress via our dashboard." },
              { step: "03", title: "Review & Grow", desc: "Approve the work or request revisions. We document preferences for next time." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 group">
                <div className="w-24 h-24 bg-zinc-900 border-4 border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:border-emerald-500 transition-colors duration-500">
                  <span className="text-3xl font-bold text-zinc-600 group-hover:text-emerald-400 transition-colors">{item.step}</span>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button onClick={() => open()} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-emerald-900/50">
              Start Your First Task Now
            </button>
          </div>
        </div>
      </section>

      {/* 7. TOOLS SECTION (Bento Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionTag>Tech Stack</SectionTag>
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Tools we master</h2>
            <p className="mt-4 text-zinc-600 max-w-xl text-lg">
              We plug into your existing ecosystem instantly. No training required.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {TOOLS_DATA.map((t) => (
              <button
                key={t.category}
                onClick={() => setActiveToolCat(t.category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeToolCat === t.category 
                  ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 transform scale-105" 
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
                }`}
              >
                {t.category}
              </button>
            ))}
          </div>
        </div>

        {/* The Authentic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {TOOLS_DATA.find(t => t.category === activeToolCat)?.items.map((tool, i) => (
            <div 
              key={i} 
              className="group aspect-[4/3] md:aspect-square rounded-2xl bg-white border border-zinc-200 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Logo Container */}
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110">
                <img 
                  src={tool.src} 
                  alt={`${tool.name} Logo`} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Tool Name */}
              <span className="relative z-10 text-xs font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300 uppercase tracking-wide">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PRICING */}
      <section id="pricing" className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag>Transparent Pricing</SectionTag>
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Choose your tier</h2>
            <p className="mt-4 text-lg text-zinc-600">No retainers required. Scale up or down as you need.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-zinc-900">Starter</h3>
              <p className="text-sm text-zinc-500 mt-2 h-10">Best for small, well-defined administrative tasks.</p>
              <div className="my-8">
                <span className="text-4xl font-bold text-zinc-900">Custom</span>
              </div>
              <button onClick={() => open({ tier: "starter" })} className="w-full py-3 rounded-xl border border-zinc-200 font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors">Get Quote</button>
              <ul className="mt-8 space-y-4">
                {["Vetted VAs", "Standard Support", "48h Delivery"].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-zinc-600"><Check className="w-4 h-4 text-emerald-500"/> {f}</li>
                ))}
              </ul>
            </div>

            {/* Professional (Highlighted) */}
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="text-xl font-bold text-white">Professional</h3>
              <p className="text-sm text-zinc-400 mt-2 h-10">Premium assistants for specialized work (Marketing, Research).</p>
              <div className="my-8">
                 <span className="text-4xl font-bold text-white">Best Value</span>
              </div>
              <button onClick={() => open({ tier: "professional" })} className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white transition-colors shadow-lg shadow-emerald-900/20">Get Started</button>
              <ul className="mt-8 space-y-4">
                {["Top 1% Talent", "Priority Support", "24h Delivery", "Dedicated Account Mgr", "Free Revisions"].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-zinc-300"><Check className="w-4 h-4 text-emerald-400"/> {f}</li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
             <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-zinc-900">Enterprise</h3>
              <p className="text-sm text-zinc-500 mt-2 h-10">For agencies and teams needing ongoing support.</p>
              <div className="my-8">
                <span className="text-4xl font-bold text-zinc-900">Scale</span>
              </div>
              <button onClick={() => open({ tier: "enterprise" })} className="w-full py-3 rounded-xl border border-zinc-200 font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors">Contact Sales</button>
              <ul className="mt-8 space-y-4">
                {["Dedicated Team", "Slack Integration", "Same-Day Turnaround", "Custom SOPs"].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-zinc-600"><Check className="w-4 h-4 text-emerald-500"/> {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Masonry Grid - Aurora Style) */}
      <section className="relative py-32 bg-zinc-50 overflow-hidden">
        {/* Soft Aurora Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-zinc-50 to-zinc-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTag>Wall of Love</SectionTag>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
              Public Cheers for Us!
            </h2>
            <p className="text-lg text-zinc-600">
              Find out how founders and teams are reclaiming their time using Task Partner.
            </p>
          </div>

          {/* Masonry Grid Implementation */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS_DATA.map((review, i) => (
              <div 
                key={i} 
                className="break-inside-avoid bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Header: User Info + Platform Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-100">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    {/* Name & Handle */}
                    <div>
                      <h4 className="font-bold text-zinc-900 text-sm">{review.name}</h4>
                      <p className="text-xs text-zinc-500 font-medium">{review.handle}</p>
                    </div>
                  </div>

                  {/* Platform Icon (Top Right) */}
                  <div className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity">
                     <img src={review.icon} alt={review.platform} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-zinc-700 leading-relaxed text-[15px]">
                  {review.text}
                </p>

                {/* Role / Footer (Optional) */}
                <div className="mt-6 pt-6 border-t border-zinc-50">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ (Accordion) */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        {/* FIXED: Added 'text-zinc-900' to make the heading dark */}
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-zinc-200 rounded-2xl overflow-hidden bg-white">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 text-zinc-600 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CTA FOOTER */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to reclaim your time?</h2>
          <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto relative z-10">
            Join 2,500+ businesses growing faster with Task Partner. No contracts, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button onClick={() => open()} className="px-10 py-5 bg-white text-emerald-800 font-bold rounded-full hover:bg-zinc-100 transition-all hover:scale-105 shadow-xl">
              Get Started Now
            </button>
             <button onClick={() => open()} className="px-10 py-5 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}