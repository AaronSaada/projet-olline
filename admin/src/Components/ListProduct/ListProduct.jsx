import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ListProduct.css'

function ListProduct() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try{
        const res = await axios.get("http://localhost:4000/listproduct");
        setProducts(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllProducts()
  }, [])

  return (
    <div className='listproduct-container admin-product-container'>
      <div className="products-container">
        {products?.map(product => (
          <div className="product-wrapper" key={product.id_products}>
            {product.image && <img src={product.image} alt={product.image} />}
            <h2>{product.name}</h2>
            <div className='product-prices-container'>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProduct