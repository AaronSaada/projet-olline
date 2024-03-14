import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </Provider>
  
  
);