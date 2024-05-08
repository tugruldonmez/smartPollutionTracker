import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-50 w-full p-3">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-500">© 2024 <a href="https://flowbite.com/" className="hover:underline">SMART POLLUTION TRACKER™</a>. Tüm Hakları Saklıdır.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Hakkında</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Gizlilik Politikası</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Lisanslama</a>
          </li>
          <li>
            <a href="#" className="hover:underline">İletişim</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
