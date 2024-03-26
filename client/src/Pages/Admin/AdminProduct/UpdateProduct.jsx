import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios";

function UpdateProduct() {

  const [productDetails, setProductDetails] = useState({
    name:"",
    old_price:0,
    new_price:0,
    category:"men",
    image:"",
    description:""
  })

  const navigate = useNavigate()
  const location  = useLocation()

  const productId = location.pathname.split("/")[3]

  const [err, setErr] = useState(false); 

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails, [e.target.name]:e.target.value
    })
  }
  console.log(productDetails)

  const handleClick = async () => {
    try{
      await axios.put("http://localhost:4000/product/updateproduct/" + productId, productDetails)
      navigate("/admin")
    } catch(err){
      setErr(err)
      console.log(err)
    }
  }

  return (
    <div className='update-container admin-product-container'>
      <div className="update-wrapper">
        <h2>Modification du produit</h2>
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
        <div className='addproduct-image-flex'>
          <div className="addproduct-item-field">
            <label htmlFor='file-input'>
              <img src="" alt='Téléversez une image' className='upload-button'/>
            </label>
            <input type="file" name='image' id='file-input' hidden/>
          </div>
          {err && <p>{err}</p>}
          <button className='addproduct-button' onClick={() => {handleClick()}}>Appliquer les modifications</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct