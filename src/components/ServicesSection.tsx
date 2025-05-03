import React, { useState } from 'react';
import Button from './Button';
import BookingModal from './BookingModal';

interface ServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  onBookNow: () => void;
}

const Service: React.FC<ServiceProps> = ({ title, description, price, features, popular = false, onBookNow }) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
        popular 
          ? 'border-2 border-blue-500 relative bg-white' 
          : 'bg-white'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <p className="text-3xl font-bold text-blue-600 mb-6">{price}</p>
        
        <ul className="mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start mb-3">
              <svg 
                className="w-5 h-5 text-green-500 mr-2 mt-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant={popular ? 'primary' : 'outline'} 
          className="w-full"
          onClick={onBookNow}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      title: "Basic Wash & Wax",
      description: "Essential exterior cleaning and protection",
      price: "$79",
      features: [
        "Exterior hand wash",
        "Wheel cleaning",
        "Tire dressing",
        "Hand wax application",
        "Window cleaning"
      ]
    },
    {
      title: "Premium Detail Package",
      description: "Comprehensive interior and exterior detailing",
      price: "$149",
      features: [
        "Everything in Basic Package",
        "Interior vacuum and wipe-down",
        "Leather/upholstery conditioning",
        "Clay bar treatment",
        "Premium carnauba wax",
        "Interior deodorizing"
      ],
      popular: true
    },
    {
      title: "Executive Detail",
      description: "The ultimate detailing experience",
      price: "$249",
      features: [
        "Everything in Premium Package",
        "Engine bay cleaning",
        "Paint correction",
        "Ceramic coating application",
        "Headlight restoration",
        "Premium interior shampoo",
        "Paint sealant"
      ]
    }
  ];

  const handleBookNow = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Detailing Services</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choose from our range of professional auto detailing packages designed to keep your vehicle
            looking its best, inside and out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
              popular={service.popular}
              onBookNow={() => handleBookNow(service.title)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
            We offer specialized detailing services tailored to your specific needs. Contact us for a custom quote.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => handleBookNow('Custom Service')}
          >
            Request a Custom Quote
          </Button>
        </div>

        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceName={selectedService}
        />
      </div>
    </section>
  );
};

export default ServicesSection;