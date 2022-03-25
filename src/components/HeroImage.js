import React from 'react';

const HeroImage = ({ image, title, text }) => {
  const bgStyle = image
    ? `linear-gradient(to bottom, var(--tw-gradient-stops)), url(${image}) center/cover`
    : '#0f172a';
  return (
    <div
      style={{ background: bgStyle }}
      className="relative min-h-[600px] from-transparent via-slate-900/30 to-slate-900 px-6 text-slate-50 animate-fadeIn"
    >
      <div className="max-w-site-content mx-auto">
        <div className="max-w-prose z-10 absolute bottom-10 mr-20 min-h-[100px]">
          <h1 className="text-[2rem] md:text-[2.5rem] mb-4">{title}</h1>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
