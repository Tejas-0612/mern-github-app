import { Router } from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = Router();

router.get("/profile/:username", getUserProfileAndRepos);

export default router;
