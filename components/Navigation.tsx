'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { staggeredReveal, magneticHover } from './animations';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Products', href: '#products' },
    { name: 'Science', href: '#science' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    magneticHover('.burger-button', 0.2);
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      
      setTimeout(() => {
        gsap.fromTo(overlayRef.current,
          { 
            clipPath: 'circle(0% at 100% 0%)',
            opacity: 0 
          },
          { 
            clipPath: 'circle(150% at 100% 0%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power4.inOut'
          }
        );

        setTimeout(() => {
          staggeredReveal('.menu-item', 0.1);
        }, 600);

        gsap.to('.burger-line-1', {
          rotation: 45,
          y: 8,
          duration: 0.3,
          ease: 'power2.inOut'
        });
        gsap.to('.burger-line-2', {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut'
        });
        gsap.to('.burger-line-3', {
          rotation: -45,
          y: -8,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      }, 0);
    } else {
      gsap.to(overlayRef.current, {
        clipPath: 'circle(0% at 100% 0%)',
        opacity: 0,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => setIsMenuOpen(false)
      });

      gsap.to('.burger-line-1', {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      gsap.to('.burger-line-2', {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.inOut'
      });
      gsap.to('.burger-line-3', {
        rotation: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-light tracking-[0.3em] text-stone-900">
            LUMIÈRE
          </div>

          {/* Burger Menu Button */}
          <button
            ref={burgerRef}
            onClick={toggleMenu}
            className="burger-button relative w-10 h-10 flex flex-col justify-center items-center space-y-1.5 cursor-pointer group"
            aria-label="Toggle menu"
          >
            <span className="burger-line-1 block w-6 h-0.5 bg-stone-900 transition-colors duration-300 group-hover:bg-rose-500"></span>
            <span className="burger-line-2 block w-6 h-0.5 bg-stone-900 transition-colors duration-300 group-hover:bg-rose-500"></span>
            <span className="burger-line-3 block w-6 h-0.5 bg-stone-900 transition-colors duration-300 group-hover:bg-rose-500"></span>
          </button>
        </div>
      </nav>

      {/* Full Page Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 bg-gradient-to-br from-slate-50 to-slate-100"
          style={{ clipPath: 'circle(0% at 100% 0%)' }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,100,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          </div>

          {/* Menu Content - Split Layout */}
          <div
            ref={menuItemsRef}
            className="relative h-full flex flex-col md:flex-row"
          >
            {/* Left Column - Menu Items (Left Aligned) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 py-16">
              <div className="space-y-4 md:space-y-4 pt-5">
                {menuItems.map((item) => (
                  <div key={item.name} className="menu-item opacity-0">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu();
                      }}
                      className="group block text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-500 transition-all duration-700 tracking-wide uppercase"
                    >
                      {item.name}
                      <div className="w-0 h-px bg-gradient-to-r from-rose-500 to-amber-500 group-hover:w-full transition-all duration-700 mt-2 md:mt-3"></div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact & Socials (Right Aligned) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-end pr-8 md:pr-16 lg:pr-24 py-16">
              <div className="flex flex-col items-end">
                {/* Contact Information */}
                <div className="menu-item opacity-0 space-y-4 md:space-y-6 mb-12">
                  <div className="text-slate-500 font-light tracking-[0.2em] text-xs md:text-sm uppercase">
                    Connect With Us
                  </div>
                  <div className="flex flex-col items-end text-slate-700 space-y-3">
                    <a 
                      href="mailto:hello@lumiere.com" 
                      className="hover:text-rose-500 transition-colors duration-300 tracking-wide text-base md:text-lg"
                    >
                      hello@lumiere.com
                    </a>
                    <a 
                      href="tel:+1234567890" 
                      className="hover:text-rose-500 transition-colors duration-300 tracking-wide text-base md:text-lg"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="menu-item opacity-0 flex flex-col items-end space-y-6 mt-8">
                  <div className="text-slate-500 font-light tracking-[0.2em] text-xs md:text-sm uppercase">
                    Follow Us
                  </div>
                  <div className="flex space-x-8">
                    {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-slate-500 hover:text-rose-500 transition-colors duration-300 font-light tracking-[0.15em] text-xs md:text-sm uppercase"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;