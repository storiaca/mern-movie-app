import { Router } from "express";
import { listMovies } from "../controllers/movies";

const router = Router();

router.get("/", listMovies);

export default router;
