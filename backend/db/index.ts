import "dotenv/config";
import { createPool } from "mysql2/promise";

export const db = createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD!,
  database: "mobiesdb",
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  namedPlaceholders: true,
});

// export const db = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.DB_PASSWORD!,
//   database: "mobiesdb",
// });
