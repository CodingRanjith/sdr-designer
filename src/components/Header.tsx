import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/su_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="SDR Logo" className="max-h-12 h-auto w-56 object-contain" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("skills")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection("works")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            My Works
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="glow-border glass-card hover:scale-105 transition-all duration-300"
          variant="outline"
        >
          Hire Me
        </Button>
      </nav>
    </header>
  );
};

export default Header;