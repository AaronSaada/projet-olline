import React from 'react'
import './Accueil.css'
import AccueilHerobanner from './AccueilHerobanner/AccueilHerobanner'
import AccueilVedettes from './AccueilVedettes/AccueilVedettes'

function Accueil() {
  return (
    <div className='accueil-container'>
      <AccueilHerobanner />
      <AccueilVedettes />
    </div>
  )
}

export default Accueil