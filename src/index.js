import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initGA, logVisit } from './tracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
initGA();
logVisit();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
