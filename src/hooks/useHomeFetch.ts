import { useState, useEffect, useCallback } from 'react';

import { fetchMovies } from '../api';

import { Movie } from '../types';

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const getMovies = useCallback(
    async (page: number, term: string = '') => {
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
      if (initialLoad) setInitialLoad(false);
      setLoading(false);
    },
    [initialLoad]
  );

  // initial render and search input
  useEffect(() => {
    setState(initialState);
    getMovies(1, searchTerm);
  }, [getMovies, searchTerm]);

  // load more
  useEffect(() => {
    if (!isLoadingMore) return;
    getMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, getMovies, state.page]);

  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    isLoadingMore,
    initialLoad,
  };
};
