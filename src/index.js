import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././assets/css/style.css';
import '././assets/css/icofont.min.css';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const maxino = createRoot(container);

maxino.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

