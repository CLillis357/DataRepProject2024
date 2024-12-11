// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main app component
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Your custom CSS

// Create the React DOM root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
