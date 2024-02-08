const port = 4000;
const express = require("express");
const app = express();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "olline_database"
})

app.get("/", (req, res) => {
  res.json("Connecté au backend");
})

// Récupération de tous les utilisateurs
app.get('/users', (req,res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

// Récupérer tous les produits
app.get('/products', async (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err,data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

// Création de produit
app.post("/addproduct", (req, res) => {
  const q = "INSERT INTO products (`name`,`old_price`,`new_price`,`category`,`image`,`description` VALUES (?)"
  const values = [
    "name from backend",
    13.10,
    1.10,
    "Homme",
    "Homme",
    "name from backend"
  ];
  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Le produit a été créé avec succès.")
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

app.listen(port, (error)=>{
  // Si il n'y a aucune erreur, on affiche dans la console "Connecté sur le port 4000
  if(!error){
    console.log("Connecté sur le port " + port)
  // Si il y a une erreur, on affiche l'erreur dans la console
  } else{
    console.log("Erreur : " + error)
  }
})