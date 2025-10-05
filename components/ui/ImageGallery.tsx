
'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, onClose]);

  if (selectedIndex === null) {
    return null;
  }

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            &larr;
          </button>
          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt="Lookbook"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-h-[90vh] w-auto"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            &rarr;
          </button>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
