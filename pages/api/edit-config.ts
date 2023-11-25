import { editConfig } from "@/config/editConfig";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { username, password, serverAddress, port, dbName } = JSON.parse(
    req.body
  );

  editConfig({
    username,
    password,
    serverAddress,
    port,
    dbName,
  });

  res.status(200).json({ message: "Confuguration edited" });
}
