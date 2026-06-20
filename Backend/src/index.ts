import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db";
// import cors from "cors";

const port = process.env.PORT || 5000;


const app = express();
// app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.post("/api/v1/signup", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/signin", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/content", (req, res) => {
  res.send("Hello World");
});

app.delete("/api/v1/content", (req, res) => {
  res.send("Hello World");
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
    console.error("DB connection failed:", err);
    process.exit(1);
  }
};

startServer();
// dmuyXnVSxPn1eodk
// asheeshrawat48_db_user