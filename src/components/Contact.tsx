import { useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Hi Surendar,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`;
    const mailtoLink = `mailto:surendarb799@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-5xl font-black mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            I specialize in designing logos, branding, posters, social media creatives and brochures, 
            that help businesses stand out and connect with their audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-card border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-card border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass-card border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full glow-border glass-card hover:scale-105 transition-all duration-300 water-ripple"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-bounce-in" style={{animationDelay: '0.4s'}}>
            <div className="glass-card card-3d p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-foreground/70">6383528117</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-foreground/70">surendarb799@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a 
                      href="https://www.instagram.com/sdr_designer25/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-glow transition-colors"
                    >
                      @sdr_designer25
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-xl font-bold mb-4">Project Types</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Startup Branding",
                  "Social Media Design", 
                  "Print Design",
                  "Logo Creation",
                  "Marketing Materials",
                  "Brand Guidelines"
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="glass-card p-4 text-center text-sm font-medium hover:scale-105 transition-all duration-300"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;