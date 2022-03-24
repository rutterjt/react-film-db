import React from 'react';

import TMDBLogo from '../images/tmdb_logo-full.svg';

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50 py-12 px-6 mt-8 md:mt-12">
      <div className="max-w-site-content mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mr-4 mb-8 md:m-0">
          Copyright {copyrightYear},{' '}
          <a
            href="https://github.com/jonrutter"
            rel="noreferrer"
            target="_blank"
            className="hover:underline focus:underline"
          >
            Jon Rutter
          </a>
          .
        </div>
        <div className="max-w-[300px] flex items-center">
          <img
            src={TMDBLogo}
            alt="The Movie Database logo"
            className="w-full max-w-[80px] h-auto mr-4 md:max-w-[100px]"
          />
          <p>
            This website uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
