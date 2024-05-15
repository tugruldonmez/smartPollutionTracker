import React from 'react';
import './Main.css'; 

import Header from '../header/Header';
import MainContentTop from './main-content-top/MainContentTop';
import Footer from '../footer/Footer';
import MainContentVideo from './main-content-video/MainContentVideo';
import MainContentNews from './main-content-news/MainContentNews';

const Main = () => {
  return (
    <div id='container' className='w-full h-screen flex flex-col overflow-y-auto'>
      <div id='header' className='w-full h-fit bg-transparent'>
        <div className=' w-full h-fit bg-transparent'>
            <Header />
        </div>
      </div>
      <div id='main' className='w-full h-fit'>
        <div id='topOfMain' className=' text-center'>
            <MainContentTop/>
            <MainContentVideo/>
            <MainContentNews/>
        </div>
      </div>
      <div id='footer' className='w-full h-fit bg-amber-400'>
        <Footer/>
      </div>
    </div>
  );
};

export default Main;
