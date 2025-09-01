import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="parallax-element absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="parallax-element absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="parallax-element absolute top-1/2 left-3/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="parallax-element animate-bounce-in">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="gradient-text">SURENDAR B</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground/90">
            SDR_DESIGNER
          </h2>
        </div>
        
        <div className="parallax-element animate-bounce-in" style={{animationDelay: '0.2s'}}>
          <p className="text-xl md:text-2xl mb-12 text-foreground/80 max-w-4xl mx-auto">
            "Where creativity meets clarity. Unleash your brand's visual potential."
          </p>
        </div>

        <div className="parallax-element animate-bounce-in flex flex-col sm:flex-row gap-6 justify-center" style={{animationDelay: '0.4s'}}>
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
        <div className="parallax-element absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce-in" style={{animationDelay: '0.6s'}}>
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