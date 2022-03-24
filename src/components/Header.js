import React from 'react';
import { Link } from 'react-router-dom';

// logo
import Logo from '../images/rfdb-logo.svg';
import TMDBLogo from '../images/tmdb_logo.svg';

const Header = () => (
  <header className="bg-gradient-to-br from-slate-900 to-slate-800 py-6 px-6 md:py-8">
    <div className="max-w-site-content mx-auto flex items-center justify-between">
      <Link to="/">
        <img
          src={Logo}
          alt="React Film DB Logo"
          className="w-full max-w-[120px] h-auto"
        />
      </Link>
      <img
        src={TMDBLogo}
        alt="TMDB Logo"
        className="w-full max-w-[80px] h-auto md:max-w-[100px]"
      />
    </div>
  </header>
);

export default Header;
