import React from 'react'
import './Accueil.css'
import AccueilHerobanner from './AccueilHerobanner/AccueilHerobanner'
import AccueilVedettes from './AccueilVedettes/AccueilVedettes'
import Partenaires from './AccueilPartenaires/AccueilPartenaires'

function Accueil() {
  return (
    <div className='accueil-container'>
      <AccueilHerobanner />
      <AccueilVedettes />
      <Partenaires/>
    </div>
  )
}

export default Accueil