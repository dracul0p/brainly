import mongoose from "mongoose";
import { env } from "../config/env";

export const connectDB = async () =>{
  try{
     const uri = env.DB_URL;
     if (!uri) {
      throw new Error("DB_URL is missing in .env file");
    }

    await mongoose.connect(uri);
     console.log("mongodb connected sucessfully");
  }catch(error){
      console.error("Database connection failed:", error);
       process.exit(1);
  }
}