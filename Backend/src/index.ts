import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db";
// import cors from "cors";

import userRoutes from "./routes/user.routes";
import contentRoutes from "./routes/content.routes";

const port = process.env.PORT || 5000;

const app = express();
// app.use(cors());
app.use(express.json());

app.use("/api/v1/", userRoutes);
app.use("/api/v1/content",contentRoutes );

app.get("/", (req, res) => {
  res.send("hi");
});



// Create a shareable link for your second brain
app.post("/api/v1/brain/share", (req, res) => {
  res.send("Hello World");
});

// Fetch another user's shared brain content
app.get("/api/v1/brain/share", (req, res) => {
  res.send("Hello World");
});


const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("DB or server connection failed:", err);
    process.exit(1);
  }
};

startServer();
// dmuyXnVSxPn1eodk
// asheeshrawat48_db_user