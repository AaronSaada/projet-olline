import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StyledButton from '../assets/StyledComponents/StyledButton'
import { AuthContext } from '../../Context/AuthContext'
import axios from "axios"
import './Navbar.css'

export const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async e => {
    e.preventDefault()

    try{
      await axios.post("http://localhost:4000/auth/deconnexion")
      localStorage.removeItem("user")
      navigate("/connexion")
      window.location.reload()
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className='navbar container'>
      <ul>
        <div className='logo-categories-container'>
          <div className='logo-container'>
            <li><Link to='/'>OLLINE</Link></li>
          </div>
          <div className='categories-container'>
            <li><Link to='/hommes'>Hommes</Link></li>
            <li><Link to='/femmes'>Femmes</Link></li>
            <li><Link to='/enfants'>Enfants (3 - 17)</Link></li>
            <li><Link to='/nourissons'>Nourissons (- 3)</Link></li>
          </div>
        </div>
        <div className='connexion-panier-container'>
          
          {currentUser && currentUser.role === "admin"
            ? <Link to='/admin'>Admin</Link>
            : <li><Link to='/panier'>Panier</Link></li>
          }
          {currentUser === null
            ? <Link to='/connexion'><StyledButton>Connexion</StyledButton></Link>
            : <StyledButton onClick={handleClick}>Déconnexion</StyledButton>
          }
          
        </div>
      </ul>
    </div>
  )
}
