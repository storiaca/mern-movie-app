import mysql2 from "mysql2";

require("dotenv").config();

const db = mysql2
  .createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD!,
    database: "mobiesdb",
  })
  .promise();

export default db;
