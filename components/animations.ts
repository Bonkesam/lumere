import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation utilities and configurations
export const animations = {
  // Parallax Depth Layering
  parallaxDepth: (element: string, speed: number = 0.5) => {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Reveal on Scroll with Staggered Elements
  staggeredReveal: (elements: string, delay: number = 0.1) => {
    gsap.fromTo(elements, 
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: delay,
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Morphing Text Animation
  morphText: (element: string, texts: string[], duration: number = 2) => {
    const el = document.querySelector(element);
    if (!el) return;
    
    let currentIndex = 0;
    const tl = gsap.timeline({ repeat: -1 });
    
    texts.forEach((text, index) => {
      tl.to(el, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        ease: "power2.inOut",
        onComplete: () => {
          el.textContent = text;
        }
      })
      .to(el, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.inOut"
      })
      .to({}, { duration: duration });
    });
    
    return tl;
  },

  // Number Counter Animation
  counterAnimation: (element: string, endValue: number, duration: number = 2) => {
    const el = document.querySelector(element);
    if (!el) return;
    
    gsap.fromTo({ value: 0 }, 
      { value: endValue, duration, ease: "power2.out" },
      {
        onUpdate: function() {
          el.textContent = Math.round(this.targets()[0].value).toLocaleString();
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Horizontal Scroll Section
  horizontalScroll: (container: string, items: string) => {
    const containerEl = document.querySelector(container);
    const itemsEl = document.querySelectorAll(items);
    
    if (!containerEl || !itemsEl.length) return;
    
    const totalWidth = Array.from(itemsEl).reduce((acc, item) => acc + (item as HTMLElement).offsetWidth, 0);
    
    gsap.to(items, {
      xPercent: -100 * (itemsEl.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (itemsEl.length - 1),
        end: `+=${totalWidth}`,
      }
    });
  },

  // Magnetic Hover Effect
  magneticHover: (element: string, strength: number = 0.3) => {
    const el = document.querySelector(element) as HTMLElement;
    if (!el) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
  },

  // Clip Path Reveal
  clipPathReveal: (element: string, direction: 'left' | 'right' | 'top' | 'bottom' = 'left') => {
    const clipPaths = {
      left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
      right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0)' },
      top: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
      bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' }
    };
    
    gsap.fromTo(element,
      { clipPath: clipPaths[direction].from },
      {
        clipPath: clipPaths[direction].to,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Text Scramble Effect
  textScramble: (element: string, finalText: string, duration: number = 2) => {
    const el = document.querySelector(element);
    if (!el) return;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const originalText = finalText;
    let iteration = 0;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.to({}, {
      duration: duration,
      ease: "none",
      onUpdate: function() {
        const progress = this.progress();
        const scrambledText = originalText
          .split('')
          .map((char, index) => {
            if (index < progress * originalText.length) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        el.textContent = scrambledText;
      },
      onComplete: () => {
        el.textContent = originalText;
      }
    });
  },

  // Image Sequence Scroll
  imageSequence: (canvas: string, imageUrls: string[]) => {
    const canvasEl = document.querySelector(canvas) as HTMLCanvasElement;
    if (!canvasEl) return;
    
    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;
    
    const images: HTMLImageElement[] = [];
    let imagesLoaded = 0;
    
    // Preload images
    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imageUrls.length) {
          startAnimation();
        }
      };
      img.src = url;
      images[index] = img;
    });
    
    const startAnimation = () => {
      gsap.to({ frame: 0 }, {
        frame: images.length - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: canvas,
          start: "top center",
          end: "bottom center",
          scrub: true
        },
        onUpdate: function() {
          const frame = Math.round(this.targets()[0].frame);
          const img = images[frame];
          if (img) {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            ctx.drawImage(img, 0, 0, canvasEl.width, canvasEl.height);
          }
        }
      });
    };
  },

  // Smooth Scroll Setup
  smoothScroll: () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth scrolling for the entire page
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollBehavior: "smooth"
    });
  },

  // Initialize all animations
  init: () => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Set up smooth scrolling
      gsap.config({
        force3D: true,
        nullTargetWarn: false
      });
      
      // Refresh ScrollTrigger on window resize
      window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
    }
  }
};

// Export individual animation functions for easy importing
export const {
  parallaxDepth,
  staggeredReveal,
  morphText,
  counterAnimation,
  horizontalScroll,
  magneticHover,
  clipPathReveal,
  textScramble,
  imageSequence,
  smoothScroll
} = animations;