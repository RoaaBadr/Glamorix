import React from "react";
import { FaStar } from "react-icons/fa";
import useTheme from "../../Hooks/useTheme";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Amazing Product Quality",
      body: "The products exceeded my expectations. My skin has never felt better.",
      name: "Sarah Johnson",
      date: "March 15, 2023",
      rating: 5
    },
    {
      id: 2,
      title: "Fast Delivery",
      body: "I was impressed by how quickly my order arrived. Packaging was beautiful.",
      name: "Michael Chen",
      date: "February 28, 2023",
      rating: 4
    },
    {
      id: 3,
      title: "Excellent Service",
      body: "Support team resolved my issue immediately. Very professional attitude.",
      name: "Emily Rodriguez",
      date: "April 2, 2023",
      rating: 5
    }
  ];
  const { theme } = useTheme();

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-base-content">
          <div className="divider">What our Clients Say</div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`bg-base-100 p-8 rounded-3xl border ${theme === 'night' ? 'border-neutral' : 'border-base-300'} shadow-lg`}>
              {/* Star Rating */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={i < testimonial.rating ? "text-yellow-400" : "text-base-300"}
                  />
                ))}
              </div>
              
              <h3 className="font-bold text-lg mb-2 text-base-content">{testimonial.title}</h3>
              <p className="text-base-content mb-6 leading-relaxed">{testimonial.body}</p>
              
              <div className="space-y-1">
                <p className="font-medium text-base-content">{testimonial.name}</p>
                <p className="text-base-content/70 text-sm">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;