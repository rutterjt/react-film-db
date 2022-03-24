import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ movieTitle }) => {
  return (
    <div className="bg-slate-700 w-full text-slate-50 px-6 py-4 text-lg">
      <div className="max-w-site-content mx-auto space-x-4">
        <Link to="/">Home</Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
