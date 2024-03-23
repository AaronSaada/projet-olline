import './App.css';
import { Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Accueil/Accueil';
import Connexion from './Pages/Authentification/Connexion/Connexion';
import Inscription from './Pages/Authentification/Inscription/Inscription';
import Produits from './Pages/Produits/Produits'; 
import Produit from './Pages/Produit/Produit';
import Admin from './Pages/Admin/Admin';
import UpdateUsers from './Pages/Admin/AdminUsers/UpdateUsers';
import UpdateProduct from './Pages/Admin/AdminProduct/UpdateProduct';
import {PrivateRoutesAdmin, PrivateRoutesAuthenticated} from './Components/Utils/ProtectedRoutes';
import Partenaires from './Pages/Partenaires/Partenaires';


function App() {

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
      <Route path='/produits/products/:name' element={<Produit />}/>
      <Route path='/partenaires' element={<Partenaires/>}/>
    </Routes>
  );
}

export default App;
