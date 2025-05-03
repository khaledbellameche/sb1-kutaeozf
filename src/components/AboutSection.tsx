import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 bg-blue-100 rounded-full mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About ADS Mobile Auto Spa</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We bring the auto spa experience directly to your location, providing premium detailing services
            that transform your vehicle inside and out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className="rounded-lg overflow-hidden shadow-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img 
              src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional auto detailing" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Excellence</h3>
            <p className="text-slate-600 mb-6">
              At ADS Mobile Auto Spa, we're passionate about cars and dedicated to providing the highest quality
              mobile detailing services. Our team of experienced professionals uses only premium products and
              state-of-the-art equipment to ensure your vehicle receives the best care possible.
            </p>
            <p className="text-slate-600">
              What sets us apart is our attention to detail and convenience. We come to you, whether you're at home,
              work, or anywhere else, saving you valuable time while delivering exceptional results that will make
              your vehicle look showroom-ready.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            icon={<Shield size={28} />} 
            title="Quality Guaranteed" 
            description="We stand behind our work with a satisfaction guarantee on all our detailing services."
          />
          <Feature 
            icon={<Clock size={28} />} 
            title="Time-Saving Convenience" 
            description="We come to your location, saving you the time and hassle of taking your car to a shop."
          />
          <Feature 
            icon={<Award size={28} />} 
            title="Premium Products" 
            description="We use only high-quality, eco-friendly products that are safe for your vehicle and the environment."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;