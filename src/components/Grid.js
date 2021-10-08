import React from 'react';

const Grid = ({ header, children }) => {
  return (
    <div className="px-5 py-8 text-gray-700 text-base md:text-xl">
      <section className="max-w-screen-xl mx-auto">
        <h2 className="text-gray-900 text-2xl mb-4">{header}</h2>
        <div className="grid grid-auto-200 gap-8">{children}</div>
      </section>
    </div>
  );
};

export default Grid;
