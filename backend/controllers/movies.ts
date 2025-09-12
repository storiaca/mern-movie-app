import { Request, Response, NextFunction } from "express";
import { db } from "../db";

export async function listMovies(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const [movies] = await db.query("SELECT * FROM mobiesdb");
    res.json(movies);
  } catch (e) {
    next(e);
  }
}
