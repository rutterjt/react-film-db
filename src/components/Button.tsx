import React from 'react';

type Props = {
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="inline-block bg-slate-700 text-slate-50 py-3 px-8 rounded-2xl hover:opacity-80 focus:opacity-80 transition-opacity text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
  >
    {children}
  </button>
);

export default Button;
