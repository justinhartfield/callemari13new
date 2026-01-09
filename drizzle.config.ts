import { defineConfig } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is required to run drizzle commands");
}

// Parse the connection string to add SSL for TiDB Cloud
const isTiDB = connectionString.includes('tidbcloud.com');

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString,
    ssl: isTiDB ? { rejectUnauthorized: true } : undefined,
  } as any,
});
