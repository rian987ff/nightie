'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageGallery } from './ImageGallery';

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % cards.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + cards.length) % cards.length);
    }
  };

  return (
    <>
      <div className="w-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className={cn(
              "rounded-xl aspect-square group relative overflow-hidden bg-zinc-900 cursor-pointer"
            )}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => handleImageClick(i)}
          >
            <img
              src={card.thumbnail}
              alt={`Lookbook image ${card.id}`}
              className="object-cover object-center absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
      <ImageGallery
        images={cards.map(c => c.thumbnail)}
        selectedIndex={selectedImage}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};