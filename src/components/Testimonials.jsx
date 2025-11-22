import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Senier Developer ",
      image: "/Person1.jpg",
      feedback:
        "This product has significantly improved my workflow and productivity. Highly recommended!",
    },
    {
      name: "mark Smith",
      role: "CTO",
      image: "/Person2.jpg",
      feedback:
        "An exceptional service with top-notch support. It has transformed the way our team collaborates.",
    },
    {
      name: "Emily Davis",
      role: "Tech Lead",
      image: "/Person4.jpg",
      feedback:
        "A game-changer in our industry. The features and usability are unparalleled.",
    },
    {
      name: "David Wilson",
      role: "Product Manager",
      image: "/Person3.jpg",
      feedback:
        "The intuitive design and robust functionality have made this an essential tool for our projects.",
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* left side => Header */}
          <div className="lg:w-1/2  w-full text-center lg:text-left">
            <h2 className="text-4xl  sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4  sm:mb-6">
              What developers are saying about us
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
              Hear from our satisfied users who have transformed their
              development experience with our platform.
            </p>
          </div>
          {/* right side => Testimonials */}
          <div className="lg:w-1/2 w-full ">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 ">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        "
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonial.feedback}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full "
                        />
                        <div>
                          <h4 className="text-white font-semibold text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-sx sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
