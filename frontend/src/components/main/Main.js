import React from 'react';
import './Main.css'; // Tailwind CSS'i içeren bir dosya olduğunu varsayalım

import Header from '../header/Header';
import MainContentTop from './main-content-top/MainContentTop';

const Main = () => {
  return (
    <div id='container' className='w-full h-screen flex flex-col overflow-y-auto'>
      <div id='header' className='w-full h-fit bg-slate-500'>
        <div className=' w-full h-fit'>
            <Header />
        </div>
      </div>
      <div id='main' className='w-full h-fit  p-8'>
        <div id='topOfMain' className=' text-center'>
            <MainContentTop/>
        </div>
      </div>
      <div id='footer' className='w-full h-fit bg-amber-400'></div>
    </div>
  );
};

export default Main;
