import express from "express";
import { getProduct, createProduct } from "../controllers/product.js";

const router = express.Router()

router.get("/products/:idproducts", getProduct)
router.post("/products", createProduct)

export default router