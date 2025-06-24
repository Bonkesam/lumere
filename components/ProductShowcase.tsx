'use client';

import { useEffect, useRef } from 'react';
import { horizontalScroll, magneticHover, counterAnimation, staggeredReveal } from './animations';

const ProductShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      category: 'Anti-Aging',
      price: '$285',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop',
      description: 'A transformative elixir infused with Swiss glacier water and concentrated peptides.',
      keyIngredient: 'Glacier Marine Collagen',
      benefits: ['Reduces fine lines by 47%', 'Improves elasticity', 'Luminous complexion']
    },
    {
      id: 2,
      name: 'Platinum Recovery Cream',
      category: 'Night Care',
      price: '$420',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop',
      description: 'Overnight restoration with rare botanical extracts and 24k gold particles.',
      keyIngredient: '24K Gold Infusion',
      benefits: ['Cellular regeneration', 'Deep hydration', 'Firming effect']
    },
    {
      id: 3,
      name: 'Diamond Exfoliant',
      category: 'Treatment',
      price: '$195',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
      description: 'Gentle yet powerful resurfacing treatment with micronized diamonds.',
      keyIngredient: 'Diamond Powder',
      benefits: ['Smooth texture', 'Refined pores', 'Radiant glow']
    },
    {
      id: 4,
      name: 'Hydra-Luminous Mask',
      category: 'Weekly Treatment',
      price: '$165',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2070&auto=format&fit=crop',
      description: 'Intensive hydrating mask with hyaluronic spheres and pearl extract.',
      keyIngredient: 'Pearl Protein Complex',
      benefits: ['Instant hydration', 'Plumping effect', 'Ethereal glow']
    },
    {
      id: 5,
      name: 'Eye Contour Elixir',
      category: 'Eye Care',
      price: '$245',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
      description: 'Precision treatment for the delicate eye area with caviar extract.',
      keyIngredient: 'Caviar Cellular Extract',
      benefits: ['Reduces dark circles', 'Lifts upper lids', 'Smooths crow\'s feet']
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Horizontal scroll for products
      horizontalScroll('.products-container', '.product-card');
      
      // Counter animations for stats
      counterAnimation('.stat-number-1', 10000, 2);
      counterAnimation('.stat-number-2', 98, 2);
      
      // Staggered reveal for intro text
      staggeredReveal('.products-intro', 0.2);
      
      // Magnetic hover for product cards
      products.forEach((_, index) => {
        magneticHover(`.product-card-${index}`, 0.1);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={showcaseRef}
      id="products"
      className="relative bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden"
    >
      {/* Section Introduction */}
      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <div className="products-intro opacity-0">
            <p className="text-stone-600 font-light tracking-[0.3em] text-sm uppercase mb-8">
              Signature Collection
            </p>
            <h2 className="text-5xl md:text-7xl font-extralight text-stone-900 mb-12 tracking-wide">
              Artistry in Every 
              <em className="text-rose-600"> Drop</em>
            </h2>
          </div>

          <div className="products-intro opacity-0">
            <p className="text-xl text-stone-700 font-light leading-relaxed max-w-3xl mx-auto mb-16">
              Each product represents the pinnacle of skincare innovation, 
              meticulously crafted with the world's most precious ingredients 
              and backed by decades of research.
            </p>
          </div>

          {/* Stats */}
          <div className="products-intro opacity-0 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="stat-number-1 text-3xl font-light text-rose-600 mb-2">0</div>
              <p className="text-stone-600 font-light tracking-[0.15em] text-xs uppercase">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <div className="stat-number-2 text-3xl font-light text-rose-600 mb-2">0</div>
              <p className="text-stone-600 font-light tracking-[0.15em] text-xs uppercase">
                Satisfaction Rate
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-rose-600 mb-2">25+</div>
              <p className="text-stone-600 font-light tracking-[0.15em] text-xs uppercase">
                Years Research
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-rose-600 mb-2">5</div>
              <p className="text-stone-600 font-light tracking-[0.15em] text-xs uppercase">
                Award Winning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Products */}
      <div className="products-container min-h-screen flex items-center">
        <div className="flex space-x-12 px-8 py-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card product-card-${index} flex-shrink-0 w-96 bg-white shadow-2xl rounded-sm overflow-hidden group cursor-pointer`}
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-stone-800 font-light tracking-[0.1em] text-xs uppercase">
                    {product.category}
                  </p>
                </div>

                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-stone-900/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-white font-light tracking-wide">
                    {product.price}
                  </p>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-light tracking-[0.1em] text-xs uppercase mb-2">
                      Key Ingredient
                    </p>
                    <p className="text-lg font-light mb-4">
                      {product.keyIngredient}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-light text-stone-900 mb-4 tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <p className="text-stone-600 font-light tracking-[0.1em] text-xs uppercase">
                    Key Benefits
                  </p>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3 text-sm text-stone-700">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full py-4 bg-gradient-to-r from-stone-900 to-stone-800 text-white font-light tracking-[0.2em] text-sm uppercase hover:shadow-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-rose-500">
                  Discover More
                </button>
              </div>
            </div>
          ))}

          {/* End Card - CTA */}
          <div className="flex-shrink-0 w-96 h-full flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-black text-white rounded-sm shadow-2xl">
            <div className="text-center p-12">
              <h3 className="text-3xl font-extralight mb-8 tracking-wide">
                Discover Your 
                <br />
                <em className="text-rose-400">Perfect Match</em>
              </h3>
              <p className="text-stone-300 font-light leading-relaxed mb-12">
                Let our skincare specialists create a personalized regimen 
                tailored to your unique needs and goals.
              </p>
              <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 font-light tracking-[0.2em] text-sm uppercase">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-stone-600 font-light tracking-[0.15em] text-xs uppercase mb-4">
          Scroll Horizontally
        </p>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
          <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;