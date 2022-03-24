import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/open-sans';

import App from './App';

import CSSReset from './styles/globalStyles';
import { GlobalThemeProvider } from './styles/theme';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <CSSReset />
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
