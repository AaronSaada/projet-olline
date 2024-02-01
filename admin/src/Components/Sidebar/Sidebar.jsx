import React from 'react'
import { Link } from 'react-router-dom'
import AjouterArticle from '../../assets/images/ajouter-article.png'
import ListeArticle from '../../assets/images/liste-article.png'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <Link to={'/addproduct'} className='ajouter-produits'>
        <div className='sidebar-item'>
          <img src={AjouterArticle} alt="Ajouter un article" />
          <p>Ajouter un article</p>
        </div>
      </Link>
      <Link to={'/listproduct'} className='liste-produits'>
        <div className='sidebar-item'>
          <img src={ListeArticle} alt="Liste des articles" />
          <p>Liste des articles</p> 
        </div>
      </Link>
    </div>
    
  )
}

export default Sidebar