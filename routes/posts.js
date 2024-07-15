import express from "express";
import { allPosts, createPosts, deletePosts, limitPosts, updatePosts } from "../controller/postController.js";
const router = express.Router();
const port = process.env.PORT || 8000;



router.get("/:id",allPosts );
// query
router.get("/",limitPosts );
// CRUD
// create
router.post("/", createPosts);
// Update
router.put("/:id", updatePosts);
// Delete
router.delete("/:id", deletePosts);
export default router;
