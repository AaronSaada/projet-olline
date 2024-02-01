import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import './index.css'
import Sidebar from './Components/Sidebar/Sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
