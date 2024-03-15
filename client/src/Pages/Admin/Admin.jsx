import React from 'react'
import AddUsers from './AdminUsers/AddUsers'
import UpdateUsers from './AdminUsers/UpdateUsers'
import AddProduct from './AdminProduct/AddProduct'
import UpdateProduct from './AdminProduct/UpdateProduct'
import './Admin.css'

function Admin() {
  return (
    <div className='admin-pannel-container'>
      <h1>Pannel Admin</h1>
      <div className='admin-pannel-wrapper'>
        <AddUsers />
        <UpdateUsers />
        <AddProduct />
        <UpdateProduct/>
      </div>
    </div>
  )
}

export default Admin