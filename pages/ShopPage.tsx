import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TextHoverEffect } from '../components/ui/TextHoverEffect';
import { BackgroundGradient } from '../components/ui/BackgroundGradient';
import { products } from '../constants';
import SvgBordado from '../components/icons/Bordado.tsx';
import InstagramIcon from '../components/icons/Instagram.tsx';

const ProductsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <main className="flex-grow p-4 sm:p-8 relative">
        <Link to="/" className="absolute top-8 left-4 sm:left-8 z-50 text-white hover:text-gray-300">
          &larr; Back
        </Link>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
          <Link to="/">
            <SvgBordado className="w-28 h-28 md:w-32 md:h-32 text-white drop-shadow-lg opacity-90" />
          </Link>
        </div>
        
        <div className="flex items-center justify-center h-48 md:h-64 mb-8 pt-24">
          <TextHoverEffect
            text="Our Products"
            className="text-4xl md:text-7xl font-bold text-center text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {products.map((product) => {
            const whatsappLink = `https://wa.me/5547997065140?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20produto%3A%20${encodeURIComponent(product.name)}`;
            return (
              <BackgroundGradient key={product.id} className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-zinc-900">
                  <button onClick={() => setSelectedImage(product.image)} className="w-full block rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-80 cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                  </button>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-sm text-neutral-300 mt-2">{product.description}</p>
                    <p className="text-sm text-neutral-400 mt-1">
                      Tamanhos: {product.sizes}
                    </p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center mt-4 px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Comprar via WhatsApp
                    </a>
                  </div>
              </BackgroundGradient>
            );
          })}
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              src={selectedImage}
              alt="Visualização ampliada do produto"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} 
            />
             <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-2xl"
                onClick={() => setSelectedImage(null)}
            >
                &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;