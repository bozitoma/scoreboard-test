import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react", // https://zenn.dev/longbridge/articles/bba17785710c1a
    }),
  ],
  ssr: {
    noExternal: [
      // MUI needs to be pre-processed by Vite in production: https://github.com/brillout/vite-plugin-ssr/discussions/901
      "@mui/base",
      "@mui/icons-material",
      "@mui/material",
      "@mui/utils",
    ],
  },
});
