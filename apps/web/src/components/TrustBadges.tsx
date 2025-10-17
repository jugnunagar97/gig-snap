"use client";

import React from "react";
import { Star } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { name: "Trustpilot", rating: "4.7", image: "/trust/trustpilot.webp" },
    { name: "Indeed", rating: "4.8", image: "/trust/Indeed.webp" },
    { name: "LinkedIn", followers: "150K+ Followers", image: "/trust/Linkedin.webp" },
    { name: "Glassdoor", rating: "4.3", image: "/trust/Glassdoor.webp" },
    { name: "AmbitionBox", rating: "4.2", image: "/trust/Ambition.webp" },
    { name: "Clutch", rating: "4.9", image: "/trust/clutch.webp" },
  ];

  // Duplicate badges for seamless loop
  const duplicatedBadges = [...badges, ...badges];

  return (
    <section className="py-6 bg-white">
      <div className="overflow-hidden">
        {/* Animated Trust Badges */}
        <div className="flex animate-scroll">
          {duplicatedBadges.map((badge, idx) => (
            <div
              key={`${badge.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-4 mx-4"
            >
              {/* Logo */}
              <div className="h-15 flex items-center justify-center">
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="h-full w-auto object-contain opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
