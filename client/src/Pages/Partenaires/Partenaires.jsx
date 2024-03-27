import Nike from "../../Components/assets/images/Nike.png"
import Adidas from "../../Components/assets/images/Adidas.png"
import Uniqlo from "../../Components/assets/images/uniqlo.png"
import Zalando from "../../Components/assets/images/zalando.png"
import Zara from "../../Components/assets/images/Zara.png"
import './Partenaires.css'

function Partenaires() {
  return (
    <div className='partenaires-container'>
        <div className='partenaires-wrapper'>
            <h1>Nos partenaires</h1>
            <div className='partenaires-contenu-container container'>
              <div className='partenaires-text'>
                <h2>Ils nous font confiance</h2>
                <p>
                  Dans l'univers numérique en constante évolution, Olline émerge comme un phare d'innovation et de collaboration. En tant que site à la pointe de la technologie, Olline s'efforce de tisser des liens solides et fructueux avec ses partenaires. Cette relation va bien au-delà d'un simple échange commercial, elle est façonnée par la confiance mutuelle, le respect et une vision commune de l'excellence.
                </p>
              </div>
              <div className='partenaires-images'>
                <img src={Nike} alt="Partenaire Nike"/>
                <img src={Adidas} alt="Partenaire Adidas"/>
                <img src={Uniqlo} alt="Partenaire Uniqlo"/>
                <img src={Zalando} alt="Partenaire Zalando"/>
                <img src={Zara} alt="Partenaire Zara"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Partenaires