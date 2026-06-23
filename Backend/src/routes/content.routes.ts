import express from "express";
import {
  getAllContent,
  addContent,
  deleteContent,
  manageShareLink,
  searchContent,
} from "../controllers/content.controller";
import { authMiddleware } from "../middleware/auth.Middleware";

const router = express.Router();

router.get("/", authMiddleware, getAllContent);
router.post("/", authMiddleware, addContent);

// UPDATED route for deleting content
router.delete("/:contentId", authMiddleware, deleteContent);

// search with regex route
router.get("/search", searchContent);

router.post("/share", authMiddleware, manageShareLink);

export default router;
