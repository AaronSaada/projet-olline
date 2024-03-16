import {useState} from 'react'
import AddUsers from './AdminUsers/AddUsers'
import UpdateUsers from './AdminUsers/UpdateUsers'
import AddProduct from './AdminProduct/AddProduct'
import UpdateProduct from './AdminProduct/UpdateProduct'
import './Admin.css'
import ListProduct from './AdminProduct/ListProduct'
import ListUsers from './AdminUsers/ListUsers'

function Admin() {

  const [activeTab, setActiveTab] = useState("addusers");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div className='admin-pannel-container'>
      <h1>Pannel Admin</h1>
      <div className='admin-tabs-button'>
        <button
          className={activeTab === "addusers" ? "active" : ""}
          onClick={() => handleTabChange("addusers")}
        >
          Ajouter un utilisateur
        </button>
        <button
            className={activeTab === "updateusers" ? "active" : ""}
            onClick={() => handleTabChange("updateusers")}
        >
          Modifier un utilisateur
        </button>
        <button
          className={activeTab === "addproduct" ? "active" : ""}
          onClick={() => handleTabChange("addproduct")}
        >
          Ajouter un produit
        </button>
        <button
            className={activeTab === "updateproduct" ? "active" : ""}
            onClick={() => handleTabChange("updateproduct")}
        >
          Modifier un produit
        </button>
      </div>
      <div className='admin-tabs-button'>
        <button
          className={activeTab === "listusers" ? "active" : ""}
          onClick={() => handleTabChange("listusers")}
        >
          Afficher les utilisateur
        </button>
        <button
            className={activeTab === "listproduct" ? "active" : ""}
            onClick={() => handleTabChange("listproduct")}
        >
          Afficher les produits
        </button>
      </div>
      <div className='admin-pannel-wrapper'>
        {(activeTab === "addusers") &&(
          <AddUsers />
        )}
        {(activeTab === "updateusers") &&(
          <UpdateUsers />
        )}
        {(activeTab === "addproduct") &&(
          <AddProduct />
        )}
        {(activeTab === "updateproduct") &&(
          <UpdateProduct />
        )}
        {(activeTab === "listusers") &&(
          <ListUsers />
        )}
        {(activeTab === "listproduct") &&(
          <ListProduct />
        )}
      </div>
      
      
    </div>
  )
}

export default Admin