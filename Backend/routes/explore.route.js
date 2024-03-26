import { Router } from "express";
import { explorePopularRepos } from "../controllers/explore.controller.js";

const router = Router();

router.get("/repos/:language", explorePopularRepos);

export default router;
