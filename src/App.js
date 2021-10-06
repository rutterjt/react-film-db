import React from 'react';

// components
import Header from './components/Header';

// Pages
import Home from './components/Home';

const App = () => {
  return (
    <div className="font-body">
      <Header />
      <Home />
    </div>
  );
};

export default App;
