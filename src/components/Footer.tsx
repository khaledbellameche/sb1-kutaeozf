import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Car, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">ADS Mobile Auto Spa</span>
            </div>
            <p className="text-slate-300 mb-6">
              Professional mobile auto detailing services that come to you. Our goal is to provide 
              the highest quality detailing experience with maximum convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('#home')}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#about')}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#services')}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#reviews')}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 hover:text-blue-400 transition-colors">
                <button onClick={() => handleNavClick('#services')}>Basic Wash & Wax</button>
              </li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors">
                <button onClick={() => handleNavClick('#services')}>Premium Detail Package</button>
              </li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors">
                <button onClick={() => handleNavClick('#services')}>Executive Detail</button>
              </li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors">
                <button onClick={() => handleNavClick('#services')}>Interior Detailing</button>
              </li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors">
                <button onClick={() => handleNavClick('#services')}>Ceramic Coating</button>
              </li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors">
                <button onClick={() => handleNavClick('#services')}>Paint Correction</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-slate-300">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-slate-300">info@adsmobileautospa.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-slate-300">Greater Phoenix Metropolitan Area</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div className="text-slate-300">
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat: 9am - 4pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ADS Mobile Auto Spa. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-blue-400 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;