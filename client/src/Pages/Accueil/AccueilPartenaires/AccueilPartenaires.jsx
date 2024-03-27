import Nike from "../../../Components/assets/images/Nike.png"
import Adidas from "../../../Components/assets/images/Adidas.png"
import Uniqlo from "../../../Components/assets/images/uniqlo.png"
import Zalando from "../../../Components/assets/images/zalando.png"
import Zara from "../../../Components/assets/images/Zara.png"

function Partenaires() {
  return (
    <div className="accueil-partenaires-container">
        <div className="partenaires-scroller">
            <ul className="partenaires-liste scroller__inner">
                <li><img src={Nike} alt="Partenaire Nike"/></li>
                <li><img src={Adidas} alt="Partenaire Adidas"/></li>
                <li><img src={Uniqlo} alt="Partenaire Uniqlo"/></li>
                <li><img src={Zalando} alt="Partenaire Zalando"/></li>
                <li><img src={Zara} alt="Partenaire Zara"/></li>
            </ul>
        </div>
    </div>
    
  )
}

export default Partenaires