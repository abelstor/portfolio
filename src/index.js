import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppPortfolio } from './AppPortfolio';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppPortfolio />
  </React.StrictMode>,
);