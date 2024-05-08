import React from 'react';
import './Main.css'; // Tailwind CSS'i içeren bir dosya olduğunu varsayalım
import Navbar from '../header/Navbar';

const Main = () => {
  return (
    <div id='container' className='w-full h-screen flex flex-col overflow-y-auto'>
      <div id='header' className='w-full h-fit bg-slate-500'>
        <div className=' w-full h-fit'>
            <Navbar />
        </div>
      </div>
      <div id='main' className='w-full h-fit bg-red-500 p-8'>
        <div id='topOfMain' className=' text-center'>
            <p className=' text-7xl font-sans font-bold'>Hava Kirliliği</p>
            <p className=' text-2xl font-sans font-semibold'>"Görünmez Katil"</p>
        </div>
      </div>
      <div id='footer' className='w-full h-fit bg-amber-400'></div>
    </div>
  );
};

export default Main;
