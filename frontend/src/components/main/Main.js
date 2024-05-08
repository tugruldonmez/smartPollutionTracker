import React from 'react';
import './Main.css'; // Tailwind CSS'i içeren bir dosya olduğunu varsayalım
import Navbar from '../navbar/Navbar';

const Main = () => {
  return (
    <div id='container' className='w-full h-screen flex flex-col'>
      <div id='header' className='w-full h-1/4 bg-slate-500'>
        <Navbar />
      </div>
      <div id='main' className='w-full h-7/12 bg-red-500'></div>
      <div id='footer' className='w-full h-1/6 bg-amber-400'></div>
    </div>
  );
};

export default Main;
