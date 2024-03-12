import React, { useState } from 'react'
import axios from 'axios'
import '../Authentification.css'
import { Link } from 'react-router-dom'
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton.jsx'

function Inscription() {

  const [lastname, setLastname] = useState("")
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [address, setAddress] = useState("")

  const inscription = () => {
    axios.post('http://localhost:4000/inscription', {
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      address: address
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className='authentification-container'>
      <div className='authentification-wrapper'>
      <h1>Inscription</h1>
        <form>
          <div className='form-name-flex'>
            <div className='form-input-flex'>
              <label>Nom</label>
              <input
                type='text'
                placeholder='Entrez votre nom'
                onChange={(e) => {
                  setLastname(e.target.value)
                }}
                required
              />
            </div>
            <div className='form-input-flex'>
              <label>Prénom</label>
              <input 
                type='text' 
                placeholder='Entrez votre prénom'
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
                required
              />
            </div>
          </div>
          <div className='form-input-flex'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Entrez votre email'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Mot de passe</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Date de naissance</label>
            <input 
              type='date'
              onChange={(e) => {
                setDateOfBirth(e.target.value)
              }}  
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Adresse</label>
            <input 
              type='text' 
              placeholder='Entrez votre adresse'
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              required
            />
          </div>
          <StyledButton className='authentification-connexion-bouton' onClick={inscription}>S'inscrire</StyledButton>
        </form>
        <p className='authentification-lien'>Déjà membre ? <br/><Link to='/connexion'>Se connecter</Link></p>
      </div>
    </div>
  )
}

export default Inscription