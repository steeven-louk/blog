import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from 'react-redux';
import App from './App';

import {BrowserRouter as Router } from "react-router-dom";
import store from './redux/store';
import { inject } from '@vercel/analytics';

inject();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </React.StrictMode>
);

