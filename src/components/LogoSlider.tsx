import React from 'react';
import './LogoCarousel.css';

const logos = [
  'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
  'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
  'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
  'https://navneetdwivedi.github.io/Logo_Slider/logo.png',
];

const LogoCarousel = () => {
  return (
    <div className="overflow-hidden py-8 relative bg-black"> {/* Set background color */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"></div> {/* Adjusted gradient */}
      <div className="flex animate-slide logo-container"> {/* Added a specific class */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-24 mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
