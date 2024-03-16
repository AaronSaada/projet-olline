import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ListUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/users/getusers")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = async (idusers) => {

    try{
      await axios.delete("http://localhost:4000/users/delete/" + idusers)
      window.location.reload()
    }catch(err) {
      console.log(err)
    }

  }

  return (
    <div className='list-users-container admin-product-container'>
      <h2>Ajouter un produit</h2>
      <div className='list-product-container'>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Date de naissance</th>
              <th>Adresse</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr>
                <td>{user.lastname}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <div className='table-flex'>
                  <button><Link to={`/admin/updateusers/${user.idusers}`}>Modifier</Link></button>
                  <button className='bouton-supprimer' onClick={() => handleDelete(user.idusers)}>Supprimer</button>
                </div>
              </tr>
            ))}
          </tbody>
          
        </table>
        
      </div>
    </div>
      
  )
}

export default ListUsers