import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StyledButton from '../assets/StyledComponents/StyledButton'
import { AuthContext } from '../../Context/AuthContext'
import axios from "axios"
import './Navbar.css'
import { AnnulerSaCommande } from '../../Pages/Panier/Panier'

export const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async e => {
    e.preventDefault()

    try{
      await axios.post("http://localhost:4000/auth/deconnexion")
      localStorage.removeItem("user")
      AnnulerSaCommande()
      navigate("/connexion")
      window.location.reload()
    } catch(err){
      console.log(err)
    }
  }

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked){
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
    }else{
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }

    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <header>
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
      <div className='navbar desktop-nav container' >
        <ul>
          <div className='logo-categories-container'>
            <div className='logo-container'>
              <li><Link to='/'>OLLINE</Link></li>
            </div>
            <div className='categories-container'>
              <li><Link to='/produits'>Produits</Link></li>
              <li><Link to='/partenaires'>Nos partenaires</Link></li>
              <li><Link to='/apropos'>A propos</Link></li>
            </div>
          </div>
          <div className='connexion-panier-container'>
            {/* Si l'utilisateur est authentifié et que son rôle est "admin" */}
            {currentUser && currentUser.role === "admin"
              // On affiche le lien pour la page admin dans la navbar
              ? <li><Link to='/admin'>Admin</Link></li>
              // Sinon on affiche le lien pour le panier
              : <li><Link to='/panier'>Panier</Link></li>
            }
            {/* Si l'utilisateur n'est pas authentifié */}
            {currentUser === null
              // On affiche le bouton de connexion
              ? <Link to='/connexion'><StyledButton>Connexion</StyledButton></Link>
              // Sinon, on affiche le bouton de déconnexion
              : <StyledButton onClick={handleClick}>Déconnexion</StyledButton>
            }
          </div>
        </ul>
      </div>
      <div className={menu_class}>
        <div className="menu-container">
          <ul className="burger-nav">
            <div className='logo-container'>
              <li><Link to='/' onClick={updateMenu}>OLLINE</Link></li>
            </div>
            <li>
              <Link to="/produits" onClick={updateMenu}>
                Produits
              </Link>
            </li>
            <li>
              <Link to="/partenaires" onClick={updateMenu}>
                Nos partenaires
              </Link>
            </li>
            <li>
              <Link to="/apropos" onClick={updateMenu}>
                A propos
              </Link>
            </li>
            <div className='connexion-panier-container'>
              {/* Si l'utilisateur est authentifié et que son rôle est "admin" */}
              {currentUser && currentUser.role === "admin"
                // On affiche le lien pour la page admin dans la navbar
                ? <li><Link to='/admin' onClick={updateMenu}>Admin</Link></li>
                // Sinon on affiche le lien pour le panier
                : <li><Link to='/panier' onClick={updateMenu}>Panier</Link></li>
              }
              {/* Si l'utilisateur n'est pas authentifié */}
              {currentUser === null
                // On affiche le bouton de connexion
                ? <Link to='/connexion' onClick={updateMenu}><StyledButton>Connexion</StyledButton></Link>
                // Sinon, on affiche le bouton de déconnexion
                : <StyledButton onClick={handleClick} >Déconnexion</StyledButton>
              }
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}
