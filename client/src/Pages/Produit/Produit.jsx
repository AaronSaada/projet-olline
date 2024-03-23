import { useState, useEffect } from 'react'
import axios from 'axios'
import './Produit.css'


function Produit() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/product/products/" + products.name)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='produit-container'>
      <div className='produit-wrapper container'>
        {products && products.map((product) => (
          <div className='produits-vedette-wrapper'>
            <img src={product.image} alt={product.image || "Image introuvable"} className='product-image'/>
            <p className='product-name'>{product.name}</p>
          </div>
        ))}
      </div>
    </div>  
  )
}

export default Produit