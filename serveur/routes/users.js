import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js"

const router = express.Router()

router.get("/getusers", getUsers)
router.post("/adduser", addUser)
router.put("/updateuser", updateUser)
router.delete("/delete/:idusers", deleteUser)

export default router