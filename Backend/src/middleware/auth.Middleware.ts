import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
// Importing the JWT secret key from a configuration file
import { env } from "../config/env";

// Middleware to validate user authentication using a JWT token.

interface AuthRequest extends Request {
  userId?: string;
}

// Define expected JWT payload shape
interface TokenPayload extends JwtPayload {
  id: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Extract the "authorization" header from the request.
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing or malformed" });
    }

    // 2. Extract token :
    const token = authHeader.split(" ")[1];
    // make sure its (string not undefile)
    if (!token) {
      return res.status(401).json({
        message: "Invalid token format",
      });
    }
   // Verify token
    const decoded = jwt.verify(token, env.JWT_SECRET);
    // make sure ist (jwtpayload not string)
    if (typeof decoded === "string") {
      return res.status(401).json({ message: "Invalid token" });
    }

    // if (decoded) {
    //   // overide the types of express req object use @ts-ignore

    //   // @ts-ignore
    //   // 4. Attach user
    //   req.userId = decoded.id;
    //   // 5. Next middleware
    //   next();
    // }

    // Type assertion for payload
    const payload = decoded as TokenPayload;

    req.userId = payload.id; // ✅ no ts-ignore needed
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
