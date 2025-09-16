// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && screenGraphPlugin(), // 개발 모드에서만 screenGraph 활성화
  ],
  publicDir: "static",       // ✅ 정적 파일 폴더(이미지는 static/ 아래에 둬야 함)
  base: "/",                 // 배포 루트(특수 서브경로 배포면 바꿔줘도 됨)
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // @ → src
    },
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
}));
