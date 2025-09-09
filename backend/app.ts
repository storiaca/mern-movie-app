import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "An error occured" });
});

console.log("test");
app.listen(8080);
