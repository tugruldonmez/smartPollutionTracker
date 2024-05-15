import React, { useState, useEffect } from 'react';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpeg';
import slider3 from '../img/slider3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slider1, slider2, slider3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (

    <div className="relative w-full h-custom_for_scrollbar overflow-hidden bg-transparent ">
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
