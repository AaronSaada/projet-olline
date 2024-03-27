import { db } from "../connect.js"

export const getProduct = (req, res) => {
  const q = "SELECT * FROM products"

  db.query(q, (err, data) => {
    if(err) return res.json("Echec lors de la récupération des produits")
    return res.json(data)
  })
}

export const getOneProduct = (req, res) => {

  const q = "SELECT * FROM products WHERE name = ?"

  db.query(q, (err, data) => {
    if(err) return res.json("Echec lors de la récupération du produit")
    return res.json(data)
  })
}

export const addProduct = (req, res) => {

  const q = "SELECT * FROM products"

  db.query(q, [req.body.name], (err, data) => {
    if(err) return res.status(500).json(err)
    const q = "INSERT INTO products (`name`, `old_price`, `new_price`, `category`, `description`, `quantity`) VALUE (?)"
    const values = [
      req.body.name,
      req.body.old_price,
      req.body.new_price,
      req.body.category,
      req.body.description,
      req.body.quantity
    ]

    db.query(q, [values], (err, data) => {
      if(err) return res.status(500).json(err)
      return res.status(200).json("Le produit a été ajouté avec succès")
    })
  })
}

export const deleteProduct = async (req, res, next) => {

  const productId = req.params.id_products;
  const q = "DELETE FROM products WHERE id_products = ?"

  db.query(q, [productId], (err, data) => {
    if(err) return res.status(500).json(err)
    return res.status(200).json("Le produit a bien été supprimé.")
  })

}

export const updateProduct = async (req, res, next) => {

  const productId = req.params.id_products;
  const q = "UPDATE products SET `name`= ?, `old_price`= ?, `new_price`= ?, `category`= ?, `image`= ?, `description`= ?, `quantity`= ? WHERE id_products = ?"

  const values =[
    req.body.name,
      req.body.old_price,
      req.body.new_price,
      req.body.category,
      req.body.image,
      req.body.description,
      req.body.quantity
  ]

  db.query(q, [...values, productId], (err, data) => {
    if(err) return res.status(500).json(err)
    return res.status(200).json("Le produit a bien été modifié.")
  })

}