import './App.css';
import { Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Accueil/Accueil';
import Connexion from './Pages/Authentification/Connexion/Connexion';
import Inscription from './Pages/Authentification/Inscription/Inscription';
import Produits from './Pages/Produits/Produits'; 
import Admin from './Pages/Admin/Admin';
import UpdateUsers from './Pages/Admin/AdminUsers/UpdateUsers';
import UpdateProduct from './Pages/Admin/AdminProduct/UpdateProduct';
import { PrivateRoutesAdmin, PrivateRoutesAuthenticated } from './Components/Utils/ProtectedRoutes';
import Partenaires from './Pages/Partenaires/Partenaires';
import APropos from './Pages/APropos/APropos';
import { Panier } from './Pages/Panier/Panier';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [dataProduct, setDataProduct] = useState({})
  useEffect(() =>{
    const grabData = async () => {
      try{
        const res = await axios.get("http://localhost:4000/product/products")
        setDataProduct(res.data)
        localStorage.setItem("ListeProduits", JSON.stringify(dataProduct))
        if(!localStorage.getItem("panier")){
        localStorage.setItem("panier", [])
      }
      } catch(err) {
        console.error("Erreur dans la récupération de données.")
      }
    }
    grabData()
  })
  return (
    <Routes>
      <Route path='/' element={<Accueil />}/>
      <Route element={<PrivateRoutesAuthenticated/>}>
        <Route path='/connexion' element={<Connexion />}/>
        <Route path='/inscription' element={<Inscription />}/> 
      </Route>
      <Route element={<PrivateRoutesAdmin />}>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/admin/updateusers/:idusers' element={<UpdateUsers />}/>
        <Route path='/admin/updateproduct/:idproducts' element={<UpdateProduct />}/>
      </Route>
      <Route path='/produits' element={<Produits />}/>
      <Route path='/partenaires' element={<Partenaires/>}/>
      <Route path='/apropos' element={<APropos/>}/>
      <Route path='/panier' element={<Panier/>}/>
    </Routes>
  );
}

export default App;
