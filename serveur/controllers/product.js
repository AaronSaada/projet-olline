export const getProduct = (req, res) => {
    
}

export const createProduct = (req, res) => {

    const q = "SELECT * FROM products"
  
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