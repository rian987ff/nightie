'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
    id: number;
    name: string;
    designation: string;
    image: string;
}

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.05;

export const DraggableCardStack = ({ items }: { items: Item[] }) => {
    const [cards, setCards] = useState(items);
    
    const removeCard = (id: number) => {
        setCards(prevCards => prevCards.filter(card => card.id !== id));
    };

    if (cards.length === 0) {
        return (
            <div className="relative flex justify-center items-center w-80 h-[28rem]">
                <p className="text-zinc-500">That's all for now!</p>
            </div>
        )
    }

    return (
        <div className="relative w-80 h-[28rem] flex justify-center items-center">
            <AnimatePresence>
                {cards.map((card, index) => {
                    const isTopCard = index === cards.length - 1;
                    return (
                        <motion.div
                            key={card.id}
                            className="absolute w-80 h-[28rem] rounded-2xl bg-zinc-900 border-4 border-zinc-800 shadow-lg"
                            style={{
                                transformOrigin: "bottom center",
                                cursor: isTopCard ? 'grab' : 'default',
                            }}
                            initial={{
                                scale: 1 - (cards.length - 1 - index) * SCALE_FACTOR,
                                top: (cards.length - 1 - index) * CARD_OFFSET,
                                opacity: 1 - (cards.length - 1 - index) * 0.2,
                            }}
                            animate={{
                                scale: 1 - (cards.length - 1 - index) * SCALE_FACTOR,
                                top: (cards.length - 1 - index) * CARD_OFFSET,
                                opacity: 1,
                            }}
                            exit={{
                                x: Math.random() > 0.5 ? 500 : -500,
                                opacity: 0,
                                scale: 0.5,
                                transition: { duration: 0.3 }
                            }}
                            drag={isTopCard ? "x" : false}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            whileTap={isTopCard ? { cursor: 'grabbing', scale: 1.05 } : {}}
                            onDragEnd={(_, info) => {
                                if (isTopCard && Math.abs(info.offset.x) > 100) {
                                    removeCard(card.id);
                                }
                            }}
                        >
                             <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                <img src={card.image} alt={card.name} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                                <div className="relative z-10 text-white">
                                    <p className="font-bold text-2xl">{card.name}</p>
                                    <p className="font-normal text-base">{card.designation}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};