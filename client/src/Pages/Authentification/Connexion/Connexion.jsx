import React, { useState, useEffect, useContext } from 'react'
import '../Authentification.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton.jsx'


function Connexion() {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
    }catch(err){
      setErr(err)
    }
  }

  return (
    <div className='authentification-container'>
      <div className='authentification-wrapper'>
        <h1>Connexion</h1>
        <form>
          <div className='form-input-flex'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Entrez votre Email'
              name='email'
              onChange={
                handleChange
              }
              required
            />
          </div>
          <div className='form-input-flex'>
            <label>Mot de passe</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe'
              name='password'
              onChange={
                handleChange
              }
              required
            />
          </div>
          {err && err}
          <StyledButton 
            className='authentification-connexion-bouton'
            onClick={handleLogin}
          >
            Se connecter
          </StyledButton>
        </form>
        <p className='authentification-lien'>Pas encore membre ? <br/><Link to='/inscription'>S'inscrire</Link></p>
      </div>
    </div>
  )
}

export default Connexion