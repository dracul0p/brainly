import { ContentModel } from "../models/content.model";
import mongoose from "mongoose";
import { Request, Response } from "express";
import { log } from "node:console";

interface AuthRequest extends Request {
  userId?: string;
}

export const getAllContent = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const contents = await ContentModel.find({
      userId: new mongoose.Types.ObjectId(req.userId),
    }).populate("userId", "username");
    res.json({ contents });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const addContent = async (req: AuthRequest, res: Response) => {
  try {
    const { title, body, type, tags, link } = req.body;
    // 🔥 check user exists

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newContent = await ContentModel.create({
      title,
      body,
      type,
      tags,
      link: link || undefined,
      //     It is NOT doing “OR logic” like true/false
      // Return the first truthy value, or the last value if none are truthy
      // 🔥 convert string → ObjectId
      userId: new mongoose.Types.ObjectId(req.userId),
    });

    res.json({ message: "Content added", content: newContent }); // Send success response.
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteContent = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { contentId } = req.params;
  
    console.log("contentId:", contentId);
    console.log("userId:", req.userId);

    if (!contentId) {
      return res.status(400).json({ message: "ContentId missing" });
    }

    const content = await ContentModel.findOneAndDelete({
      _id: contentId,
      userId: req.userId,
    });

    if (!content) {
      return res
        .status(404)
        .json({ message: "Content not found or unauthorized" });
    }

    res.json({ message: "Content deleted", content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
