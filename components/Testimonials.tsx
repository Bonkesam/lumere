'use client';

import React, { useEffect, useState, useRef } from 'react';
import { clipPathReveal, staggeredReveal, parallaxDepth, magneticHover, morphText, textScramble } from './animations';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Parallax for background elements
      parallaxDepth('.testimonial-bg', 0.3);
      
      // Clip path reveals for main elements
      clipPathReveal('.testimonial-hero', 'bottom');
      clipPathReveal('.testimonial-portrait', 'left');
      
      // Staggered reveal for content
      staggeredReveal('.testimonial-reveal', 0.3);
      
      // Magnetic hover effects
      magneticHover('.testimonial-nav-btn', 0.4);
      magneticHover('.testimonial-portrait', 0.2);
      
      // Morphing text for the subtitle
      morphText('.testimonial-morphing', [
        'Voices of Transformation',
        'Stories of Luminescence', 
        'Journeys of Radiance',
        'Tales of Renewal'
      ], 3);
      
      // Text scramble effect for stats
      textScramble('.stat-number-1', '98%', 2);
      textScramble('.stat-number-2', '25+', 2.5);
      textScramble('.stat-number-3', '10K+', 3);
      
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Dr. Élise Moreau",
      role: "Founder & Chief Scientist",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=800&fit=crop&crop=face",
      quote: "Beauty transcends the superficial—it's the profound alchemy of science and soul, where each formulation becomes a love letter to your skin's infinite potential.",
      signature: "É. Moreau",
      featured: true
    },
    {
      name: "Isabella Rossi",
      role: "Creative Director",
      location: "Milan, Italy", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
      quote: "Each morning ritual becomes a meditation—where molecular precision meets the poetry of transformation, awakening luminescence from within.",
      signature: "I. Rossi"
    },
    {
      name: "Dr. Amara Okafor",
      role: "Clinical Dermatologist",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=800&fit=crop&crop=face",
      quote: "In thirty years of practice, I've witnessed countless formulations. This transcends clinical excellence—it's where dermatological artistry meets the soul.",
      signature: "A. Okafor"
    },
    {
      name: "Sophia Chen",
      role: "Beauty Philosopher",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=face",
      quote: "The transformation wasn't merely visible—it was visceral. For the first time, I felt my skin breathe with life, radiating the confidence I'd always sought.",
      signature: "S. Chen"
    }
  ];

  const handleTestimonialChange = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Trigger exit animation
    clipPathReveal('.testimonial-content', 'right');
    
    setTimeout(() => {
      setActiveTestimonial(index);
      // Trigger entrance animation
      clipPathReveal('.testimonial-content', 'left');
      setIsTransitioning(false);
    }, 800);
  };

  const nextTestimonial = () => {
    handleTestimonialChange((activeTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    handleTestimonialChange((activeTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-stone-50 via-white to-rose-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div 
        className="testimonial-bg absolute inset-0 opacity-4"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Floating Geometric Elements */}
      <div className="testimonial-bg absolute top-20 right-20 w-64 h-64 bg-rose-100/10 rounded-full blur-3xl"></div>
      <div className="testimonial-bg absolute bottom-32 left-16 w-80 h-80 bg-amber-100/8 rounded-full blur-3xl"></div>
      <div className="testimonial-bg absolute top-1/2 left-1/3 w-32 h-32 bg-stone-100/15 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        {/* Section Header */}
        <div className="text-center mb-40">
          <div className="testimonial-reveal opacity-0">
            <p className="testimonial-morphing text-stone-600 font-light tracking-[0.4em] text-sm uppercase mb-8">
              Voices of Transformation
            </p>
            <h2 className="testimonial-hero text-6xl md:text-8xl font-extralight text-stone-900 mb-16 tracking-tight leading-none">
              Luminous
              <br />
              <em className="font-light text-rose-600">Testimonies</em>
            </h2>
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 testimonial-reveal opacity-0">
            <div className="relative">
              <div 
                className="testimonial-portrait aspect-[3/4] bg-cover bg-center rounded-sm shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url('${testimonials[activeTestimonial].image}')`
                }}
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Signature */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm">
                  <div className="text-stone-900 font-light text-sm tracking-wider">
                    {testimonials[activeTestimonial].signature}
                  </div>
                </div>
              </div>
              
              {/* Location Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-rose-50 to-amber-50 px-6 py-3 shadow-xl rounded-sm">
                <div className="text-stone-700 font-light text-sm tracking-[0.2em] uppercase">
                  {testimonials[activeTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 testimonial-reveal opacity-0">
            <div className="testimonial-content">
              {/* Large Quote Mark */}
              <div className="text-9xl font-serif text-rose-200/50 leading-none mb-8 select-none">
                "
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-extralight text-stone-800 leading-relaxed mb-12 italic -mt-16">
                {testimonials[activeTestimonial].quote}
              </blockquote>
              
              {/* Author Info */}
              <div className="space-y-4">
                <h4 className="text-2xl font-light text-stone-900 tracking-wide">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
              
              {/* Decorative Line */}
              <div className="mt-8 w-24 h-px bg-gradient-to-r from-rose-300 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Navigation & Indicators */}
        <div className="testimonial-reveal opacity-0 flex items-center justify-between max-w-4xl mx-auto mb-40">
          <button 
            onClick={prevTestimonial}
            className="testimonial-nav-btn group flex items-center space-x-3 text-stone-600 hover:text-rose-600 transition-colors duration-500"
            disabled={isTransitioning}
          >
            <div className="w-12 h-12 rounded-full border border-stone-300 group-hover:border-rose-400 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-light tracking-[0.2em] text-sm uppercase">Previous</span>
          </button>

          {/* Elegant Indicators */}
          <div className="flex items-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`transition-all duration-700 ${
                  index === activeTestimonial 
                    ? 'w-12 h-1 bg-rose-400' 
                    : 'w-3 h-3 bg-stone-300 hover:bg-stone-400 rounded-full'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="testimonial-nav-btn group flex items-center space-x-3 text-stone-600 hover:text-rose-600 transition-colors duration-500"
            disabled={isTransitioning}
          >
            <span className="font-light tracking-[0.2em] text-sm uppercase">Next</span>
            <div className="w-12 h-12 rounded-full border border-stone-300 group-hover:border-rose-400 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Refined Stats Section */}
        <div className="testimonial-reveal opacity-0 border-t border-stone-200 pt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
              Excellence in Numbers
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="stat-number-1 text-5xl font-extralight text-stone-900 mb-4">98%</div>
              <div className="w-16 h-px bg-rose-300 mx-auto mb-4 group-hover:w-24 transition-all duration-700"></div>
              <div className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase">
                Client Satisfaction
              </div>
            </div>
            
            <div className="text-center group">
              <div className="stat-number-2 text-5xl font-extralight text-stone-900 mb-4">25+</div>
              <div className="w-16 h-px bg-amber-300 mx-auto mb-4 group-hover:w-24 transition-all duration-700"></div>
              <div className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase">
                Years of Mastery
              </div>
            </div>
            
            <div className="text-center group">
              <div className="stat-number-3 text-5xl font-extralight text-stone-900 mb-4">10K+</div>
              <div className="w-16 h-px bg-stone-300 mx-auto mb-4 group-hover:w-24 transition-all duration-700"></div>
              <div className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase">
                Skin Transformations
              </div>
            </div>
          </div>
        </div>

        {/* Closing Philosophy */}
        <div className="testimonial-reveal opacity-0 mt-32 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl font-light text-stone-700 leading-relaxed italic mb-8">
              "Every testimonial is a sacred trust—a story of transformation that began with 
              a single moment of faith in the artistry of science and the poetry of care."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-stone-300"></div>
              <p className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase">
                Lumière Aesthetics
              </p>
              <div className="w-16 h-px bg-stone-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Testimonials;