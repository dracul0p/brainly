import mongoose, { Schema, model } from "mongoose";

const contentSchema = new Schema({
    title: { type: String, required: true },
    body: { type: Schema.Types.Mixed, required: true }, // Can be a string or array of strings
   type: { type: String, required: true }, // e.g., 'Project Ideas', 'Tweet', 'Article'
   tags:{ type:[String], default: [], },// Array of strings
    link: { type: String, required: false }, // Optional URL field
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
},
  { timestamps: true })

export const  ContentModel  = model("Content" ,contentSchema );
