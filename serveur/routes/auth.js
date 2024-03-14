import express from "express";
import { connexion, deconnexion, inscription } from "../controllers/auth.js";

const router = express.Router()

router.post("/connexion", connexion)
router.post("/inscription", inscription)
router.post("/deconnexion", deconnexion)

export default router