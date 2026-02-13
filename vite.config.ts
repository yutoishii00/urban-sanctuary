import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
