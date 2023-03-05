import express from "express";
import { addBlog } from "../controller/blog";

const router = express.Router();
// @ts-ignore
router.get("/test", addBlog);

export default router;