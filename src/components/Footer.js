import React from 'react';

import Attribution from './Attribution';

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-16 px-5">
      <footer className="max-w-screen-xl mx-auto block md:flex justify-between">
        <div className="mr-4 mb-4">
          Built by{' '}
          <a
            href="https://github.com/jonrutter"
            rel="noreferrer"
            target="_blank"
            className="hover:underline"
          >
            Jon Rutter
          </a>
          . Copyright {new Date().getFullYear()}.
        </div>
        <Attribution />
      </footer>
    </div>
  );
};

export default Footer;
