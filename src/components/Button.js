import React from 'react';

const Button = ({ text, callback }) => (
  <button
    className="block bg-gray-800 w-1/4 min-w-200 text-white h-14 rounded-full text-xl mx-auto my-5 transition-all shadow-xl hover:opacity-80"
    onClick={callback}
  >
    {text}
  </button>
);

export default Button;
