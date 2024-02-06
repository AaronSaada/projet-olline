import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'

const App = () => {
  return(
    <div className='admin-pannel-flex'>
      <Navbar />
      <Admin />
    </div>
  )
}

export default App