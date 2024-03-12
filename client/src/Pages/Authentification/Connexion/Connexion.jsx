import React, { useState, useEffect } from 'react'
import '../Authentification.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton.jsx'


function Connexion() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const connexion = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/connexion', {
      email: email,
      password: password
    }).then((response) => {
      if(!response.data.auth) {
        setLoginStatus(false)
      }
      else {
        setLoginStatus(true)
        localStorage.setItem("token", response.data.token) 
        navigate("/")
      }
    })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/connexion").then((response) => {
      if(response.data.loggedIn === true){
        setLoginStatus(true)
      }
    })
  }, []);

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
              onChange={(e) => {
                setEmail(e.target.value)
              }}
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
            />
          </div>
          <StyledButton 
            className='authentification-connexion-bouton'
            onClick={connexion}
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