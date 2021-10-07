import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ movieTitle }) => {
  return (
    <div className="flex items-center justify-center px-5 py-4 bg-gray-700 text-white">
      <div className="flex w-full max-w-screen-xl space-x-2 text-base md:text-lg">
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
