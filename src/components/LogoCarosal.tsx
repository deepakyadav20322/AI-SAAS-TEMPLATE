import React from 'react';

interface CarouselProps {
  logos: string[]; // Array of logo texts
}

const Carousel: React.FC<CarouselProps> = ({ logos }) => {
  return (
    <div className="relative overflow-hidden w-full h-12"> 
      <div className="flex w-[200%] animate-logo_scroll">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[calc(100%/6)] flex items-center justify-center px-2">
            <span className="text-xl font-bold whitespace-nowrap">{logo}</span>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 w-[calc(100%/6)] flex items-center justify-center px-3 sm:px-2">
            <span className="text-xl font-bold whitespace-nowrap">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
