import exppress from "express";
import {signup} from "../controllers/authController.js"

const router = exppress.Router();


router.get("/signup",signup);



export default router ;