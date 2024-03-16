import express from "express";
import { getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/product.js";

const router = express.Router()

router.get("/products", getProduct)
router.post("/addproduct", addProduct)
router.put("/updateproduct", updateProduct)
router.delete("/deleteproduct", deleteProduct)

export default router