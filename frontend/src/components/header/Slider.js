import React, { useState, useEffect } from 'react';
import sliderImage1 from './sliderhava1.jpg';
import sliderImage2 from './sliderhava2.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [sliderImage1, sliderImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (

    <div className="relative w-full h-96 overflow-hidden">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prevSlide} className="absolute left-0 w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button onClick={nextSlide} className="absolute right-0 w-12 h-12  bg-gray-800/50 rounded-full flex items-center justify-center text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
