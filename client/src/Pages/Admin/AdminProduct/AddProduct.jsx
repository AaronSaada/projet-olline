import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function AddProduct() {

  const [productDetails, setProductDetails] = useState({
    name:"",
    old_price:0,
    new_price:0,
    category:"men",
    description:"",
    quantity:0,
  })

  const navigate = useNavigate()

  const [err, setErr] = useState(false); 

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails, [e.target.name]:e.target.value
    })
  }

  const handleClick = async () => {
    try{
      await axios.post("http://localhost:4000/product/addproduct", productDetails)
      navigate("/admin")
    } catch(err){
      setErr(err)
      console.log(err)
    }
  }

  return (
    <div className='adduser-container admin-product-container'>
      <h2>Ajouter un produit</h2>
      <div className='addproduct-item-field'>
        <label htmlFor='name'>Intitulé du produit</label>
        <input 
          type='text' 
          name='name' 
          id='name' 
          placeholder="Entrez l'intitulé du produit" 
          value={productDetails.name} 
          onChange={handleChange} 
        />
      </div>
      <div className='addproduct-price'>
        <div className="addproduct-item-field">
          <label htmlFor='old_price'>Prix d'origine</label>
          <input 
            type='text' 
            name='old_price' 
            id='old_price' 
            placeholder="Entrez le prix d'origine" 
            value={productDetails.old_price}
            onChange={handleChange}
          />
        </div>
        <div className="addproduct-item-field">
          <label htmlFor='new_price'>Prix après réduction</label>
          <input 
            type='text' 
            name='new_price' 
            id='new_price' 
            placeholder='Entrez le prix après réduction' 
            value={productDetails.new_price} 
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="addproduct-item-field">
        <label htmlFor='description'>Description du produit</label>
        <textarea 
          name='description' 
          id='description' 
          placeholder='Entrez la description du produit' 
          value={productDetails.description} 
          onChange={handleChange}>
        </textarea>
      </div>
      <div className="addproduct-item-field">
        <label htmlFor='category'>Catégorie du produit</label>
        <select 
          name='category' 
          id='category' 
          className='add-product-selector' 
          value={productDetails.category} 
          onChange={handleChange}
        >
          <option value="men">Homme</option>
          <option value="women">Femme</option>
          <option value="kid">Enfant</option>
          <option value="baby">Nourisson</option>
        </select>
      </div>
      {err && <p>{err}</p>}
      <div className="adduser-button-container">
        <button className='addproduct-button' onClick={() => {handleClick()}}>Ajouter le produit</button>
      </div>
    </div>
  )
}

export default AddProduct