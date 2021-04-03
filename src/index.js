import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const d = document;
const container = d.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
