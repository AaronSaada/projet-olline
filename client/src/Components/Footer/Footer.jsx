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
                    <li><Link to="www.facebook.com" target="_blank"><img src={Facebook} alt="Lien Facebook Olline"/></Link></li>
                    <li><Link to="www.x.com" target="_blank"><img src={X} alt="Lien X Olline"/></Link></li>
                    <li><Link to="www.youtube.com" target="_blank"><img src={Youtube} alt="Lien Youtube Olline"/></Link></li>
                    <li><Link to="www.linkedin.com" target="_blank"><img src={linkedin} alt="Lien LinkedIn Olline"/></Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer