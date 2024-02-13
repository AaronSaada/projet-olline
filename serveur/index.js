const port = 4000;
const express = require("express");
const app = express();
const mysql = require("mysql");
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
app.get('/listproduct', (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err,data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

// Création de produit
app.post("/addproduct", (req, res) => {
  const q = "INSERT INTO products (`name`,`old_price`,`new_price`,`category`,`image`,`description`) VALUES (?)"
  const values = [
    req.body.name,
    req.body.old_price,
    req.body.new_price,
    req.body.category,
    req.body.image,
    req.body.description
  ];
  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Le produit a bien été ajouté")
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