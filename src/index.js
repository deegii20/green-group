import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import ThemeProvider from './context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ThemeProvider>
      <App />
        </ThemeProvider>
    </BrowserRouter>
  
  </React.StrictMode>
);

reportWebVitals();

