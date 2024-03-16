import { useState, useEffect } from 'react'
import axios from 'axios'

function AccueilVedettes() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/product/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='accueil-vedette-container'>
      <div className='accueil-vedette-wrapper container'>
        <h2>Produits vedettes</h2>
        <div className='produits-vedette-container'>
          {products && products.map((product) => (
            <div className='produits-vedette-wrapper'>
              <img src={product.image} alt={product.image || "Image introuvable"}/>
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccueilVedettes