
'use client';
import React from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

export const TextHoverEffect = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={cn("inline-block", className)}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-300 ease-in-out hover:text-gray-400 hover:-translate-y-2"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
