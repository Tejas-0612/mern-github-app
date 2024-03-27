import { Router } from "express";
import { explorePopularRepos } from "../controllers/explore.controller.js";
import { ensureAuthenticated } from "../middleware/ensureauthenticated.js";

const router = Router();

router.get("/repos/:language", ensureAuthenticated, explorePopularRepos);

export default router;
