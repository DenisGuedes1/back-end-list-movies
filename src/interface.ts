import { QueryResult } from "pg";

interface IlistMovie {
  name?: string | undefined;
  description?: string | undefined;
  duration?: number | undefined;
  price?: number | undefined;
}
interface IlistMovieID extends IlistMovie {
  id: number;
}
type moviesResult = QueryResult<IlistMovie>;
export { IlistMovie, IlistMovieID, moviesResult };
// CREATE TABLE IF NOT EXISTS lista_de_filmes(id BIGSERIAL PRIMARY KEY,movies VARCHAR(45) NOT NULL ,description VARCHAR(255) NOT NULL,duration DECIMAL(10,2) NOT NULL,price DECIMAL(10,2) NOT NULL);
//dados para criar um filme
//name: string
// description: string
// duration: inteiro
// price: inteiro
