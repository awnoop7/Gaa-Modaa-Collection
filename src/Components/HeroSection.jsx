import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Elevate Your Style",
    description: "Upgrade your fashion with GAA MODAA. Find your perfect outfit today!",
    image: "/Image/woman-model-next.png",
    link: "/womens",
  },
  {
    title: "Your Style, Your Identity",
    description: "Discover fashion that truly represents you with our premium collection.",
    image: "/Image/man-Photoroom.png",
    link: "/mens",
  },
  {
    title: "Be Bold, Be Fashionable",
    description: "Express yourself with the latest trends and exclusive designs.",
    image: "/Image/woman-mode -red-png.png",
    link: "/sale",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[60vh] relative overflow-hidden px-4 sm:px-8 md:px-16 py-8 md:py-16">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-row items-center justify-center flex-shrink-0 bg-gradient-to-r from-gray-100 to-gray-200"
          >
            {/* Left Content (Text) */}
            <div className="w-1/2 text-left p-6 sm:p-10">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {slide.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl text-gray-700 max-w-md">
                {slide.description}
              </p>
              <Link to={slide.link}>
                <button className="mt-6 w-full sm:w-auto px-5 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-full shadow-md transition-all">
                  Explore Now
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt="Fashion Model"
                className="w-auto max-h-[200px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
