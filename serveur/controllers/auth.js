import { db } from "../connect.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({
    path: '../.env'
})

export const inscription = (req, res) => {
  
  const q = "SELECT * FROM users WHERE email = ?"

  db.query(q, [req.body.email], (err, data) => {
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("Cet email est déjà rattachée à un compte.")

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    const q = "INSERT INTO users (`lastname`, `firstname`, `email`, `password`, `dateOfBirth`, `address`) VALUE (?)"

    const values = [
      req.body.lastname,
      req.body.firstname,
      req.body.email,
      hashedPassword,
      req.body.dateOfBirth,
      req.body.address
    ]

    db.query(q, [values], (err, data) => {
      if(err) return res.status(500).json(err)
      return res.status(200).json("Le compte utilisateur a bien été créé.")
    })
  })

}

export const connexion = (req, res) => {

  const q = "SELECT * FROM users WHERE email = ?"

  db.query(q, [req.body.email], (err, data) => {
    if(err) return res.status(500).json(err)
    if(data.length === 0) return res.status(404).json("Veuillez remplir les champs")

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

    if(!checkPassword) return res.status(400).json("Mauvaise combinaison Email / Mot de passe")

    const token = jwt.sign(
      {
        id:data[0].id
      }, 
      process.env.JWT_SECRET, 
      {
        expiresIn: 60 * 60 * 24
      }
    )

    const {password, ...others} = data[0]

    res.cookie("accessToken", token, {
      httpOnly: false,
      expire: 60 * 60 * 24
    }).status(200).json(others)
  })

}

export const deconnexion = (req, res) => {
 res.clearCookie("accessToken", {
  secure: true,
  sameSite: none
 }).status(200).json("Déconnexion réussie.")
}