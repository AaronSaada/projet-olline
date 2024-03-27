import "./Footer.css"
import { Link } from "react-router-dom"
import Facebook from '../assets/images/facebook.png'
import X from '../assets/images/x.png'
import Youtube from '../assets/images/youtube.webp'
import linkedin from '../assets/images/linkedin.png'

function Footer() {
  return (
    <footer>
        <div className="footer-wrapper">
            <div className="footer-flex">
                <ul className="footer-liste">
                    <p>Olline</p>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/produits'>Produits</Link></li>
                    <li><Link to='/partenaires'>Nos partenaires</Link></li>
                    <li><Link to='/apropos'>A propos</Link></li>
                </ul>
                <ul className="footer-liste">
                    <p>Sécurité et vie privée</p>
                    <li><a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/rediger-des-conditions-generales-dutilisation" target="_blank">Conditions Générales d'Utilisation</a></li>
                    <li><a href="https://www.cnil.fr/fr" target="_blank">CNIL</a></li>
                    <li><a href="https://entreprendre.service-public.fr/vosdroits/F33527#:~:text=Les%20conditions%20générales%20de%20vente%20ont%20pour%20objectif%20de%20donner,vente%20dans%20votre%20échange%20commercial." target="_blank">Conditions Générales de Vente</a></li>
                    <li><a href="https://www.economie.gouv.fr/politique-confidentialite" target="_blank">Politique de Confidentialité</a></li>
                    <li><a href="https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on" target="_blank">Loi RGPD</a></li>
                </ul>
            </div>
            <div className="footer-social-media">
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank"><img src={Facebook} alt="Lien Facebook Olline"/></a></li>
                    <li><a href="https://www.x.com" target="_blank"><img src={X} alt="Lien X Olline"/></a></li>
                    <li><a href="https://www.youtube.com" target="_blank"><img src={Youtube} alt="Lien Youtube Olline"/></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank"><img src={linkedin} alt="Lien LinkedIn Olline"/></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer