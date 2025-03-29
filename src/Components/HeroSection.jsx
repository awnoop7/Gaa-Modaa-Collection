import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Elevate Your Style",
    description: "Upgrade your fashion with GAA MODAA. Find your perfect outfit today!",
    image: "/Image/woman-model-next.png",
  },
  {
    title: "Your Style, Your Identity",
    description: "Discover fashion that truly represents you with our premium collection.",
    image: "/Image/man-Photoroom.png",
  },
  {
    title: "Be Bold, Be Fashionable",
    description: "Express yourself with the latest trends and exclusive designs.",
    image: "/Image/woman-mode -red-png.png",
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex     ) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[60vh] relative overflow-hidden bg- bg-red-500">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex flex-col md:flex-row items-center justify-center flex-shrink-0 px-4 md:px-12 bg-gradient-to-r from-gray-100 to-gray-200">
            
            {/* Left Content (Text) */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
                {slide.description}
              </p>
              <button className="mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-full shadow-md transition-all">
                Explore Now
              </button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt="Fashion Model"
                className="w-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-contain rounded-xl shadow-lg"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
