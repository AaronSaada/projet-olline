import React, { useState } from 'react'
import axios from 'axios'
import '../Authentification.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from "../Validation";
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

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}) )
  }

  const handleClick = e => {
    e.preventDefault();

    const validationErrors = Validation(inputs);
    setErr(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        axios.post("http://localhost:4000/auth/inscription", inputs)
        .then(response =>  navigate("/connexion"))
      .catch((err) => {
        if (err.response) {
          console.error("Erreur lors de la réponse du serveur : ", err.response.data);
        } else if (err.request) {
          console.error("Impossible de récupérer la réponse du serveur");
        } else {
          console.log("Erreur lors de la configuration de la requête : ", err.message);
        }}
      )
    }
  };
  console.log(err)

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
              {err.lastname && (
                <p className='message-erreur-regex'>
                  {err.lastname}
                </p>
              )}
            </div>
            <div className='form-input-flex'>
              <label>Prénom</label>
              <input 
                type='text' 
                placeholder='Entrez votre prénom'
                name='firstname'
                onChange={handleChange}
                error={!!err.firstname}
                required
                />
                {err.firstname && (
                  <p className='message-erreur-regex'>
                    {err.firstname}
                  </p>
                )}
            </div>
          </div>
          <div className='form-input-flex'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Entrez votre email'
              onChange={handleChange}
              name='email'
              error={!!err.email}
              required
            />
            {err.email && (
              <p className='message-erreur-regex'>
                {err.email}
              </p>
            )}
          </div>
          <div className='form-input-flex'>
            <label>Mot de passe</label>
            <input 
              type='password' 
              placeholder='Entrez votre mot de passe'
              onChange={handleChange}
              name='password'
              error={!!err.password}
              required
            />
            {err.password && (
              <p className='message-erreur-regex'>
                {err.password}
              </p>
            )}
          </div>
          <div className='form-input-flex'>
            <label>Date de naissance</label>
            <input 
              type='date'
              name='dateOfBirth'
              onChange={handleChange}
              error={!!err.dateOfBirth}
              required
            />
            {err.dateOfBirth && (
              <p className='message-erreur-regex'>
                {err.dateOfBirth}
              </p>
            )}
          </div>
          <div className='form-input-flex'>
            <label>Adresse</label>
            <input 
              type='text' 
              placeholder='Entrez votre adresse'
              name='address'
              onChange={handleChange}
              error={!!err.address}
              required
            />
            {err.address && (
              <p className='message-erreur-regex'>
                {err.address}
              </p>
            )}
          </div>
          {err && <p className='message-erreur-authentification'>{err.msg}</p>}
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