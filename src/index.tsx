import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/globals.css';  // Import the global CSS file
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/navbar/navbar.tsx';

// Add proper type for the 'root' element
const rootElement = document.getElementById('root');

// Ensure the rootElement is not null
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();