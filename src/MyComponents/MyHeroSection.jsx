import React, { useState, useEffect } from 'react';
import product from '../assets/images/product.jpg';
import user from '../assets/images/user.jpg';
import vendor from '../assets/images/vendor.jpg';

const MyHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Experience Premium Quality",
      text: "Discover our exceptional collection of handcrafted products made with finest materials",
      image: product,
      button: "Shop Now"
    },
    {
      title: "Your Style, Your Way",
      text: "Join thousands of satisfied customers who transformed their lifestyle with our products",
      image: user,
      button: "Shop Now"
    },
    {
      title: "Trusted by Experts",
      text: "Partner with industry leaders who choose quality and reliability above all",
      image: vendor,
      buttons: ["Shop Now", "Learn More"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white w-full h-screen relative overflow-hidden pt-4">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row h-full p-4 md:p-8 items-center">
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:pr-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                {slide.text}
              </p>
              <div className="flex gap-4">
                {slide.buttons ? (
                  <>
                    <button className="bg-[#A294F9] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      {slide.buttons[0]}
                    </button>
                    <button className="border-2 border-[#A294F9] text-[#A294F9] px-8 py-3 rounded-full font-semibold hover:bg-[#A294F9] hover:text-white transition-colors">
                      {slide.buttons[1]}
                    </button>
                  </>
                ) : (
                  <button className="bg-[#A294F9] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                    {slide.button}
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full max-w-2xl h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-1 rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#A294F9]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MyHeroSection;