import React, { useState } from 'react'
import './AddProduct.css'
import Upload from '../../assets/images/upload.png'

function AddProduct() {

  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"men",
    description:"",
    new_price:"",
    old_price:"",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails, [e.target.name]:e.target.value
    })
  }

  const addProduct = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if(responseData.success){
      product.image = responseData.imageURL;
      console.log(product);
      await fetch('http://localhost/4000/addproduct', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then(() => {
        data.success ? alert("Produit ajouté avec succès") : alert("Echec de l'opération");
      })
    }
  }

  return (
    <div className='addproduct-container admin-product-container'>
      <div className='addproduct-item-field'>
        <label htmlFor='name'>Intitulé du produit</label>
        <input type='text' name='name' id='name' placeholder="Entrez l'intitulé du produit" value={productDetails.name} onChange={changeHandler} />
      </div>
      <div className='addproduct-price'>
        <div className="addproduct-item-field">
          <label htmlFor='old_price'>Prix d'origine</label>
          <input type='text' name='old_price' id='old_price' placeholder="Entrez le prix d'origine" value={productDetails.old_price} onChange={changeHandler}/>
        </div>
        <div className="addproduct-item-field">
          <label htmlFor='new_price'>Prix après réduction</label>
          <input type='text' name='new_price' id='new_price' placeholder='Entrez le prix après réduction' value={productDetails.new_price} onChange={changeHandler}/>
        </div>
      </div>
      <div className="addproduct-item-field">
      <label htmlFor='description'>Description du produit</label>
        <textarea name='description' id='description' placeholder='Entrez la description du produit' value={productDetails.description} onChange={changeHandler}></textarea>
      </div>
      <div className="addproduct-item-field">
        <label htmlFor='category'>Catégorie du produit</label>
        <select name='category' id='category' className='add-product-selector' value={productDetails.category} onChange={changeHandler}>
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
          <input type="file" name='image' id='file-input' onChange={imageHandler} hidden/>
        </div>
        <button className='addproduct-button' onClick={() => {addProduct()}}>Ajouter le produit</button>
      </div>
    </div>
  )
}

export default AddProduct