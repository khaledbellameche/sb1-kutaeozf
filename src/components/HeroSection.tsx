import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-slate-900"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          filter: "brightness(0.4)"
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Premium Mobile <span className="text-blue-500">Auto Detailing</span> Services
        </h1>
        
        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
          Professional auto detailing that comes to you. We bring the spa experience to your vehicle, wherever you are.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => handleScroll('#services')}
          >
            Our Services
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white/10"
            onClick={() => handleScroll('#contact')}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          className="text-white focus:outline-none" 
          onClick={() => handleScroll('#about')}
          aria-label="Scroll down"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;