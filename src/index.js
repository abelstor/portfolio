import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { AppPortfolio } from './AppPortfolio';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <AppPortfolio />
  </React.StrictMode>,
);