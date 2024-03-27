import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { AjouterLeProduitAuPanier, EnleverUneQuantiteDuPanier } from '../../Panier/Panier'

function CarteProduits() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/product/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='accueil-vedette-container'>
      <div className='accueil-vedette-wrapper container'>
        <div className='produits-vedette-container'>
          {products && products.map((product) => (
            <div className='produits-vedette-wrapper'>
              <Link to={`products/${product.name}`}>
                <img src={product.image || Image } alt={product.image || "Image introuvable"} className='product-image'/>
              </Link>
              <p className='product-name'>{product.name}</p>
              <button onClick={() => AjouterLeProduitAuPanier(product.id_products)}>Ajouter au panier</button>
              <button onClick={() => EnleverUneQuantiteDuPanier(product.id_products)}>Retirer 1 du panier</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarteProduits