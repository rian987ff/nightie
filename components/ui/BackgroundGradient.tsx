'use client';
import React from 'react';

const cn = (...classes: (string | undefined |null | false)[]) => classes.filter(Boolean).join(' ');

// FIX: Define props type to resolve TS error with `key` prop.
type BackgroundGradientProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
};

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
          "bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.1),transparent)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.1),transparent)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};