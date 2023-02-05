import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import { client } from "./dataBase";

const middlewareVerifyIdExistence = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> => {
  const idMovie: number = parseInt(request.params.id);
  const checkQueryString: string = `
  SELECT * FROM movies
  WHERE id = $1`;
  const checkQueryConfig: QueryConfig = {
    text: checkQueryString,
    values: [idMovie],
  };
  const checkResult = await client.query(checkQueryConfig);
  if (!checkResult.rowCount) {
    return response.status(404).json({
      message:
        "Id not found (id não encontrado, verifique o idque está enviando)",
    });
  }
  return next();
};
export { middlewareVerifyIdExistence };
