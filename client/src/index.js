import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>
  
);