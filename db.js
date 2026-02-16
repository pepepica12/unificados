import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg;

let client;

export function db() {
  if (!client) {
    client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
    client.connect();
  }
  return client;
}
