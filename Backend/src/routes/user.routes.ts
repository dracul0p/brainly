import express from "express";

import {createUser , getUsers} from "../controllers/user.controller";

const router = express.Router();

router.post("/signin", createUser);

router.post("/signup", getUsers);

export default router;