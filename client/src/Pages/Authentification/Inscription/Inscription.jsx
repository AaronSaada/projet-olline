import React from 'react'
import '../Authentification.css'
import { Link } from 'react-router-dom'
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton.jsx'

function Inscription() {
  return (
    <div className='authentification-container'>
      <div className='authentification-wrapper'>
      <h1>Inscription</h1>
        <form>
          <div className='form-input-flex'>
            <label>Email</label>
            <input type='text' placeholder='Entrez votre Email'/>
          </div>
          <div className='form-input-flex'>
            <label>Mot de passe</label>
            <input type='text' placeholder='Entrez votre mot de passe'/>
          </div>
          <StyledButton className='authentification-connexion-bouton'>Se connecter</StyledButton>
        </form>
        <p className='authentification-lien'>Déjà membre ? <br/><Link to='/inscription'>Se connecter</Link></p>
      </div>
    </div>
  )
}

export default Inscription