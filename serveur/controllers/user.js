import { db } from "../connect.js"

export const getUsers = (req, res) => {
    const q = "SELECT * FROM users"

    db.query(q, (err, data) => {
      if(err) return res.json("Echec lors de la récupération des utilisateurs")
      return res.json(data)
    })
}


export const addUser = async (req, res, next) => {

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

export const deleteUser = async (req, res, next) => {

  const userId = req.params.idusers;
  const q = "DELETE FROM users WHERE idusers = ?"

  db.query(q, [userId], (err, data) => {
    if(err) return res.status(500).json(err)
    return res.status(200).json("Le compte utilisateur a bien été supprimé.")
  })

}

export const updateUser = async (req, res, next) => {

  

}