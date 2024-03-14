import React, { useState } from 'react'
import axios from 'axios'
import '../Authentification.css'
import { Link } from 'react-router-dom'
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton.jsx'

function Inscription() {

  const [inputs, setInputs] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    dateOfBirth: "",
    address: "",
  })

  const [err, setErr] = useState(false)

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}) )
  }

  const handleClick = async e => {
    e.preventDefault()

    try{
      await axios.post("http://localhost:4000/auth/inscription", inputs)
    } catch(err){
      setErr(err.reponse.data)
    }
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
                name='lastname'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-input-flex'>
              <label>Prénom</label>
              <input 
                type='text' 
                placeholder='Entrez votre prénom'
                name='firstname'
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='form-input-flex'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Entrez votre email'
              onChange={handleChange}
              name='email'
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Mot de passe</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe'
              onChange={handleChange}
              name='password'
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Date de naissance</label>
            <input 
              type='date'
              name='dateOfBirth'
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Adresse</label>
            <input 
              type='text' 
              placeholder='Entrez votre adresse'
              name='address'
              onChange={handleChange}
              required
            />
          </div>
          {err && <p className='message-erreur-authentification'>{err}</p>}
          <StyledButton 
            className='authentification-connexion-bouton'
            onClick={handleClick}
          >
            S'inscrire
          </StyledButton>
        </form>
        <p className='authentification-lien'>Déjà membre ? <br/><Link to='/connexion'>Se connecter</Link></p>
      </div>
    </div>
  )
}

export default Inscription