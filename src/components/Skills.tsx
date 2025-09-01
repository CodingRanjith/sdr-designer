const Skills = () => {
  const skillCategories = [
    {
      title: "Branding & Identity Design",
      skills: ["Logo design", "Business cards", "Letterheads & stationery", "Brand guidelines"],
      color: "primary"
    },
    {
      title: "Digital & Social Media Design", 
      skills: ["Instagram / Facebook / LinkedIn posts", "Social media ads", "YouTube thumbnails", "Website banners", "Infographics"],
      color: "secondary"
    },
    {
      title: "Marketing & Advertising",
      skills: ["Digital ads (Google, Meta)", "Email newsletters", "Landing pages", "Presentation decks (PowerPoint, Keynote)"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-5xl font-black mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Specialized in creating impactful designs that help businesses stand out and connect with their audience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card card-3d p-8 animate-bounce-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center 
                ${category.color === 'primary' ? 'bg-primary/20' : 
                  category.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20'}`}>
                <div className={`w-8 h-8 rounded-lg 
                  ${category.color === 'primary' ? 'bg-primary' : 
                    category.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
              </div>

              <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full 
                      ${category.color === 'primary' ? 'bg-primary' : 
                        category.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-16 text-center animate-bounce-in" style={{animationDelay: '0.6s'}}>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Core Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Logo Design", "Poster Design", "Banner Design", "Brand Identity Packages"].map((service, index) => (
                <span 
                  key={index}
                  className="glass-card px-6 py-3 rounded-full text-sm font-medium glow-border hover:scale-105 transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;