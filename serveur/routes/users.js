import express from "express";
import { getUser } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router()

router.get("/users/:idusers", verifyToken, getUser)

export default router