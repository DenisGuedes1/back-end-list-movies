import express, { Application, json } from "express";
import { startDataBase } from "./dataBase";
import {
  createMovies,
  deleteMoviesListOne,
  movieAll,
  updateMoviesOne,
} from "./logic";
import { middlewareVerifyIdExistence } from "./middlewares";

const app: Application = express();
app.use(json());
app.get("/movies", movieAll);
app.post("/movies", createMovies);
app.patch("/movies/:id", middlewareVerifyIdExistence, updateMoviesOne);
app.delete("/movies/:id", middlewareVerifyIdExistence, deleteMoviesListOne);

app.listen(3000, async () => {
  await startDataBase();
  console.log("app, is running!");
});
