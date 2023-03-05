import express from "express";
import { register, login, logout } from "../controller/auth";

const router = express.Router();

router.post("register", register);
router.post("login", login);
router.post("logout", logout);




// @ts-ignore
// router.get("/test", addauth);

export default router;