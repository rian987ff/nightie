'use client';
import React, { useId } from "react";
import { motion } from "framer-motion";
import { playlists } from "../../constants";

type Card = typeof playlists[number];

export function ExpandablePlaylist() {
  const id = useId();

  return (
    <>
      <ul className="max-w-2xl mx-auto w-full">
        {playlists.map((card) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.a
              layoutId={`button-${card.title}-${id}`}
              href={card.ctaLink}
              target="_blank"
              rel="noreferrer"
              className="w-28 md:w-36 px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-colors flex items-center justify-center"
            >
              {card.ctaText}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="m0 0h24v24H0z" fill="none" />
      <path d="m18 6l-12 12" />
      <path d="m6 6l12 12" />
    </motion.svg>
  );
};
