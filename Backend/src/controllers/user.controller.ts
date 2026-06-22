import { Request, Response } from "express";
import bcrypt from "bcrypt";
// import model
import  {User}  from "../models/user.model";
import { z } from "zod";
import jwt from "jsonwebtoken";
// import { log } from "node:console";


export const signup = async (req: Request, res: Response) => {
  try{
   
    const {password , username , email} = req.body;
      // Step 2: Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
       // Step 3: Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });

  }catch(error){
     console.error("Signup Error:", error);
      return res.status(500).json({
      message: "Server Error in signup",
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  try{
     const { email, password } = req.body;
      // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

     // Generate JWT
    const token = jwt.sign( { userId: user._id},process.env.JWT_SECRET as string,{expiresIn: "7d"}
    );
    

    return res.status(200).json({
      message: "Signin successful",
      user,
      token
    });
    
  }catch(error){
    console.error("Signin Error:", error);
    return res.status(500).json({
      message: "Server Error in signin",
    });
  }
};


  export const getUsers = async (req: Request, res: Response) => {
  try {
   const users = await User.find().select("-password");

    return res.status(200).json({
      count: users.length,
      users,
    });

  } catch (error) {
    console.error("Get Users Error:", error);

    return res.status(500).json({
      message: "Server Error in getUsers",
    });
  }
};