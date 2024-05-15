import React from 'react';
import logo from'../img/logo.png'


const Navbar = () => {
  return (
    <div className="bg-transparent ">
      <nav className="bg-transparent ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="https://flowbite.com/" className="flex items-center ">
            <img src={logo} className=" w-fit h-fit" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">SMART POLLUTION TRACKER</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <p class="text-md group relative w-max">
                  <span>Anasayfa</span>
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-sptYesili group-hover:w-full"></span>
                </p>
              </li>
            
              <li>
                <p class="text-md group relative w-max">
                  <span>Mobil Uygulama</span>
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-sptYesili group-hover:w-full"></span>
                </p>
              </li>
              <li>
                <p class="text-md group relative w-max">
                  <span>Etkinlikler</span>
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-sptYesili group-hover:w-full"></span>
                </p>
              </li>
              <li>
                <p class="text-md group relative w-max">
                  <span>Hakkımızda</span>
                  <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-sptYesili group-hover:w-full"></span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      
    </div>
  );
};

export default Navbar;
