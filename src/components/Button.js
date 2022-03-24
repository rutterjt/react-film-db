import React from 'react';

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="inline-block bg-slate-700 text-slate-50 py-3 px-8 rounded-2xl hover:opacity-80 transition-opacity text-lg"
  >
    {text}
  </button>
);

export default Button;
