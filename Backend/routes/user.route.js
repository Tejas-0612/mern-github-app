import { Router } from "express";
import {
  getLikes,
  getUserProfileAndRepos,
  likeProfile,
} from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureauthenticated.js";

const router = Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes", ensureAuthenticated, getLikes);
router.post("/like/:username", ensureAuthenticated, likeProfile);

export default router;
