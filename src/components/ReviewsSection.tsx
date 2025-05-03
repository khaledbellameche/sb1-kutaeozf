import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewProps {
  name: string;
  rating: number;
  date: string;
  comment: string;
  image?: string;
}

const Review: React.FC<ReviewProps> = ({ name, rating, date, comment, image }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
    />
  ));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden mr-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-lg font-semibold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-slate-900">{name}</h3>
          <p className="text-slate-500 text-sm">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {stars}
      </div>
      
      <p className="text-slate-700 flex-grow">{comment}</p>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      name: "Michael R.",
      rating: 5,
      date: "June 15, 2024",
      comment: "Absolutely amazing service! My car looks better than when I bought it. The team was professional, on time, and paid attention to every detail."
    },
    {
      name: "Sarah J.",
      rating: 5,
      date: "May 22, 2024",
      comment: "I was blown away by the results. The convenience of having them come to my home made the experience even better. Highly recommended!"
    },
    {
      name: "David L.",
      rating: 4,
      date: "April 10, 2024",
      comment: "Great service at a reasonable price. They were thorough and my car looks fantastic. Will definitely use their services again."
    },
    {
      name: "Jennifer T.",
      rating: 5,
      date: "March 5, 2024",
      comment: "The Premium Detail package was worth every penny. My 5-year-old car looks brand new again. The team was friendly and professional."
    },
    {
      name: "Robert K.",
      rating: 5,
      date: "February 18, 2024",
      comment: "I've tried several mobile detailing services, and ADS Mobile Auto Spa is by far the best. Their attention to detail is remarkable."
    },
    {
      name: "Emily W.",
      rating: 4,
      date: "January 29, 2024",
      comment: "Very convenient service with great results. They were able to remove stains I thought would be permanent. Will use them again!"
    }
  ];
  
  const reviewsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };
  
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide.desktop);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Customer Reviews</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about our detailing services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {/* Mobile View (1 review at a time) */}
              <div className="w-full flex-shrink-0 md:hidden px-4">
                {reviews.map((review, index) => (
                  <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
                    <Review {...review} />
                  </div>
                ))}
              </div>
              
              {/* Tablet View (2 reviews at a time) */}
              <div className="hidden md:flex lg:hidden w-full flex-shrink-0">
                {Array.from({ length: Math.ceil(reviews.length / reviewsPerSlide.tablet) }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex} 
                    className="w-full flex-shrink-0 grid grid-cols-2 gap-6 px-4"
                  >
                    {reviews
                      .slice(slideIndex * reviewsPerSlide.tablet, (slideIndex + 1) * reviewsPerSlide.tablet)
                      .map((review, reviewIndex) => (
                        <Review key={slideIndex * reviewsPerSlide.tablet + reviewIndex} {...review} />
                      ))}
                  </div>
                ))}
              </div>
              
              {/* Desktop View (3 reviews at a time) */}
              <div className="hidden lg:flex w-full flex-shrink-0">
                {Array.from({ length: Math.ceil(reviews.length / reviewsPerSlide.desktop) }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex} 
                    className="w-full flex-shrink-0 grid grid-cols-3 gap-6 px-4"
                  >
                    {reviews
                      .slice(slideIndex * reviewsPerSlide.desktop, (slideIndex + 1) * reviewsPerSlide.desktop)
                      .map((review, reviewIndex) => (
                        <Review key={slideIndex * reviewsPerSlide.desktop + reviewIndex} {...review} />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <button 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-slate-700 hover:text-blue-600 focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-slate-700 hover:text-blue-600 focus:outline-none"
            onClick={nextSlide}
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-500' : 'bg-slate-300'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;