import React from 'react';
import { Link } from 'react-router-dom';

// logo
import Logo from '../images/react-movie-logo.svg';
import TMDBLogo from '../images/tmdb_logo.svg';

const Header = () => (
  <div className="px-5 bg-gradient-to-br from-gray-900 to-gray-700">
    <header className="max-w-screen-xl mx-auto py-4 flex justify-between">
      <Link to="/">
        <img src={Logo} alt="React Film DB Logo" className="h-auto site-logo" />
      </Link>
      <img src={TMDBLogo} alt="TMDB Logo" className="tmdb-logo" />
    </header>
  </div>
);

export default Header;
