import React from 'react'
import AccueilHerobannerImage from '../../../Components/assets/images/accueil-herobanner-image.png'
import StyledButton from '../../../Components/assets/StyledComponents/StyledButton'

function AccueilHerobanner() {
  return (
    <div className='accueil-herobanner-container'>
      <div className='accueil-herobanner-wrapper container'>
        <div className='accueil-herobanner-flex'>
          <div className='accueil-herobanner-text'>
            <h1>Découvrez notre nouvelle collection hiver</h1>
            <p>Plongez dans l'élégance chaleureuse de notre nouvelle collection d'hiver, où le style rencontre la saison glaciale avec des pièces qui vous enveloppent de confort et d'une touche de glamour hivernal.</p>
            <StyledButton className='accueil-herobanner-decouvrir'>Découvrir</StyledButton>
          </div>
          <div className='accueil-herobanner-image'>
            <img src={AccueilHerobannerImage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccueilHerobanner