import React from 'react';

// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

// Pages
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
