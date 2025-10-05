import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from '../components/ui/LayoutGrid';
import { lookbookImages } from '../constants';
import SvgBordado from '../components/icons/Bordado.tsx';
import InstagramIcon from '../components/icons/Instagram.tsx';

const LookbookPage: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <main className="flex-grow relative">
        <Link to="/" className="absolute top-8 left-4 sm:left-8 z-50 text-white hover:text-gray-300">
          &larr; Back
        </Link>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
          <Link to="/">
            <SvgBordado className="w-28 h-28 md:w-32 md:h-32 text-white drop-shadow-lg opacity-90" />
          </Link>
        </div>
        <div className="pt-36 pb-10">
          <LayoutGrid cards={lookbookImages} />
        </div>
      </main>
      <footer className="w-full bg-black text-neutral-400 text-center py-8 border-t border-zinc-800">
        <nav className="mb-4">
          <ul className="flex justify-center items-center space-x-4 md:space-x-6 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li><span className="text-zinc-600">|</span></li>
            <li>
              <Link to="/shop" className="hover:text-white transition-colors">
                Shop
              </Link>
            </li>
             <li><span className="text-zinc-600">|</span></li>
            <li>
              <Link to="/lookbook" className="hover:text-white transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center mt-4">
          <p className="text-xs">&copy; 2020 - {currentYear} Nightie Studio. All Rights Reserved.</p>
          <a href="https://www.instagram.com/nightiestudio/" target="_blank" rel="noreferrer" className="ml-4">
            <InstagramIcon className="w-5 h-5 hover:text-white transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LookbookPage;