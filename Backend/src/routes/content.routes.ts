import express from "express";
import {
  getAllContent,
  addContent,
  deleteContent,
} from "../controllers/content.controller";
import { authMiddleware } from "../middleware/auth.Middleware";

const router = express.Router();

router.get("/", authMiddleware, getAllContent);
router.post("/", authMiddleware, addContent);

// UPDATED route for deleting content
router.delete("/:contentId",authMiddleware, deleteContent);
// router.post("/share", contentController.manageShareLink);

export default router;
