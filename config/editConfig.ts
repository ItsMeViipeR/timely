import { DBCredentials } from "@/types/DB";
import { config } from "dotenv";
import fs from "fs";

config();

export function editConfig(creds: DBCredentials) {
  const newUri = `mysql://${creds.username}:${creds.password}@${creds.serverAddress}:${creds.port}/${creds.dbName}`;

  let envConfig = fs.readFileSync(".env", "utf8");

  const lines = envConfig.split("\n");
  const dbUrlLineIndex = lines.findIndex((line) =>
    line.startsWith("DATABASE_URL=")
  );

  if (dbUrlLineIndex !== -1) {
    lines[dbUrlLineIndex] = `DATABASE_URL="${newUri}"`;
    envConfig = lines.join("\n");
    fs.writeFileSync(".env", envConfig, "utf8");
  }
}
