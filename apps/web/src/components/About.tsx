"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondRowVisible, setIsSecondRowVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and trigger animations
            setIsVisible(false);
            setIsSecondRowVisible(false);
            
            // Small delay to ensure reset, then trigger first row
            setTimeout(() => {
              setIsVisible(true);
              // Trigger second row after delay
              setTimeout(() => {
                setIsSecondRowVisible(true);
              }, 500);
            }, 50);
          } else {
            // Reset animations when section is out of view
            setIsVisible(false);
            setIsSecondRowVisible(false);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight">
                Trusted by{" "}
                <span className="font-bold text-gray-900">2,500+</span>{" "}
                businesses for{" "}
                <span className="font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  micro-task excellence
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light tracking-wide">
                We connect busy professionals and growing businesses with skilled Indian virtual assistants 
                who excel at handling those small but crucial tasks that eat up your valuable time. 
                From <span className="font-semibold text-gray-900">email management</span> to{" "}
                <span className="font-semibold text-gray-900">data entry</span>, our platform 
                delivers overnight results for US clients.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light tracking-wide">
                Our virtual professionals become an extension of your team, handling everything from{" "}
                <span className="font-semibold text-gray-900">administrative tasks</span> to{" "}
                <span className="font-semibold text-gray-900">social media management</span> 
                with the precision and reliability you need to focus on what matters most.
              </p>
            </div>

            <div className="pt-2">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 text-base tracking-wide">
                <span className="relative z-10">Get Your Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Content - 4 Animated Boxes */}
          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* The Company - Slides from left */}
              <div 
                className={`transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-20 opacity-0'
                }`}
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.7s ease-out'
                }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">The Company</h3>
                  <p className="text-gray-600 text-base leading-relaxed font-light">
                    Founded with a vision to bridge the gap between global businesses and Indian talent, 
                    GigSnap has become the go-to platform for reliable micro-task outsourcing.
                  </p>
                </div>
              </div>

              {/* Services for You - Slides from right */}
              <div 
                className={`transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-20 opacity-0'
                }`}
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.7s ease-out 0.2s'
                }}
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 shadow-lg h-full">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Services for You</h3>
                  <p className="text-white/90 text-base leading-relaxed font-light">
                    From administrative support to digital marketing, our virtual assistants handle 
                    everything from email management to social media content creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Solutions We Offer - Slides from bottom */}
              <div 
                className={`transform transition-all duration-700 ease-out ${
                  isSecondRowVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transform: isSecondRowVisible ? 'translateY(0)' : 'translateY(80px)',
                  opacity: isSecondRowVisible ? 1 : 0,
                  transition: 'all 0.7s ease-out'
                }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg h-full">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Solutions We Offer</h3>
                  <p className="text-white/90 text-base leading-relaxed font-light">
                    Customized micro-task packages designed for your specific needs, from one-time 
                    projects to ongoing virtual assistant support.
                  </p>
                </div>
              </div>

              {/* Why GigSnap - Slides from bottom */}
              <div 
                className={`transform transition-all duration-700 ease-out ${
                  isSecondRowVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transform: isSecondRowVisible ? 'translateY(0)' : 'translateY(80px)',
                  opacity: isSecondRowVisible ? 1 : 0,
                  transition: 'all 0.7s ease-out 0.2s'
                }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Why GigSnap</h3>
                  <p className="text-gray-600 text-base leading-relaxed font-light">
                    We combine India's skilled talent pool with time zone advantages to deliver 
                    fast, reliable, and cost-effective micro-task solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
