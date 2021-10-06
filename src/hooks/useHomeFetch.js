import { useState, useEffect } from 'react';

import { fetchMovies } from '../api';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMovies = async (page, term = '') => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchMovies(page, term);
      setState((prev) => ({
        ...data,
        results:
          page > 1 ? [...prev.results, ...data.results] : [...data.results],
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  return { state, loading, error };
};
