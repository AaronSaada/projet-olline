import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StyledButton from '../assets/StyledComponents/StyledButton'
import { AuthContext } from '../../Context/AuthContext'
import axios from "axios"
import './Navbar.css'
import { AnnulerSaCommande } from '../../Pages/Panier/Panier'

export const Navbar = () => {

  // Importation de la variable currentUser depuis la page AuthContext
  const {currentUser} = useContext(AuthContext)
  // Stock la fonction useNavigate dans navigate
  const navigate = useNavigate()

  // Bouton pour l'appuie du bouton déconnexion
  const handleClick = async e => {
    // Empêche la page de se rafraîchir
    e.preventDefault()

    // Si l'opération est un succès
    try{
      // La déconnexion peut s'enclencher
      await axios.post("http://localhost:4000/auth/deconnexion")
      // On supprimer l'objet "user" du localstorage
      localStorage.removeItem("user")
      // On vide le panier
      AnnulerSaCommande()
      // On navigue jusqu'à la page connexion
      navigate("/connexion")
      // On refraîchit la page pour afficher les nouveaux éléments
      window.location.reload()
    // S'il y a une erreur
    } catch(err){
      // On la retourne
      return err
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
