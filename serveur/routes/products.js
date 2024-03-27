import express from "express";
import { getProduct, getOneProduct, addProduct, updateProduct, deleteProduct } from "../controllers/product.js";

const router = express.Router()

router.get("/products", getProduct)
router.get("/products/:name", getOneProduct)
router.post("/addproduct", addProduct)
router.put("/updateproduct/:id_products", updateProduct)
router.delete("/deleteproduct/:id_products", deleteProduct)

export default router