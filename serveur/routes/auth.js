import express from "express";
import { connexion, deconnexion, inscription } from "../controllers/auth.js";
import limiter from "../RateLimiter.js";

const router = express.Router()

router.post("/connexion", limiter, connexion)
router.post("/inscription", inscription)
router.post("/deconnexion", deconnexion)

export default router