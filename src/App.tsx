import React from 'react';

// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// helmet
import { HelmetProvider } from 'react-helmet-async';

// components
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <Router>
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  </Router>
);

export default App;
