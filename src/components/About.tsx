import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-bounce-in">
              <h2 className="text-5xl font-black mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
            </div>

            <div className="animate-bounce-in space-y-6" style={{animationDelay: '0.2s'}}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Surendar B is a budding graphic designer who completed his 10th grade and is currently 
                pursuing design courses, with plans to take up a diploma next. Passionate about creativity and visual 
                arts, he stays active with morning workouts and enjoys movies in his free time.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                His goal is to grow into senior roles in the design industry and create impactful work 
                that helps businesses stand out and connect with their audience.
              </p>
            </div>

            <div className="animate-bounce-in" style={{animationDelay: '0.4s'}}>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="glow-border glass-card hover:scale-105 transition-all duration-300 water-ripple"
              >
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-bounce-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="glass-card card-3d p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
                  <span className="text-foreground/70">Currently Learning</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Graphic Design</span>
                    <span className="text-primary font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Brand Identity</span>
                    <span className="text-secondary font-semibold">Intermediate</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full w-3/5 transition-all duration-1000"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Digital Marketing</span>
                    <span className="text-accent font-semibold">Learning</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full w-2/5 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;