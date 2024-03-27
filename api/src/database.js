import { createConnection } from "mysql2/promise";

const config = {
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "app",
  port: 3308,
};

const connection = async () => {
  const conn = await createConnection(config);
  return conn;
};

export { connection };
