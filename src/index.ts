import exp from "constants";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 8080;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    msg: "ok"
  });
});

app.listen(port, () => {
  console.log("I\'m rocketing!....");
});
