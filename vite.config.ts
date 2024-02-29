import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import path from "path";

type Mode = "dev" | "prod";

function loadEnv(mode: string) {
  const envFiles = {
    dev: ".dev.env",
    prod: ".prod.env",
  };

  const envFilePath = path.resolve(
    __dirname,
    `./env/${envFiles[(mode as Mode) ?? "dev"]}`
  );

  dotenv.config({ path: envFilePath });
}

export default defineConfig(({ mode }) => {
  loadEnv(mode);

  return {
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
  };
});
