'use client';

import { useEffect, useRef } from 'react';
import { clipPathReveal, staggeredReveal, parallaxDepth } from './animations';

const BrandStory = () => {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Clip path reveals for images
      clipPathReveal('.story-image-1', 'left');
      clipPathReveal('.story-image-2', 'right');
      
      // Staggered reveal for text elements
      staggeredReveal('.story-text', 0.2);
      
      // Parallax for background elements
      parallaxDepth('.story-bg', 0.4);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={storyRef}
      id="story"
      className="relative min-h-[200vh] bg-gradient-to-b from-stone-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="story-bg absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        {/* Section Header */}
        <div className="text-center mb-32">
          <div className="story-text opacity-0">
            <p className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase mb-8">
              Our Heritage
            </p>
            <h2 className="text-5xl md:text-7xl font-extralight text-stone-900 mb-12 tracking-wide">
              The Art of <em className="font-light text-rose-600">Transformation</em>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          {/* Left Column - Image */}
          <div className="relative">
            <div 
              className="story-image-1 aspect-[4/5] bg-cover bg-center rounded-sm shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2070&auto=format&fit=crop')`
              }}
            />
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl rounded-sm">
              <div className="text-center">
                <div className="text-3xl font-light text-stone-900 mb-2">25+</div>
                <div className="text-stone-600 font-light tracking-[0.2em] text-xs uppercase">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="story-text opacity-0">
              <p className="text-2xl md:text-3xl font-light text-stone-800 leading-relaxed mb-8">
                Born from a vision to bridge the gap between 
                <em className="text-rose-600"> luxury </em>
                and 
                <em className="text-rose-600"> efficacy</em>, 
                Lumière Aesthetics emerged from decades of research in dermatological science.
              </p>
            </div>

            <div className="story-text opacity-0">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Our founders, renowned dermatologists and aesthetic pioneers, 
                recognized that true beauty transcends surface-level treatments. 
                It requires a deep understanding of skin biology, combined with 
                the artistry of personalized care.
              </p>
            </div>

            <div className="story-text opacity-0">
              <p className="text-lg text-stone-700 leading-relaxed">
                Each product in our collection represents hundreds of hours of 
                research, clinical testing, and refinement. We source only the 
                finest ingredients from around the world, ensuring that every 
                formula delivers transformative results while honoring your skin's 
                natural wisdom.
              </p>
            </div>

            {/* Signature */}
            <div className="story-text opacity-0 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-stone-300"></div>
                <p className="font-light text-stone-600 tracking-[0.2em] text-sm">
                  Dr. Élise Moreau, Founder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text */}
          <div className="lg:order-2 flex flex-col justify-center space-y-12">
            <div className="story-text opacity-0">
              <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
                Science Meets 
                <em className="text-rose-600"> Soul</em>
              </h3>
            </div>

            <div className="story-text opacity-0">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Our laboratory is more than a place of formulation—it's a sanctuary 
                where innovation meets intuition. Here, molecular gastronomy techniques 
                merge with traditional botanical wisdom, creating textures and experiences 
                that awaken the senses.
              </p>
            </div>

            <div className="story-text opacity-0">
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Every ingredient tells a story. Swiss glacier water carries minerals 
                formed over millennia. Japanese camellia oil, pressed using methods 
                passed down through generations. French marine collagen, harvested 
                sustainably from pristine waters.
              </p>
            </div>

            {/* Key Values */}
            <div className="story-text opacity-0 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-rose-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-2 tracking-wide">Sustainable Luxury</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Every component is ethically sourced, ensuring beauty that doesn't compromise our planet's future.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-rose-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-2 tracking-wide">Clinical Precision</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Each formula undergoes rigorous testing, ensuring both safety and remarkable efficacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-rose-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-2 tracking-wide">Personalized Artistry</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    We believe every individual deserves a bespoke approach to their unique skin journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:order-1 relative">
            <div 
              className="story-image-2 aspect-[3/4] bg-cover bg-center rounded-sm shadow-2xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')`
              }}
            />
            
            {/* Floating Quote */}
            <div className="absolute -top-12 -left-12 bg-gradient-to-br from-rose-50 to-amber-50 p-8 shadow-xl rounded-sm max-w-xs">
              <p className="text-stone-800 font-light italic text-sm leading-relaxed mb-4">
                "Beauty is not just about appearance—it's about feeling completely at home in your own skin."
              </p>
              <div className="w-8 h-px bg-rose-300"></div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-32 pt-32 border-t border-stone-200">
          <div className="text-center mb-20">
            <div className="story-text opacity-0">
              <h3 className="text-4xl md:text-5xl font-extralight text-stone-900 mb-8 tracking-wide">
                Our Journey
              </h3>
              <p className="text-stone-600 font-light tracking-[0.2em] text-sm uppercase">
                Milestones of Excellence
              </p>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-rose-300 via-stone-300 to-transparent"></div>

            <div className="space-y-32">
              {/* Timeline Item 1 */}
              <div className="story-text opacity-0 relative">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right">
                    <div className="text-3xl font-light text-rose-600 mb-4">1998</div>
                    <h4 className="text-xl font-light text-stone-900 mb-4">The Genesis</h4>
                    <p className="text-stone-700 leading-relaxed">
                      Dr. Élise Moreau establishes the first Lumière research laboratory 
                      in the Swiss Alps, focusing on the intersection of dermatology and luxury.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="lg:w-1/2 lg:pl-12"></div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="story-text opacity-0 relative">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <div className="text-3xl font-light text-amber-600 mb-4">2005</div>
                    <h4 className="text-xl font-light text-stone-900 mb-4">Global Recognition</h4>
                    <p className="text-stone-700 leading-relaxed">
                      Lumière's first collection launches to international acclaim, 
                      setting new standards for luxury skincare efficacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="story-text opacity-0 relative">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12 text-center lg:text-right">
                    <div className="text-3xl font-light text-rose-600 mb-4">2015</div>
                    <h4 className="text-xl font-light text-stone-900 mb-4">Sustainable Innovation</h4>
                    <p className="text-stone-700 leading-relaxed">
                      We pioneer the first carbon-neutral luxury skincare production, 
                      proving that excellence and environmental responsibility can coexist.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="lg:w-1/2 lg:pl-12"></div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="story-text opacity-0 relative">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <div className="text-3xl font-light text-purple-600 mb-4">Today</div>
                    <h4 className="text-xl font-light text-stone-900 mb-4">Your Journey Begins</h4>
                    <p className="text-stone-700 leading-relaxed">
                      With over 25 years of expertise, we continue to push boundaries, 
                      creating personalized beauty experiences that transform lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default BrandStory;