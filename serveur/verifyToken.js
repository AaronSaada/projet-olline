import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({
    path: '../.env'
})


export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if(!token) return next(createError(401, "Vous n'êtes pas authentifié"))

  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if(err) return next(createError(403, "Votre token n'est pas valide"))
    req.user = user;
    next()
  })
}