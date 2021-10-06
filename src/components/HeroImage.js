import React from 'react';

const HeroImage = ({ image, title, text }) => {
  const wrapperStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="relative hero-image-wrapper" style={wrapperStyle}>
      <div className="p-5 hero-image h-full bg-no-repeat">
        <div className="max-w-screen-xl h-full mx-auto">
          <div className="z-20 text-white absolute max-w-screen-sm bottom-10 mr-5 min-h-100">
            <h1 className="text-2xl md:text-4xl mb-4 font-bold">{title}</h1>
            <p className="text-base md:text-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
