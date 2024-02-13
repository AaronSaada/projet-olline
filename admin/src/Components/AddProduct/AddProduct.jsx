import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './AddProduct.css'
import Upload from '../../assets/images/upload.png'

function AddProduct() {

  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name:"",
    old_price:"",
    new_price:"",
    category:"",
    image:"",
    description:"",
  });

  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  }

  const handleChange = (e) => {
    setProductDetails( prev =>( {
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:4000/addproduct", productDetails);
      navigate("/listproduct");
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='addproduct-container admin-product-container'>
      <div className='addproduct-item-field'>
        <label htmlFor='name'>Intitulé du produit</label>
        <input type='text' name='name' id='name' placeholder="Entrez l'intitulé du produit" value={productDetails.name} onChange={handleChange} />
      </div>
      <div className='addproduct-price'>
        <div className="addproduct-item-field">
          <label htmlFor='old_price'>Prix d'origine</label>
          <input type='text' name='old_price' id='old_price' placeholder="Entrez le prix d'origine" value={productDetails.old_price} onChange={handleChange}/>
        </div>
        <div className="addproduct-item-field">
          <label htmlFor='new_price'>Prix après réduction</label>
          <input type='text' name='new_price' id='new_price' placeholder='Entrez le prix après réduction' value={productDetails.new_price} onChange={handleChange}/>
        </div>
      </div>
      <div className="addproduct-item-field">
      <label htmlFor='description'>Description du produit</label>
        <textarea name='description' id='description' placeholder='Entrez la description du produit' value={productDetails.description} onChange={handleChange}></textarea>
      </div>
      <div className="addproduct-item-field">
        <label htmlFor='category'>Catégorie du produit</label>
        <select name='category' id='category' className='add-product-selector' value={productDetails.category} onChange={handleChange}>
          <option value="">-- Choissez une catégorie</option>
          <option value="men">Homme</option>
          <option value="women">Femme</option>
          <option value="kid">Enfant</option>
          <option value="baby">Nourisson</option>
        </select>
      </div>
      <div className='addproduct-image-flex'>
        <div className="addproduct-item-field">
          <label htmlFor='file-input'>
            <img src={image ? URL.createObjectURL(image) : Upload} alt='Téléversez une image' className='upload-button'/>
          </label>
          <input type="file" name='image' id='file-input' onChange={handleImage} hidden/>
        </div>
        <button className='addproduct-button' onClick={handleClick}>Ajouter le produit</button>
      </div>
    </div>
  )
}

export default AddProduct