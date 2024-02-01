const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDB
mongoose.connect("mongodb+srv://ollineadmin:Olline03p266588!@cluster0.gp7tau6.mongodb.net/olline");

// Création de l'API

app.get("/", (req, res) => {
  res.send("L'application Express est en marche");
})

// Stock d'images
const storage = multer.diskStorage({
  destination: './upload/images',
  // Permet de donner un nom unique à un fichier
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage
});

app.use('/images', express.static('upload/images'));

// Creation de l'url de chaque image
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success : 1,
    imageURL : `http://localhost:${port}/images/${req.file.filename}`
  })
})

// Création du schéma de produits
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  new_price: {
    type: Number,
    required: true
  },
  old_price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true
  }
})

// Ajout d'un produit selon le schéma
app.post('/addproduct', async (req, res) => {

  let products = await Product.find({});
  let id;

  if(products.length > 0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1; 
  }else{
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  console.log(product);
  await product.save();

  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name
  })

})

// Suppression de produit
app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({
    id: req.body.id
  });
  console.log("Produit supprimé");
  res.json({
    success: true,
    name: req.body.name
  })
})

// Récupérer tout les produits
app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log("Tout les produits ont bien été récupérés");
  res.send(products);
})


app.listen(port, (error)=>{
  // Si il n'y a aucune erreur, on affiche dans la console "Connecté sur le port 4000
  if(!error){
    console.log("Connecté sur le port " + port)
  // Si il y a une erreur, on affiche l'erreur dans la console
  } else{
    console.log("Error : " + error)
  }
})