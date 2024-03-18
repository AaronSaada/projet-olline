import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

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
                <img src={product.image} alt={product.image || "Image introuvable"} className='product-image'/>
              </Link>
              <p className='product-name'>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarteProduits