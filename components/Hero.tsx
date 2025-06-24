'use client';

import { useEffect, useRef } from 'react';
import { parallaxDepth, morphText, textScramble, magneticHover } from './animations';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initialize animations after component mounts
    const timer = setTimeout(() => {
      // Parallax effect on background
      parallaxDepth('.hero-bg', 0.3);
      
      // Morphing text for main title
      if (titleRef.current) {
        morphText('.hero-title', [
          'TRANSFORM',
          'ELEVATE', 
          'RADIATE',
          'LUMIÈRE'
        ], 3);
      }
      
      // Text scramble for subtitle
      if (subtitleRef.current) {
        textScramble('.hero-subtitle', 'Where science meets artistry in skincare perfection', 2.5);
      }
      
      // Magnetic hover for CTA
      magneticHover('.hero-cta', 0.4);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[150vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-neutral-100 to-stone-200"
    >
      {/* Background Image with Parallax */}
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-300 to-rose-300 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-stone-800 mb-4">
            LUMIÈRE AESTHETICS
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
        </div>

        {/* Main Hero Title */}
        <h2 
          ref={titleRef}
          className="hero-title text-6xl md:text-8xl lg:text-9xl font-extralight mb-12 text-stone-900 tracking-wide"
        >
          TRANSFORM
        </h2>

        {/* Subtitle with Scramble Effect */}
        <p 
          ref={subtitleRef}
          className="hero-subtitle text-xl md:text-2xl font-light text-stone-700 mb-16 max-w-3xl mx-auto leading-relaxed tracking-wide"
        >
          Where science meets artistry in skincare perfection
        </p>

        {/* Call to Action */}
        <div className="space-y-8">
          <button 
            ref={ctaRef}
            className="hero-cta group relative px-12 py-6 bg-gradient-to-r from-stone-900 to-stone-800 text-white font-light tracking-[0.2em] text-sm uppercase transition-all duration-500 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Discover Your Radiance</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </button>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center space-y-4 mt-20">
            <p className="text-stone-600 font-light tracking-[0.15em] text-xs uppercase">
              Scroll to Explore
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-stone-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 md:left-20">
        <div className="w-32 h-32 border border-stone-300 rounded-full opacity-30 animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-20 right-10 md:right-20">
        <div className="w-24 h-24 border border-rose-300 rotate-45 opacity-40 animate-pulse"></div>
      </div>

      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </section>
  );
};

export default Hero;