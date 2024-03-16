import { useEffect, useState } from 'react'
import axios from 'axios'

function ListProduct() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/product/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='list-products-container admin-product-container'>
      <h2>Ajouter un produit</h2>
      <div className='list-product-container'>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix d'origine</th>
              <th>Prix après réduction</th>
              <th>Catégorie</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.old_price}</td>
                <td>{product.new_price}</td>
                <td>{product.category}</td>
                <td>{product.image}</td>
                <td>{product.description}</td>
                <div className='table-flex'>
                  <button>Modifier</button>
                  <button className='bouton-supprimer'>Supprimer</button>
                </div>
                
              </tr>
            ))}
          </tbody>
          
        </table>
        
      </div>
    </div>
      
  )
}

export default ListProduct