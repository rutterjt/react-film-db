import { useState, useEffect } from 'react';

import { fetchCredits, fetchMovie } from '../api';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await fetchMovie(movieId);
        const credits = await fetchCredits(movieId);

        // filter out directors
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        //
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  return { state, loading, error };
};
