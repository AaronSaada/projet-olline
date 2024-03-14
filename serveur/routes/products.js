import express from "express";
import { getProduct } from "../controllers/product";

const router = express.Router()

router.get("/products/:idusers", getProduct)

export default router