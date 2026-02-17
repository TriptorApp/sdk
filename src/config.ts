import dotenv from "dotenv";

dotenv.config();

export const config = {
  apiKey: process.env.TRIPTOR_API_KEY || "",
  network: process.env.NETWORK || "devnet"
};
