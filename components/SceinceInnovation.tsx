'use client';
import React, { useEffect, useRef } from 'react';
import { staggeredReveal, clipPathReveal, counterAnimation, parallaxDepth } from './animations';

const ScienceInnovation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Clip path reveals for hero elements
      clipPathReveal('.science-hero-image', 'left');
      clipPathReveal('.innovation-card-1', 'bottom');
      clipPathReveal('.innovation-card-2', 'top');
      clipPathReveal('.innovation-card-3', 'bottom');
      
      // Staggered reveal for text elements
      staggeredReveal('.science-text', 0.15);
      staggeredReveal('.science-heading', 0.1);
      
      // Counter animations for statistics
      counterAnimation('.stat-number-1', 98, 2.5);
      counterAnimation('.stat-number-2', 15, 2);
      counterAnimation('.stat-number-3', 72, 2.8);
      
      // Parallax for background elements
      parallaxDepth('.science-bg', 0.3);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="science-bg absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-rose-300 to-amber-300 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="science-heading opacity-0">
            <p className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase mb-8">
              Scientific Excellence
            </p>
          </div>
          <div className="science-heading opacity-0">
            <h2 className="text-5xl md:text-7xl font-extralight text-stone-900 mb-4 tracking-wide">
              The Science of 
              <em className="font-light text-rose-600">Innovation</em>
            </h2>
          </div>
          <div className="science-heading opacity-0">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-12"></div>
          </div>
          <div className="science-heading opacity-0">
            <p className="text-xl md:text-2xl font-light text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Where molecular precision meets botanical wisdom, creating formulations that transform your skin at the deepest cellular level.
            </p>
          </div>
        </div>

        {/* Hero Innovation Grid */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          {/* Left Column - Image */}
          <div className="relative">
            <div 
              className="science-hero-image aspect-[4/5] bg-cover bg-center rounded-sm shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop')`
              }}
            />
            
            {/* Floating Research Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl rounded-sm border border-stone-100">
              <div className="text-center">
                <div className="text-3xl font-light text-stone-900 mb-2">
                  <span className="stat-number-1">98</span><span className="text-xl">%</span>
                </div>
                <div className="text-stone-600 font-light tracking-[0.2em] text-xs uppercase">
                  Efficacy Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="science-text opacity-0">
              <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
                Precision 
                <em className="text-rose-600">Formulations</em>
              </h3>
            </div>

            <div className="science-text opacity-0">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Our Swiss laboratory combines centuries-old botanical knowledge with 
                cutting-edge biotechnology. Each formula undergoes over 200 hours of 
                development, ensuring molecular compatibility and optimal skin penetration.
              </p>
            </div>

            <div className="science-text opacity-0">
              <p className="text-lg text-stone-700 leading-relaxed">
                Using proprietary micro-encapsulation technology, we deliver active 
                ingredients directly to your skin's cellular matrix, where they work 
                in harmony with your natural regeneration processes.
              </p>
            </div>

            {/* Research Credentials */}
            <div className="science-text opacity-0 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-stone-300"></div>
                <p className="font-light text-stone-600 tracking-[0.2em] text-sm">
                  Swiss Laboratory Standards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Technologies */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <div className="science-text opacity-0">
              <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
                Breakthrough Technologies
              </h3>
              <p className="text-stone-600 font-light tracking-[0.2em] text-sm uppercase">
                Pioneering the Future of Skincare
              </p>
            </div>
          </div>

          <div className="space-y-32">
            {/* Innovation 1 - Peptide Complex */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="innovation-card-1 bg-gradient-to-br from-white to-stone-50 rounded-sm shadow-2xl p-12 border border-stone-100 relative overflow-hidden">
                  {/* Elegant Icon Design */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-rose-300 rounded-full relative">
                      <div className="absolute inset-1 border border-rose-400 rounded-full"></div>
                      <div className="absolute inset-2 bg-rose-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="pr-24">
                    <h4 className="text-3xl font-extralight text-stone-900 mb-6 tracking-wide">
                      Peptide Complex Technology
                    </h4>
                    <div className="w-16 h-px bg-rose-300 mb-8"></div>
                    <p className="text-lg text-stone-700 leading-relaxed mb-8">
                      Advanced bioactive peptides that communicate directly with your skin cells, 
                      stimulating natural collagen synthesis and cellular renewal processes.
                    </p>
                    
                    {/* Technical Details */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Penetrates 50% deeper than conventional peptides
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Stimulates type I & III collagen production
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Clinically proven 67% improvement in skin firmness
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Research Stats */}
                <div className="absolute -top-8 -left-8 bg-gradient-to-br from-rose-50 to-white p-6 shadow-xl rounded-sm border border-rose-100">
                  <div className="text-center">
                    <div className="text-2xl font-light text-rose-600 mb-1">
                      <span className="stat-number-2">25</span><span className="text-sm">+</span>
                    </div>
                    <div className="text-stone-600 text-xs tracking-wide uppercase">Years Research</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="science-text opacity-0">
                  <p className="text-xl font-light text-stone-800 leading-relaxed">
                    Our proprietary peptide complex mimics your skin's natural signaling 
                    pathways, activating dormant repair mechanisms that diminish with age.
                  </p>
                </div>
                <div className="science-text opacity-0">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    Each peptide molecule is precisely engineered to target specific 
                    cellular functions—from elastin production to barrier repair—creating 
                    a symphony of rejuvenation that works while you sleep.
                  </p>
                </div>
                <div className="science-text opacity-0 pt-4">
                  <div className="bg-stone-50 p-6 rounded-sm border border-stone-200">
                    <p className="text-stone-700 italic text-sm leading-relaxed">
                      "The breakthrough came when we discovered how to stabilize peptides 
                      in an oil-water matrix, maintaining their bioactivity for optimal results."
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="w-8 h-px bg-stone-300"></div>
                      <p className="text-stone-600 text-xs tracking-wide">Dr. Chen Wei, Lead Biochemist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation 2 - Micro-Encapsulation */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="lg:order-2 relative">
                <div className="innovation-card-2 bg-gradient-to-br from-white to-amber-50 rounded-sm shadow-2xl p-12 border border-amber-100 relative overflow-hidden">
                  {/* Elegant Icon Design */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 border-2 border-amber-300 rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 border border-amber-400 rounded-full bg-amber-200"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="pr-24">
                    <h4 className="text-3xl font-extralight text-stone-900 mb-6 tracking-wide">
                      Micro-Encapsulation System
                    </h4>
                    <div className="w-16 h-px bg-amber-300 mb-8"></div>
                    <p className="text-lg text-stone-700 leading-relaxed mb-8">
                      Revolutionary delivery technology that protects active ingredients 
                      and releases them gradually for sustained efficacy throughout the day.
                    </p>
                    
                    {/* Technical Details */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Nano-sized capsules for optimal skin penetration
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          pH-responsive release mechanism
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Extends active ingredient stability by 300%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Duration Badge */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-amber-50 to-white p-6 shadow-xl rounded-sm border border-amber-100">
                  <div className="text-center">
                    <div className="text-2xl font-light text-amber-600 mb-1">
                      <span className="stat-number-3">0</span><span className="text-sm">hr</span>
                    </div>
                    <div className="text-stone-600 text-xs tracking-wide uppercase">Protection</div>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 space-y-8">
                <div className="science-text opacity-0">
                  <p className="text-xl font-light text-stone-800 leading-relaxed">
                    Each microscopic capsule is engineered to respond to your skin's 
                    unique environment, releasing actives precisely when and where needed.
                  </p>
                </div>
                <div className="science-text opacity-0">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    This patented technology ensures that sensitive ingredients like 
                    vitamin C and retinol maintain their potency from the moment 
                    of application through hours of continued release.
                  </p>
                </div>
                <div className="science-text opacity-0 pt-4">
                  <div className="bg-amber-50 p-6 rounded-sm border border-amber-200">
                    <p className="text-stone-700 italic text-sm leading-relaxed">
                      "We've essentially created a time-release pharmacy within each 
                      drop of serum, tailored to your skin's circadian rhythms."
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="w-8 h-px bg-amber-300"></div>
                      <p className="text-stone-600 text-xs tracking-wide">Prof. Elena Rossi, Formulation Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation 3 - Marine Bioactives */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="innovation-card-3 bg-gradient-to-br from-white to-stone-50 rounded-sm shadow-2xl p-12 border border-stone-100 relative overflow-hidden">
                  {/* Elegant Icon Design */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-stone-100 to-stone-50 rounded-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-1 bg-stone-300 rounded-full"></div>
                      <div className="w-6 h-1 bg-stone-400 rounded-full mt-1"></div>
                      <div className="w-4 h-1 bg-stone-300 rounded-full mt-1"></div>
                      <div className="absolute -top-1 left-6 w-2 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="pr-24">
                    <h4 className="text-3xl font-extralight text-stone-900 mb-6 tracking-wide">
                      Marine Bioactives Complex
                    </h4>
                    <div className="w-16 h-px bg-stone-300 mb-8"></div>
                    <p className="text-lg text-stone-700 leading-relaxed mb-8">
                      Sustainably harvested from pristine ocean depths, these rare bioactives 
                      deliver profound hydration and cellular protection.
                    </p>
                    
                    {/* Technical Details */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          98% natural origin from certified sustainable sources
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Rich in omega-3 fatty acids and marine minerals
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          Carbon-neutral extraction and processing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Sustainability Badge */}
                <div className="absolute -top-12 -left-12 bg-gradient-to-br from-stone-50 to-white p-6 shadow-xl rounded-sm border border-stone-100 max-w-xs">
                  <p className="text-stone-800 font-light text-sm leading-relaxed mb-3">
                    "Every drop honors the ocean's wisdom while protecting its future."
                  </p>
                  <div className="w-8 h-px bg-stone-300"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="science-text opacity-0">
                  <p className="text-xl font-light text-stone-800 leading-relaxed">
                    From the deepest trenches of the Pacific, we source rare algae 
                    and marine botanicals that have adapted to extreme environments.
                  </p>
                </div>
                <div className="science-text opacity-0">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    These extraordinary organisms have developed unique protective 
                    mechanisms that translate into unprecedented anti-aging benefits 
                    for human skin, providing resilience against environmental stressors.
                  </p>
                </div>
                <div className="science-text opacity-0 pt-4">
                  <div className="bg-stone-50 p-6 rounded-sm border border-stone-200">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-xl font-light text-stone-900 mb-1">98%</div>
                        <div className="text-stone-600 text-xs tracking-wide">Natural Origin</div>
                      </div>
                      <div>
                        <div className="text-xl font-light text-stone-900 mb-1">Zero</div>
                        <div className="text-stone-600 text-xs tracking-wide">Carbon Impact</div>
                      </div>
                      <div>
                        <div className="text-xl font-light text-stone-900 mb-1">72hr</div>
                        <div className="text-stone-600 text-xs tracking-wide">Hydration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Promise Section */}
        <div className="pt-32 border-t border-stone-200">
          <div className="text-center">
            <div className="science-text opacity-0 mb-20">
              <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
                Our Commitment to Excellence
              </h3>
              <p className="text-stone-600 font-light tracking-[0.2em] text-sm uppercase mb-12">
                Transparency in Every Formula
              </p>
            </div>

            <div className="science-text opacity-0 max-w-4xl mx-auto mb-20">
              <p className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed mb-12">
                Every product undergoes rigorous 
                <em className="text-rose-600"> clinical validation </em>
                before reaching your hands. We believe in the power of 
                <em className="text-rose-600"> science </em>
                to unlock your skin's natural potential.
              </p>
            </div>

            {/* Research Standards Grid */}
            <div className="science-text opacity-0 grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-50 to-rose-100 rounded-sm flex items-center justify-center mx-auto mb-6 border border-rose-200">
                  <div className="w-8 h-8 border-2 border-rose-400 rounded-sm relative">
                    <div className="absolute inset-1 bg-rose-300 rounded-sm"></div>
                  </div>
                </div>
                <h4 className="text-xl font-light text-stone-900 mb-4 tracking-wide">Clinical Validation</h4>
                <p className="text-stone-600 leading-relaxed">
                  Independent dermatological testing validates every efficacy claim, 
                  ensuring results you can trust and measure.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-amber-100 rounded-sm flex items-center justify-center mx-auto mb-6 border border-amber-200">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-amber-400 rounded-full"></div>
                    <div className="absolute inset-2 border border-amber-500 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-light text-stone-900 mb-4 tracking-wide">Pure Innovation</h4>
                <p className="text-stone-600 leading-relaxed">
                  Our Swiss laboratory adheres to pharmaceutical-grade standards, 
                  ensuring purity and potency in every formulation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-stone-50 to-stone-100 rounded-sm flex items-center justify-center mx-auto mb-6 border border-stone-200">
                  <div className="relative">
                    <div className="w-8 h-6 border-2 border-stone-400 rounded-sm"></div>
                    <div className="absolute inset-1 flex items-center justify-center">
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-light text-stone-900 mb-4 tracking-wide">Sustainable Science</h4>
                <p className="text-stone-600 leading-relaxed">
                  Environmental responsibility guides every aspect of our research, 
                  from sourcing to packaging, ensuring beauty without compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-16">
        <div className="w-40 h-40 border border-stone-200 rounded-full opacity-30 animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-32 right-16">
        <div className="w-32 h-32 border border-rose-200 rotate-45 opacity-40 animate-pulse"></div>
      </div>

      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </section>
  );
};

export default ScienceInnovation;