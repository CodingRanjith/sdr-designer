import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 glass-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">SDR_DESIGNER</h3>
            <p className="text-foreground/70">
              Where creativity meets clarity. Creating impactful designs that help businesses 
              stand out and connect with their audience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "My Works", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase().replace(" ", ""))?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              {["Logo Design", "Brand Identity", "Poster Design", "Social Media Design"].map((service) => (
                <div key={service} className="text-foreground/70">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 SDR_DESIGNER. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/sdr_designer25/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
            <a 
              href="mailto:surendarb799@gmail.com"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="tel:6383528117" className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              6383528117
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;