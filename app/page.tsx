'use client';
import { animations } from '@/components/animations';
import BrandStory from '@/components/BrandStory';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProductShowcase from '@/components/ProductShowcase';
import ScienceInnovation from '@/components/SceinceInnovation';
import Testimonials from '@/components/Testimonials';
import React, { useEffect } from 'react';


const Home = () => {
  useEffect(() => {
    // Initialize global animations
    animations.init();
    
    // Add smooth scrolling behavior
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f5f9;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #e11d48, #f59e0b);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #be185d, #d97706);
      }
      
      /* Preload fonts */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Enhance text rendering */
      * {
        text-rendering: optimizeLegibility;
      }
      
      /* Loading animation for images */
      img {
        transition: opacity 0.3s ease;
      }
      
      img[loading="lazy"] {
        opacity: 0;
      }
      
      img[loading="lazy"].loaded {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    
    // Add intersection observer for lazy loading images
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    // Observe all lazy loading images
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
    
    return () => {
      document.head.removeChild(style);
      imageObserver.disconnect();
    };
  }, []);

  // Preload critical images
  useEffect(() => {
    const criticalImages = [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen */}
      <div 
        id="loading-screen" 
        className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-1000"
        style={{ opacity: 0, pointerEvents: 'none' }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin mb-4"></div>
          <p className="text-stone-600 font-light">Loading Beauty...</p>
        </div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* Brand Story Section */}
        <section id="story">
          <BrandStory />
        </section>
        
        {/* Product Showcase Section */}
        <section id="products">
          <ProductShowcase />
        </section>
        
        {/* Science & Innovation Section */}
        <section id="science">
          <ScienceInnovation />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>
        
        {/* Final CTA Section */}
        <section id="contact">
          <CTA />
        </section>
      </main>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Background Cursor Effect */}
      <CursorEffect />
    </div>
  );
};

// Scroll to Top Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

// Cursor Effect Component
const CursorEffect = () => {
  React.useEffect(() => {
    let cursor: HTMLDivElement | null = null;
    let cursorFollower: HTMLDivElement | null = null;
    
    // Only add cursor effect on desktop
    if (window.innerWidth > 768) {
      cursor = document.createElement('div');
      cursor.className = 'fixed w-2 h-2 bg-rose-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100';
      cursor.style.left = '-10px';
      cursor.style.top = '-10px';
      document.body.appendChild(cursor);
      
      cursorFollower = document.createElement('div');
      cursorFollower.className = 'fixed w-8 h-8 border border-rose-300 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300';
      cursorFollower.style.left = '-16px';
      cursorFollower.style.top = '-16px';
      document.body.appendChild(cursorFollower);
      
      const moveCursor = (e: MouseEvent) => {
        if (cursor) {
          cursor.style.left = e.clientX - 4 + 'px';
          cursor.style.top = e.clientY - 4 + 'px';
        }
        
        setTimeout(() => {
          if (cursorFollower) {
            cursorFollower.style.left = e.clientX - 16 + 'px';
            cursorFollower.style.top = e.clientY - 16 + 'px';
          }
        }, 50);
      };
      
      const handleMouseEnter = () => {
        if (cursor) cursor.style.transform = 'scale(1.5)';
        if (cursorFollower) cursorFollower.style.transform = 'scale(1.5)';
      };
      
      const handleMouseLeave = () => {
        if (cursor) cursor.style.transform = 'scale(1)';
        if (cursorFollower) cursorFollower.style.transform = 'scale(1)';
      };
      
      document.addEventListener('mousemove', moveCursor);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      
      return () => {
        document.removeEventListener('mousemove', moveCursor);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
        if (cursor) document.body.removeChild(cursor);
        if (cursorFollower) document.body.removeChild(cursorFollower);
      };
    }
  }, []);
  
  return null;
};

export default Home;