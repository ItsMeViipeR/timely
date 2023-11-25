import { DBCredentials } from "@/types/DB";

function getConfig(): DBCredentials {
  const dbUri = process.env.DATABASE_URL;
  const url = new URL(dbUri!);
  const protocol = url.protocol.replace(":", "");
  const username = url.username;
  const password = url.password;
  const serverAddress = url.hostname;
  const port = Number(url.port);
  const dbName = url.pathname.substring(1);

  return {
    protocol,
    username,
    password,
    serverAddress,
    port,
    dbName,
  };
}

export const config: DBCredentials = getConfig();
