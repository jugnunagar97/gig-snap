"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-banner.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium tracking-wide">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            Trusted by 2,500+ Growing Businesses
      </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            <span className="block font-light">Transform Your Business with</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
              Elite Virtual Talent
            </span>
            <span className="block font-light">That Actually Delivers</span>
            </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Stop wasting time with unreliable freelancers. Get a dedicated virtual professional 
            who becomes an integral part of your team, delivering consistent results and 
            growing alongside your business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 text-lg tracking-wide">
              <span className="relative z-10">Get Your Virtual Pro Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-10 py-5 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg tracking-wide">
              See Success Stories
            </button>
          </div>

            </div>
          </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}


