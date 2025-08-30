import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false, // Optional: disable source maps for production
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional: prevent chunk splitting issues
      },
    },
  },
  base: "./", // Important for Amplify: use relative paths
});
