import React from 'react';

import TMDBLogo from '../images/tmdb_logo-full.svg';

const Attribution = () => {
  return (
    <div className="flex max-w-xs items-center">
      <img
        src={TMDBLogo}
        alt="The Movie Database logo"
        className="tmdb-logo mr-4"
      />
      <p>
        This website uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
  );
};

export default Attribution;
