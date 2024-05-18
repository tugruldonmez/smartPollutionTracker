// src/components/main/Main.js

import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContentTop from './main-content-top/MainContentTop';
import Footer from '../footer/Footer';
import MainContentVideo from './main-content-video/MainContentVideo';
import MainContentNews from './main-content-news/MainContentNews';
import About from '../hakkimizda/Hakkimizda';
import Navbar from '../header/Navbar';
import Slider from '../header/Slider';

const Main = () => {
  return (
    <Router>
      <div id='container' className='w-full h-screen flex flex-col overflow-y-auto'>
        <div id='header' className='w-full h-fit bg-transparent'>
          <div className='w-full h-fit bg-transparent'>
            <Navbar/>
            
          </div>
        </div>
        <div id='main' className='w-full h-fit'>
          <Routes>
            <Route exact path="/" element={
              <div id='topOfMain' className='text-center'>
                <Slider/>
                <MainContentTop />
                <MainContentVideo />
                <MainContentNews />
              </div>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div id='footer' className='w-full h-fit '>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default Main;
