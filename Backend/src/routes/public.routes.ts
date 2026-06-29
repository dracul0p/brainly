import { Router } from "express";

import { getPublicContent } from "../controllers/content.controller";

const router = Router();

router.get("/brain/:shareLink", getPublicContent);

export default router;
