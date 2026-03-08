import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), viteTsConfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [],
    },
  },
});
