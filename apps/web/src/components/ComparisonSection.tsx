"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { useOrderModal } from "@/components/OrderModalContext";

export default function ComparisonSection() {
  const { open } = useOrderModal();
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Why Task Partner is the Smarter Choice
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Mobile: Horizontal Scroll Container */}
          <div className="block lg:hidden overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 min-w-[800px]">
            <div className="bg-white px-4 py-6"></div>
            <div className="bg-white px-4 py-6 text-center">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                VA Onboarding Speed<br />& Availability
              </h3>
            </div>
            <div className="bg-white px-4 py-6 text-center">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Talent Quality &<br />Training
              </h3>
            </div>
            <div className="bg-white px-4 py-6 text-center">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                VA Interview<br />Success
              </h3>
            </div>
            <div className="bg-white px-4 py-6 text-center">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Free Bookkeeper +<br />Business Tools<br /><span className="text-xs text-gray-500">(Appoye, Pipedrive, etc.)</span>
              </h3>
            </div>
            <div className="bg-white px-4 py-6 text-center">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Replacement &<br />Money-Back
              </h3>
            </div>
            <div className="bg-white px-4 py-6 text-center">
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Dedicated Account<br />Manager & VA<br />Knowledge Transfer
              </h3>
            </div>
          </div>

              {/* Row 1: Task Partner */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 min-w-[800px]">
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 px-6 py-6 flex items-center">
              <span className="text-base font-bold text-gray-900">Task Partner</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <span className="text-sm text-gray-700">60 minutes (always available)</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <span className="text-sm text-gray-700">0.1% (Pre-vetted & Pre-trained in 120+ nocode/AI tools)</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-900">90%+ pass rate</span>
              </div>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">Free Bookeeper ($500) + Business Tools ($500)</span>
              </div>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-900">Yes</span>
              </div>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-900">Yes</span>
              </div>
            </div>
          </div>

              {/* Row 2: Freelance Platforms */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 min-w-[800px]">
            <div className="bg-gray-50 px-6 py-6 flex items-center">
              <span className="text-base font-bold text-gray-700">Freelance Platforms</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <span className="text-sm text-gray-700">Up to 3 weeks (waitlist)</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <span className="text-sm text-gray-700">Unclear (No training)</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-orange-400 rounded-sm flex-shrink-0"></span>
                <span className="text-sm text-gray-700">No success data</span>
              </div>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No</span>
            </div>
          </div>

              {/* Row 3: Other VA Companies */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 min-w-[800px]">
            <div className="bg-gray-50 px-6 py-6 flex items-center">
              <span className="text-base font-bold text-gray-700">Other VA Companies</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <span className="text-sm text-gray-700">1 to 2 weeks (waitlist)</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <span className="text-sm text-gray-700">1% (Pre-vetted only)</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No interviews</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No</span>
            </div>
            <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-700 ml-2">No</span>
            </div>
          </div>
            </div>
          </div>

          {/* Desktop: Normal Grid */}
          <div className="hidden lg:block">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              <div className="bg-white px-4 py-6"></div>
              <div className="bg-white px-4 py-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  VA Onboarding Speed<br />& Availability
                </h3>
              </div>
              <div className="bg-white px-4 py-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Talent Quality &<br />Training
                </h3>
              </div>
              <div className="bg-white px-4 py-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  VA Interview<br />Success
                </h3>
              </div>
              <div className="bg-white px-4 py-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Free Bookkeeper +<br />Business Tools<br /><span className="text-xs text-gray-500">(Appoye, Pipedrive, etc.)</span>
                </h3>
              </div>
              <div className="bg-white px-4 py-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Replacement &<br />Money-Back
                </h3>
              </div>
              <div className="bg-white px-4 py-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  Dedicated Account<br />Manager & VA<br />Knowledge Transfer
                </h3>
              </div>
            </div>

            {/* Row 1: Task Partner */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 px-6 py-6 flex items-center">
                <span className="text-base font-bold text-gray-900">Task Partner</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <span className="text-sm text-gray-700">60 minutes (always available)</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <span className="text-sm text-gray-700">0.1% (Pre-vetted & Pre-trained in 120+ nocode/AI tools)</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">90%+ pass rate</span>
                </div>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Free Bookeeper ($500) + Business Tools ($500)</span>
                </div>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Yes</span>
                </div>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-900">Yes</span>
                </div>
              </div>
            </div>

            {/* Row 2: Freelance Platforms */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              <div className="bg-gray-50 px-6 py-6 flex items-center">
                <span className="text-base font-bold text-gray-700">Freelance Platforms</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <span className="text-sm text-gray-700">Up to 3 weeks (waitlist)</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <span className="text-sm text-gray-700">Unclear (No training)</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-orange-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-sm text-gray-700">No success data</span>
                </div>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No</span>
              </div>
            </div>

            {/* Row 3: Other VA Companies */}
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              <div className="bg-gray-50 px-6 py-6 flex items-center">
                <span className="text-base font-bold text-gray-700">Other VA Companies</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <span className="text-sm text-gray-700">1 to 2 weeks (waitlist)</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <span className="text-sm text-gray-700">1% (Pre-vetted only)</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No interviews</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No</span>
              </div>
              <div className="bg-white px-4 py-6 text-center flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-700 ml-2">No</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button onClick={() => open()} className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 text-lg tracking-wide">
            <span className="relative z-10">Book Me the Smarter Option</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
