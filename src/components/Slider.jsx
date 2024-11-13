import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: (
      <>
        <span className="text-[#2B7A9E]">Ultimate Security</span> for your
        <br />banking and beyond
      </>
    ),
    subtitle: "Business and personal simplified"
  },
  {
    title: (
      <>
        <span className="text-[#2B7A9E]">Smart Banking</span> solutions
        <br />at your fingertips
      </>
    ),
    subtitle: "Seamless transactions anywhere"
  },
  {
    title: (
      <>
        <span className="text-[#2B7A9E]">Secure Vault</span> storage
        <br />for peace of mind
      </>
    ),
    subtitle: "Your data, protected 24/7"
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-2xl">
      <div className="min-h-[200px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-500 absolute w-full ${
              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {slide.title}
            </h1>
            <p className="text-2xl text-gray-700 mt-6 leading-relaxed">{slide.subtitle}</p>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4 mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#2B7A9E] scale-100' 
                : 'bg-gray-300 scale-75 hover:scale-90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;