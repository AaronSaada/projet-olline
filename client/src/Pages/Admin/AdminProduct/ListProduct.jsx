import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ListProduct() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/product/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = async (id_products) => {

    try{
      await axios.delete("http://localhost:4000/product/deleteproduct/" + id_products)
      window.location.reload()
    }catch(err) {
      console.log(err)
    }

  }

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
                <td><img src={product.image}/></td>
                <td>{product.description}</td>
                <div className='table-flex'>
                  <button><Link to={`/admin/updateproduct/${product.id_products}`}>Modifier</Link></button>
                  <button className='bouton-supprimer' onClick={() => handleDelete(product.id_products)}>Supprimer</button>
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