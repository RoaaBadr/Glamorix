import React from 'react';
import { useNavigate } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

const About = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        {/* Image  */}
        <div className="relative h-80 w-full md:order-2">
          <img 
            src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1744729017~exp=1744732617~hmac=eea6fe2910192cb71e5811197087a70d47983ddc6290ad9ab118dfbf77c387e1&w=1380" 
            alt="About Danglia"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="space-y-6 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content">ABOUT US</h2>
          
          <p className="text-lg text-base-content leading-relaxed">
            And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. 
            Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh 
            expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence 
            partiality estimating terminated day everything.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/products')} 
              className={`px-8 py-4 rounded-none cursor-pointer transition-colors ${
                theme === 'night' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/aboutus')} 
              className={`px-8 py-4 rounded-none cursor-pointer transition-colors ${
                theme === 'night' ? 'border border-white text-white hover:bg-gray-800' : 'border border-black text-black hover:bg-gray-100'
              }`}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;