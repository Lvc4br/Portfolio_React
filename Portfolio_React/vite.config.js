import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Oracle Cloud serves this site from /portfolio/.
  base: "/portfolio/",
});
