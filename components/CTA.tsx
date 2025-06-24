'use client'
import React, { useEffect, useState } from 'react';

const CTA = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Subtle reveal animations matching brand story timing
    const timer1 = setTimeout(() => {
      document.querySelectorAll('.cta-reveal').forEach((el, index) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, index * 200);
      });
    }, 100);

    return () => clearTimeout(timer1);
  }, []);

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      {/* Subtle Background Pattern - matching brand story */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        {/* Hero Section - Following brand story typography */}
        <div className="text-center mb-32">
          <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000">
            <p className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase mb-8">
              Begin Your Transformation
            </p>
            <h2 className="text-5xl md:text-7xl font-extralight text-stone-900 mb-12 tracking-wide">
              Where <em className="font-light text-rose-600">Luxury</em> Meets 
              <br />
              <em className="font-light text-rose-600">Precision</em>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl font-light text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Experience the artistry of personalized skincare, where every formula 
              is crafted to reveal your skin's natural radiance.
            </p>
          </div>
        </div>

        {/* Main CTA Grid - Inspired by brand story layout */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          {/* Left Column - Call to Action */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000">
              <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
                Your Journey to 
                <em className="text-rose-600"> Radiant Skin</em>
              </h3>
            </div>

            <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Discover a world where Swiss precision meets French artistry. 
                Each product in our collection represents years of research, 
                clinical testing, and the finest ingredients from around the globe.
              </p>
            </div>

            <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000">
              <p className="text-lg text-stone-700 leading-relaxed mb-12">
                Begin with a complimentary consultation where our experts 
                analyze your unique skin profile and craft a personalized 
                regimen designed exclusively for you.
              </p>
            </div>

            {/* Elegant Button Group */}
            <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000">
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-stone-900 text-white px-12 py-4 text-lg font-light tracking-wide transition-all duration-500 hover:bg-stone-800 shadow-lg hover:shadow-xl">
                  <span className="flex items-center justify-center gap-3">
                    Start Your Consultation
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="group text-stone-700 text-lg font-light tracking-wide border-b border-stone-300 hover:border-stone-600 transition-colors duration-300 pb-1">
                  Explore Our Collection
                </button>
              </div>
            </div>

            {/* Trust Indicators - Matching brand story signature style */}
            <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-stone-300"></div>
                <p className="font-light text-stone-600 tracking-[0.2em] text-sm">
                  Complimentary shipping & consultation included
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Elegant Newsletter Signup */}
          <div className="relative">
            {/* Main signup card with floating design like brand story */}
            <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000 bg-white p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-extralight text-stone-900 mb-4 tracking-wide">
                  Exclusive Access
                </h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Join our community of discerning individuals and receive 
                  personalized skincare insights, early access to new collections, 
                  and expert guidance from our dermatologists.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="w-full px-6 py-4 bg-stone-50 border-b-2 border-stone-200 text-stone-900 placeholder-transparent focus:outline-none focus:border-rose-400 transition-all duration-300 font-light text-lg"
                    placeholder="your.email@example.com"
                    id="email"
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-6 transition-all duration-300 font-light tracking-wide pointer-events-none ${
                      emailFocused || email 
                        ? '-top-6 text-sm text-stone-600' 
                        : 'top-4 text-lg text-stone-400'
                    }`}
                  >
                    Your Email Address
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-900 hover:to-stone-800 text-white py-4 text-lg font-light tracking-wide transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Join Our Community
                </button>
              </div>

              {/* Benefits list */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-stone-600">
                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                  <span className="font-light">Personalized skincare recommendations</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-stone-600">
                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                  <span className="font-light">Early access to new collections</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-stone-600">
                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                  <span className="font-light">Expert guidance from dermatologists</span>
                </div>
              </div>
            </div>

            {/* Floating guarantee badge - like brand story floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-light text-stone-900 mb-2">30-Day</div>
                <div className="text-stone-600 font-light tracking-[0.2em] text-xs uppercase">
                  Satisfaction Promise
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights - Matching brand story key values layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000 text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-rose-50 to-rose-100 rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-light text-stone-900 mb-4 tracking-wide">Scientific Innovation</h4>
            <p className="text-stone-600 leading-relaxed font-light">
              Breakthrough formulations backed by clinical research and 
              years of dermatological expertise.
            </p>
          </div>

          <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000 text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="text-xl font-light text-stone-900 mb-4 tracking-wide">Artisanal Craftsmanship</h4>
            <p className="text-stone-600 leading-relaxed font-light">
              Each product is meticulously crafted in small batches, 
              ensuring uncompromising quality and freshness.
            </p>
          </div>

          <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000 text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-light text-stone-900 mb-4 tracking-wide">Sustainable Beauty</h4>
            <p className="text-stone-600 leading-relaxed font-light">
              Ethically sourced ingredients and environmentally conscious 
              practices that honor both skin and planet.
            </p>
          </div>
        </div>

        {/* Final CTA - Matching brand story testimonial style */}
        <div className="cta-reveal opacity-0 transform translate-y-8 transition-all duration-1000 text-center">
          <div className="bg-gradient-to-br from-stone-50 to-white p-16 shadow-xl max-w-5xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed mb-8 italic">
              "True beauty emerges when science and artistry unite to honor 
              your skin's unique journey."
            </blockquote>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-8"></div>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-16 h-px bg-stone-300"></div>
              <p className="font-light text-stone-600 tracking-[0.2em] text-sm">
                Dr. Élise Moreau, Founder
              </p>
              <div className="w-16 h-px bg-stone-300"></div>
            </div>

            <button className="bg-stone-900 text-white px-16 py-5 text-lg font-light tracking-wide transition-all duration-500 hover:bg-stone-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
              <span className="flex items-center justify-center gap-3">
                Begin Your Transformation
                <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element - Matching brand story */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default CTA;