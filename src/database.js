import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "lista_de_compras"
});

export default connection;
