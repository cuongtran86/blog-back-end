import express from "express";
import { addUser } from "../controller/users";

const router = express.Router();
// @ts-ignore
router.get("/test", addUser);

export default router;