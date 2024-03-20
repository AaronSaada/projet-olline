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
                    <p>Pages</p>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/produits'>Produits</Link></li>
                    <li><Link to='/partenaires'>Nos partenaires</Link></li>
                    <li><Link to='/a-propos'>A propos</Link></li>
                </ul>
                <ul className="footer-liste">
                    <p>Chèques Cadeaux</p>
                    <li><Link to='/'>Offrir un chèque cadeau</Link></li>
                    <li><Link to='/'>Utiliser une carte cadeau</Link></li>
                    <li><Link to='/'>Chèques cadeaux d'entreprise</Link></li>
                </ul>
                <ul className="footer-liste">
                    <p>Olline</p>
                    <li><Link to='/'>Emplois</Link></li>
                    <li><Link to='/'>Question marketing</Link></li>
                    <li><Link to='/'>Abonnements</Link></li>
                </ul>
                <ul className="footer-liste">
                    <p>Nos services</p>
                    <li><Link to='/'>Programme partenaire</Link></li>
                    <li><Link to='/'>Olline Marketing Service</Link></li>
                    <li><Link to='/'>Nous contacter</Link></li>
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