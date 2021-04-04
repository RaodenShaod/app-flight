import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
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
