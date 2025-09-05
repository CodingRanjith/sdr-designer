import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

interface Ripple {
  x: number;
  y: number;
  id: number;
}


const COLORS = [
  "#f472b6", // pink
  "#60a5fa", // blue
  "#facc15", // yellow
  "#34d399", // green
  "#a78bfa", // purple
  "#fb7185", // rose
  "#38bdf8", // sky
];

interface Bubble {
  x: number;
  y: number;
  color: string;
  size: number;
  id: number;
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  // Multiple trailing bubbles following the cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setBubbles(prev => {
        const newBubble: Bubble = {
          x,
          y,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 40 + Math.random() * 40,
          id: Date.now() + Math.random(),
        };
        // Keep only the last 8 bubbles for a trailing effect
        return [...prev.slice(-7), newBubble];
      });
    };
    const current = heroRef.current;
    if (current) {
      current.addEventListener('mousemove', handleMouseMove);
      return () => current.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseRef.current = { x, y };
      
      // 3D parallax effect
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el, index) => {
        const depth = (index + 1) * 0.5;
        const moveX = (x - 0.5) * depth * 50;
        const moveY = (y - 0.5) * depth * 50;
        
        (el as HTMLElement).style.transform = 
          `translate(${moveX}px, ${moveY}px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * 10}deg)`;
      });
    };

    const current = heroRef.current;
    if (current) {
      current.addEventListener('mousemove', handleMouseMove);
      return () => current.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Water ripple click effect
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple: Ripple = {
        x,
        y,
        id: Date.now() + Math.random()
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
    };

    const current = heroRef.current;
    if (current) {
      current.addEventListener('click', handleClick);
      return () => current.removeEventListener('click', handleClick);
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
  {/* Background elements removed for static text */}


      {/* Mouse-following colorful bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="pointer-events-none fixed z-30"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            background: bubble.color,
            opacity: 0.18,
            borderRadius: '50%',
            filter: 'blur(10px)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            transition: 'left 0.12s, top 0.12s, background 0.2s',
          }}
        />
      ))}

      {/* Water ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="water-ripple-click"></div>
        </div>
      ))}


      {/* Hero content - static, no text animation */}
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <span className="gradient-text">SURENDAR B</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground/90">
          SDR_DESIGNER
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-foreground/80 max-w-4xl mx-auto">
          "Where creativity meets clarity. Unleash your brand's visual potential."
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            onClick={scrollToWorks}
            size="lg"
            className="glow-border glass-card hover:scale-105 transition-all duration-300 water-ripple text-lg px-8 py-4"
          >
            View My Work
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg" 
            className="glow-border glass-card hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
          >
            Hire Me
          </Button>
        </div>
        {/* Floating taglines */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
            <span className="glass-card px-4 py-2 rounded-full">Innovate. Create. Captivate.</span>
            <span className="glass-card px-4 py-2 rounded-full">Make your mark with style!</span>
            <span className="glass-card px-4 py-2 rounded-full">Pixels that Pop!</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;