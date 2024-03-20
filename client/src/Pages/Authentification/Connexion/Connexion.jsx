import { useState, useContext } from 'react'
import '../Authentification.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext.js'
import axios from "axios"
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton.jsx'


function Connexion() {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
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

  const {login} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      setErr(err.response.data)
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
          {err && <p className='message-erreur-authentification'>{err}</p>}
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