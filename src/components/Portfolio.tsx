import { useState } from "react";
// Book Covers
import BAZAAR_COVER from "@/assets/demo/book_cover/BAZAAR_COVER.png";
import Fashine_3 from "@/assets/demo/book_cover/Fashine_3.png";
import fasine from "@/assets/demo/book_cover/fasine.png";
import fasion_2 from "@/assets/demo/book_cover/fasion_2.png";
import Fasion_3 from "@/assets/demo/book_cover/Fasion_3.png";
import Fasion_book_cover from "@/assets/demo/book_cover/Fasion_book_cover.png";

// Logos
import Bird_tranprent_logo from "@/assets/demo/Logo/Bird_tranprent_logo.png";
import Crow_design_logo from "@/assets/demo/Logo/Crow_design_logo.png";
import gold_logo from "@/assets/demo/Logo/gold logo.jpg";
import HDFC_bank_logo from "@/assets/demo/Logo/HDFC_bank_logo.png";
import Maan_logo1 from "@/assets/demo/Logo/Maan_logo1.png";
import Ranjith_logo from "@/assets/demo/Logo/Ranjith_logo.png!.png";
import SDR_LOGO4 from "@/assets/demo/Logo/SDR-LOGO4.png";
import Suresh_logo from "@/assets/demo/Logo/Suresh_logo.png";
import Techacode_3sixe from "@/assets/demo/Logo/Techacode_3sixe.png";
import The_seen_Eagle_Logo from "@/assets/demo/Logo/The_seen_Eagle_Logo.3.png";
import The_seen_self_Logo2 from "@/assets/demo/Logo/The_seen_self_Logo..2.png";
import The_seen_self_Logo from "@/assets/demo/Logo/The_seen_self_Logo..png";

// Magazines
import first_asinment2 from "@/assets/demo/Mazine/1first_asinment2.png";
import Assignment2 from "@/assets/demo/Mazine/2Assignment2.png";
import AI_Book from "@/assets/demo/Mazine/AI_Book.png";
import Building_layers from "@/assets/demo/Mazine/Building_layers.png";
import Natural_book2 from "@/assets/demo/Mazine/Natural_book2.png";
import Natural_book3 from "@/assets/demo/Mazine/Natural_book3.png";
import Natural_book4 from "@/assets/demo/Mazine/Natural_book4.png";
import Natural_book5 from "@/assets/demo/Mazine/Natural_book5.png";
import Story2 from "@/assets/demo/Mazine/Story2.png";

// Posters
import Boating_poster from "@/assets/demo/posters/Boating_poster.png";
import Chicken_Flyer from "@/assets/demo/posters/Chicken_Flyer.png";
import Fasion_4 from "@/assets/demo/posters/Fasion_4.png";
import Penquen_Logo from "@/assets/demo/posters/Penquen_Logo.png";
import Saloo_Flyer from "@/assets/demo/posters/Saloo_Flyer.png";
import Samosa_posters from "@/assets/demo/posters/Samosa_posters.png";
import Shoe_add_2 from "@/assets/demo/posters/Shoe_add_2.png";
import Shoe_add_3 from "@/assets/demo/posters/Shoe_add_3.png";
import Shoe_add from "@/assets/demo/posters/Shoe_add.png";
import SOFA_FLYER from "@/assets/demo/posters/SOFA_FLYER.png";
import Sofa_poster_2 from "@/assets/demo/posters/Sofa_poster_2.png";
import Sofa_poster from "@/assets/demo/posters/Sofa_poster.png";
import South_indan_poster from "@/assets/demo/posters/South_indan_poster.png";
import Sprite_image from "@/assets/demo/posters/Sprite_image.png";
import Tennis_Typographi from "@/assets/demo/posters/Tennis_Typographi.png";
import Travel_Flyer from "@/assets/demo/posters/Travel_Flyer.png";

import { useRef } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const modalRef = useRef(null);

  const portfolioItems = [
    // Book Covers
    { id: 1, category: "book-covers", image: BAZAAR_COVER, title: "Bazaar Cover" },
    { id: 2, category: "book-covers", image: Fashine_3, title: "Fashine 3" },
    { id: 3, category: "book-covers", image: fasine, title: "Fasine" },
    { id: 4, category: "book-covers", image: fasion_2, title: "Fasion 2" },
    { id: 5, category: "book-covers", image: Fasion_3, title: "Fasion 3" },
    { id: 6, category: "book-covers", image: Fasion_book_cover, title: "Fasion Book Cover" },

    // Logos
    { id: 7, category: "logos", image: Bird_tranprent_logo, title: "Bird Transparent Logo" },
    { id: 8, category: "logos", image: Crow_design_logo, title: "Crow Design Logo" },
    { id: 9, category: "logos", image: gold_logo, title: "Gold Logo" },
    { id: 10, category: "logos", image: HDFC_bank_logo, title: "HDFC Bank Logo" },
    { id: 11, category: "logos", image: Maan_logo1, title: "Maan Logo" },
    { id: 12, category: "logos", image: Ranjith_logo, title: "Ranjith Logo" },
    { id: 13, category: "logos", image: SDR_LOGO4, title: "SDR Logo" },
    { id: 14, category: "logos", image: Suresh_logo, title: "Suresh Logo" },
    { id: 15, category: "logos", image: Techacode_3sixe, title: "Techacode 3sixe" },
    { id: 16, category: "logos", image: The_seen_Eagle_Logo, title: "The Seen Eagle Logo" },
    { id: 17, category: "logos", image: The_seen_self_Logo2, title: "The Seen Self Logo 2" },
    { id: 18, category: "logos", image: The_seen_self_Logo, title: "The Seen Self Logo" },

    // Magazines
    { id: 19, category: "magazines", image: first_asinment2, title: "First Assignment 2" },
    { id: 20, category: "magazines", image: Assignment2, title: "Assignment 2" },
    { id: 21, category: "magazines", image: AI_Book, title: "AI Book" },
    { id: 22, category: "magazines", image: Building_layers, title: "Building Layers" },
    { id: 23, category: "magazines", image: Natural_book2, title: "Natural Book 2" },
    { id: 24, category: "magazines", image: Natural_book3, title: "Natural Book 3" },
    { id: 25, category: "magazines", image: Natural_book4, title: "Natural Book 4" },
    { id: 26, category: "magazines", image: Natural_book5, title: "Natural Book 5" },
    { id: 27, category: "magazines", image: Story2, title: "Story 2" },

    // Posters
    { id: 28, category: "posters", image: Boating_poster, title: "Boating Poster" },
    { id: 29, category: "posters", image: Chicken_Flyer, title: "Chicken Flyer" },
    { id: 30, category: "posters", image: Fasion_4, title: "Fasion 4" },
    { id: 31, category: "posters", image: Penquen_Logo, title: "Penguin Logo" },
    { id: 32, category: "posters", image: Saloo_Flyer, title: "Saloo Flyer" },
    { id: 33, category: "posters", image: Samosa_posters, title: "Samosa Posters" },
    { id: 34, category: "posters", image: Shoe_add_2, title: "Shoe Add 2" },
    { id: 35, category: "posters", image: Shoe_add_3, title: "Shoe Add 3" },
    { id: 36, category: "posters", image: Shoe_add, title: "Shoe Add" },
    { id: 37, category: "posters", image: SOFA_FLYER, title: "Sofa Flyer" },
    { id: 38, category: "posters", image: Sofa_poster_2, title: "Sofa Poster 2" },
    { id: 39, category: "posters", image: Sofa_poster, title: "Sofa Poster" },
    { id: 40, category: "posters", image: South_indan_poster, title: "South Indian Poster" },
    { id: 41, category: "posters", image: Sprite_image, title: "Sprite Image" },
    { id: 42, category: "posters", image: Tennis_Typographi, title: "Tennis Typography" },
    { id: 43, category: "posters", image: Travel_Flyer, title: "Travel Flyer" },
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

  const openModal = (img, title) => {
    setModalImg(img);
    setModalTitle(title);
    setModalOpen(true);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.classList.add("scale-in");
      }
    }, 10);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.classList.remove("scale-in");
      }
    }, 300);
  };

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
              className="portfolio-image glass-card p-4 animate-bounce-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openModal(item.image, item.title)}
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

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={closeModal}
          >
            <div
              ref={modalRef}
              className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center scale-90 opacity-0 transition-transform transition-opacity duration-300"
              style={{ animation: 'none' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-primary font-bold z-10"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={modalImg}
                alt={modalTitle}
                className="max-h-[70vh] w-auto rounded-xl shadow-lg animate-img-pop"
                style={{ objectFit: 'contain' }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{modalTitle}</h3>
              </div>
            </div>
          </div>
        )}

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


// Animations (add to your global CSS or tailwind config if not present)
// .scale-in { opacity: 1 !important; transform: scale(1) !important; transition: all 0.3s cubic-bezier(.4,2,.6,1); }
// .animate-img-pop { animation: img-pop 0.4s cubic-bezier(.4,2,.6,1); }
// @keyframes img-pop { 0% { transform: scale(0.7); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

export default Portfolio;