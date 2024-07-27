import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig(({ command, mode }) => {
  return {
    base: command === "serve" ? "/" : "/Customizable-YouTube-Clone/",
    plugins: [react()],
  };
});
