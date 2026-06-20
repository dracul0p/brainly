import mongoose from "mongoose";

export const connectDB = async () =>{
  try{
     const uri = process.env.MONGO_URI;
     if (!uri) {
      throw new Error("MONGO_URI is missing in .env file");
    }

    await mongoose.connect(uri);
     console.log("mongodb connected sucessfully");
  }catch(error){
      console.error("Database connection failed:", error);
       process.exit(1);
  }
}