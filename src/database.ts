import { Client } from "pg";
const client: Client = new Client({
  user: "silvano",
  password: "1234",
  host: "localhost",
  database: "postgres",
  port: 5432,
});

const startDataBase = async (): Promise<void> => {
  await client.connect();
  console.log("DataBase conectado!");
};
export { client, startDataBase };
