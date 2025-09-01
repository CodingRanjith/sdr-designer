import { useState } from "react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import logo1 from "@/assets/logo-1.jpg";
import magazine1 from "@/assets/magazine-1.jpg";
import poster1 from "@/assets/poster-1.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    // Book Covers
    { id: 1, category: "book-covers", image: bookCover1, title: "Fashion Book Cover" },
    { id: 2, category: "book-covers", image: bookCover1, title: "Bazaar Cover Design" },
    { id: 3, category: "book-covers", image: bookCover1, title: "Modern Book Layout" },
    { id: 4, category: "book-covers", image: bookCover1, title: "Creative Typography" },
    { id: 5, category: "book-covers", image: bookCover1, title: "Elegant Design" },
    { id: 6, category: "book-covers", image: bookCover1, title: "Professional Cover" },

    // Logos
    { id: 7, category: "logos", image: logo1, title: "Brand Identity Logo" },
    { id: 8, category: "logos", image: logo1, title: "Corporate Design" },
    { id: 9, category: "logos", image: logo1, title: "Modern Logo" },
    { id: 10, category: "logos", image: logo1, title: "Creative Branding" },
    { id: 11, category: "logos", image: logo1, title: "Eagle Logo Design" },
    { id: 12, category: "logos", image: logo1, title: "Tech Company Logo" },
    { id: 13, category: "logos", image: logo1, title: "Minimalist Design" },
    { id: 14, category: "logos", image: logo1, title: "Business Identity" },
    { id: 15, category: "logos", image: logo1, title: "Professional Logo" },
    { id: 16, category: "logos", image: logo1, title: "Creative Mark" },
    { id: 17, category: "logos", image: logo1, title: "Brand Symbol" },
    { id: 18, category: "logos", image: logo1, title: "Logo Design" },

    // Magazines
    { id: 19, category: "magazines", image: magazine1, title: "Editorial Layout" },
    { id: 20, category: "magazines", image: magazine1, title: "Magazine Design" },
    { id: 21, category: "magazines", image: magazine1, title: "Creative Layout" },
    { id: 22, category: "magazines", image: magazine1, title: "Modern Editorial" },
    { id: 23, category: "magazines", image: magazine1, title: "Typography Focus" },
    { id: 24, category: "magazines", image: magazine1, title: "Visual Storytelling" },
    { id: 25, category: "magazines", image: magazine1, title: "Clean Design" },
    { id: 26, category: "magazines", image: magazine1, title: "Professional Layout" },
    { id: 27, category: "magazines", image: magazine1, title: "Creative Magazine" },

    // Posters
    { id: 28, category: "posters", image: poster1, title: "Event Poster" },
    { id: 29, category: "posters", image: poster1, title: "Promotional Design" },
    { id: 30, category: "posters", image: poster1, title: "Creative Poster" },
    { id: 31, category: "posters", image: poster1, title: "Brand Campaign" },
    { id: 32, category: "posters", image: poster1, title: "Typography Poster" },
    { id: 33, category: "posters", image: poster1, title: "Visual Campaign" },
    { id: 34, category: "posters", image: poster1, title: "Marketing Design" },
    { id: 35, category: "posters", image: poster1, title: "Creative Ad" },
    { id: 36, category: "posters", image: poster1, title: "Promotional Art" },
    { id: 37, category: "posters", image: poster1, title: "Design Campaign" },
    { id: 38, category: "posters", image: poster1, title: "Visual Identity" },
    { id: 39, category: "posters", image: poster1, title: "Creative Layout" },
    { id: 40, category: "posters", image: poster1, title: "Brand Poster" },
    { id: 41, category: "posters", image: poster1, title: "Marketing Visual" },
    { id: 42, category: "posters", image: poster1, title: "Advertising Design" },
    { id: 43, category: "posters", image: poster1, title: "Creative Expression" },
  ];

  const categories = [
    { id: "all", label: "All Works", count: portfolioItems.length },
    { id: "book-covers", label: "Book Covers", count: 6 },
    { id: "logos", label: "Logos", count: 12 },
    { id: "magazines", label: "Magazine Designs", count: 9 },
    { id: "posters", label: "Posters", count: 16 },
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-bounce-in">
          <p className="text-primary font-semibold mb-4">My Works</p>
          <h2 className="text-5xl font-black mb-6">
            Creative Designs That <span className="gradient-text">Leave a Mark</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore my creative journey: covers, logos, magazines, and posters. All images below are from my demo project folders.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-bounce-in" style={{animationDelay: '0.2s'}}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`glass-card px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id 
                  ? 'glow-border gradient-text' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="portfolio-image glass-card p-4 animate-bounce-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm capitalize">{item.category.replace('-', ' ')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-bounce-in" style={{animationDelay: '0.8s'}}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Like What You See?</h3>
            <p className="text-foreground/70 mb-6">
              Let's discuss your next project and bring your vision to life with stunning designs.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-card glow-border px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 water-ripple"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;