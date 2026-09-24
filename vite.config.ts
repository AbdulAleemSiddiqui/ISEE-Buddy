import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Static guide pages built as separate HTML entries (multi-page app).
const guidePages = [
  "isee-2027",
  "calcolo-isee",
  "documenti-isee",
  "soglie-isee",
  "isee-corrente",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...Object.fromEntries(guidePages.map((p) => [p, resolve(__dirname, `${p}.html`)])),
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
}));