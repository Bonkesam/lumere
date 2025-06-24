'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { animations } from '@/components/animations';
import BrandStory from '@/components/BrandStory';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProductShowcase from '@/components/ProductShowcase';
import ScienceInnovation from '@/components/ScienceInnovation';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before running client-side code
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    animations.init();

    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const style = document.createElement('style');
    style.textContent = `
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
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      * {
        text-rendering: optimizeLegibility;
      }
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

    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });

    return () => {
      document.head.removeChild(style);
      imageObserver.disconnect();
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    
    const critical = [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    ];
    critical.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [isMounted]);

  return (
    <div className="relative">
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

      <Navigation />

      <main className="relative">
        <section id="home"><Hero /></section>
        <section id="products"><ProductShowcase /></section>
        <section id="story"><BrandStory /></section>
        <section id="science"><ScienceInnovation /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><CTA /></section>
      </main>

      {isMounted && (
        <>
          <ScrollToTop lenisRef={lenisRef} />
          <CursorEffect />
        </>
      )}
    </div>
  );
};

const ScrollToTop = ({
  lenisRef,
}: {
  lenisRef: React.MutableRefObject<Lenis | null>;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onClick = () => {
    lenisRef.current?.scrollTo(0);
  };

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

const CursorEffect = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if it's desktop after component mounts
    setIsDesktop(window.innerWidth > 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = document.createElement('div');
    const follower = document.createElement('div');

    cursor.className = 'fixed w-2 h-2 bg-rose-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100';
    follower.className = 'fixed w-8 h-8 border border-rose-300 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300';

    document.body.append(cursor, follower);

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 4}px`;
      cursor.style.top = `${e.clientY - 4}px`;
      setTimeout(() => {
        follower.style.left = `${e.clientX - 16}px`;
        follower.style.top = `${e.clientY - 16}px`;
      }, 50);
    };

    const enter = () => {
      cursor.style.transform = 'scale(1.5)';
      follower.style.transform = 'scale(1.5)';
    };
    const leave = () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('button, a, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      cursor.remove();
      follower.remove();
    };
  }, [isDesktop]);

  return null;
};

export default Home;