import React from 'react'
import ProduitsHerobanner from "./ProduitsHerobanner/ProduitsHerobanner"
import Filtre from './Filtre/Filtre'
import CarteProduits from './CarteProduits/CarteProduits'
import './Produits.css'

function Produits() {
  return (
    <div className='produits-container'>
        <ProduitsHerobanner />
        <div className='produits-flex'>
            <Filtre />
            <div className='carte-produits-flex'>
              <h2>PRODUITS</h2>   
              <CarteProduits />
            </div>
        </div>
    </div>
  )
}

export default Produits