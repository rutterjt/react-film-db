import React from 'react';

// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

// Pages
// import Movie from './components/Movie';
// import NotFound from './components/NotFound';
import MoviesPage from './features/movies/MoviesPage';

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      {/* <Route path="/:movieId" element={<Movie />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
),

export default App;
