import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req: Request, res: Response) => {
    console.log(path.join(__dirname, "./client/public"))
    res.send("index.html")
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});