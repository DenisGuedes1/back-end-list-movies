import { Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "./dataBase";
import { IlistMovie, moviesResult } from "./interface";

const movieAll = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const queryString: string = `
SELECT
   *
FROM
movies;
`;
  const QueryResult: moviesResult = await client.query(queryString);
  return response.status(200).json(QueryResult.rows);
};

const createMovies = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newMovie: IlistMovie = request.body;
  const queryString: string = `
    INSERT INTO
   movies(name,description,duration,price)
    VALUES
        ($1, $2, $3, $4)
        RETURNING *;
    `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: Object.values(newMovie),
  };
  const queryResult: moviesResult = await client.query(queryConfig);
  return response.status(201).json(queryResult.rows[0]);
};

const updateMoviesOne = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idMovie: string = request.params.id;
  const { name, description, duration, price } = request.body;
  const queryString = `
  UPDATE movies
  SET name = COALESCE($1, name),
    description = COALESCE($2, description),
    duration = COALESCE($3, duration),
    price = COALESCE($4, price)
  WHERE id = $5
  RETURNING *;
  `;
  const queryConfig = {
    text: queryString,
    values: [name, description, duration, price, idMovie],
  };
  const queryResult = await client.query(queryConfig);

  return response.status(200).json(queryResult.rows[0]);
};

const deleteMoviesListOne = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idMovie: number = parseInt(request.params.id);
  console.log(idMovie);
  const queryString: string = `
  DELETE FROM movies
  WHERE id = $1`;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [idMovie],
  };
  await client.query(queryConfig);
  return response.status(204).send();
};
export { createMovies, movieAll, deleteMoviesListOne, updateMoviesOne };
