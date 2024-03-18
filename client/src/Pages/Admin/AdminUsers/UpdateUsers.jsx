import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUsers() {

  const [inputs, setInputs] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    address: "",
    role: ""
  })

  const [err, setErr] = useState(false)

  const navigate = useNavigate()
  const location  = useLocation()

  const userId = location.pathname.split("/")[3]

  

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}) )
  }

  const handleClick = async e => {
    try{
      await axios.put("http://localhost:4000/users/updateuser/" + userId, inputs)
      navigate("/admin")
    } catch(err){
      setErr(err)
      
    }
    console.log(err)
  }

  return (
    <div className='update-container admin-product-container'>
      <div className='update-wrapper'>
        <h2>Modification de l'utilisateur {inputs.idusers}</h2>
        <div className='addproduct-price'>
          <div className="addproduct-item-field">
            <label htmlFor='lastname'>Nom</label>
            <input 
              type='text' 
              name='lastname' 
              id='lastname' 
              placeholder="Entrez un nom" 
              value={inputs.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="addproduct-item-field">
            <label htmlFor='firstname'>Prénom</label>
            <input 
              type='text' 
              name='firstname' 
              id='firstname' 
              placeholder='Entrez un prénom' 
              value={inputs.firstname} 
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='addproduct-item-field'>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            placeholder="Entrez un email" 
            value={inputs.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="addproduct-item-field">
          <label htmlFor='dateOfBirth'>Date de naissance</label>
          <input
            type='date'
            name='dateOfBirth' 
            id='dateOfBirth' 
            className='dateOfBirth' 
            value={inputs.dateOfBirth} 
            onChange={handleChange}
          >
          </input>
        </div>
        <div className="addproduct-item-field">
          <label htmlFor='address'>Adresse</label>
          <input 
            type='text'
            name='address' 
            id='address'
            placeholder="Entrez une adresse"
            value={inputs.address}
            onChange={handleChange}
          />
        </div>
        <div className="addproduct-item-field">
          <label htmlFor='role'>Role</label>
          <input 
            type='text'
            name='role' 
            id='role'
            placeholder="Entrez un role"
            value={inputs.role}
            onChange={handleChange}
          />
        </div>
        <div className='adduser-button-container'>
          <button className='adduser-button' onClick={() => {handleClick()}}>Appliquer les modifications</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateUsers