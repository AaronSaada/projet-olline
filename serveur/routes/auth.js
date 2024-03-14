import express from "express";
import { getAuth } from "../controllers/auth";

const router = express.Router()

router.get("/uauth", getAuth)

export default router