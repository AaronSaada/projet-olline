import './App.css';
import { Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Accueil/Accueil';
import Connexion from './Pages/Authentification/Connexion/Connexion';
import Inscription from './Pages/Authentification/Inscription/Inscription';
import Admin from './Pages/Admin/Admin';
import UpdateUsers from './Pages/Admin/AdminUsers/UpdateUsers';
import UpdateProduct from './Pages/Admin/AdminProduct/UpdateProduct';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Accueil />}/>
      <Route path='/connexion' element={<Connexion />}/>
      <Route path='/inscription' element={<Inscription />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/admin/updateusers/:idusers' element={<UpdateUsers />}/>
      <Route path='/admin/updateproduct/:idproducts' element={<UpdateProduct />}/>
    </Routes>
  );
}

export default App;
