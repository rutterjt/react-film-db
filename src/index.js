import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '@fontsource/open-sans';

import App from './App';

import { worker } from './mocks/server';

import CSSReset from './styles/globalStyles';
import { GlobalThemeProvider } from './styles/theme';

import store from './app/store';

async function start() {
  // Start mock API server
  await worker.start({ onUnhandledRequest: 'bypass' });

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalThemeProvider>
          <CSSReset />
          <App />
        </GlobalThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

start();
