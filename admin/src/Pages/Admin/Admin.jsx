import React from 'react'
import './Admin.css'
import { Routes, Route } from 'react-router-dom'
import ListProduct from '../../Components/ListProduct/ListProduct'
import AddProduct from '../../Components/AddProduct/AddProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Admin = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
    
  )
}

export default Admin