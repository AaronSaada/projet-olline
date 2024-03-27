import './APropos.css'
import Thispersondoesnotexist from '../../Components/assets/images/thispersondoesnotexist.jpeg'
import Thispersondoesnotexist2 from '../../Components/assets/images/thispersondoesnotexist2.jpeg'

function APropos() {
  return (
    <div className='apropos-container'>
      <div className='apropos-wrapper'>
        <div className='qui-sommes-nous container'>
          <h1>Qui sommes nous ?</h1>
          <p>
            L'équipe d'Olline est une fusion dynamique de talents créatifs et techniques. Composée de passionnés de la mode et d'experts en technologie, elle travaille de concert pour offrir une expérience client exceptionnelle. Avec son engagement commun envers l'innovation et la qualité, l'équipe d'Olline repousse constamment les limites pour créer un univers en ligne où la mode rencontre la technologie avec élégance et style.
          </p>
        </div>
        <div className='apropos-membre container'>
          <div className='apropos-membre-image'>
            <img src={Thispersondoesnotexist} alt='PDG Olline'/>
          </div>
          <div className='apropos-membre-description'>
            <h2>Nicolas Renaud - PDG de Olline</h2>
            <p>
              Nicolas Renaud a fondé Olline en combinant sa passion pour la mode avec son expertise en technologie. Fort de son expérience dans le commerce électronique, il a lancé son magasin de vêtements en ligne, Olline, en utilisant une approche axée sur l'expérience utilisateur et la qualité des produits. Avec une vision claire et un dévouement sans faille, il a transformé son idée en une plateforme florissante, offrant aux clients une expérience shopping en ligne exceptionnelle.
            </p>
          </div>
        </div>
        <div className='apropos-membre container'>
          <div className='apropos-membre-image'>
            <img src={Thispersondoesnotexist2} alt='PDG Olline'/>
          </div>
          <div className='apropos-membre-description'>
            <h2>Thomas Fernandez - Community Manager</h2>
            <p>
              Thomas Fernandez, en tant que community manager chez Olline, est le maestro des interactions en ligne. Avec son expertise en médias sociaux et sa passion pour la mode, il crée des connexions authentiques avec la communauté d'Olline. Toujours à l'écoute, il orchestre des conversations dynamiques et stimulantes, faisant de chaque interaction une expérience mémorable pour les clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APropos