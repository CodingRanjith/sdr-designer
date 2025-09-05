import profileImg from "@/assets/profile.png";
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image Only */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="relative w-100 h-100 md:w-150 md:h-150 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#6a5af9]/60 to-[#a685fa]/40 shadow-2xl">
              <img src={profileImg} alt="Profile" className="w-100 h-100 md:w-150 md:h-120 z-10" />
            </div>
          </div>
          {/* Right: About Content */}
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
        </div>
  </div>
    </section>
  );
};

export default About;