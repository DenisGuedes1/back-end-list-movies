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
