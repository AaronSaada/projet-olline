import React from 'react'
import { Link } from 'react-router-dom'
import StyledButton from '../assets/StyledComponents/StyledButton'
import './Navbar.css'

export const Navbar = () => {
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
          <Link to='/connexion'><StyledButton>Connexion</StyledButton></Link>
          <li><Link to='/panier'>Panier</Link></li>
        </div>
      </ul>
    </div>
  )
}
