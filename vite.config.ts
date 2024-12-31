import { defineConfig } from "vite";
import path from "path";

// Configuration de base
export default defineConfig({
  resolve: {
    alias: {
      "@game": path.resolve(__dirname, "./src/game"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets")
    },
  },
});
