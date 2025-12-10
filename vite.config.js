import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".",               // ← frontend がルート
  build: {
    outDir: "../dist",     // ← dist はプロジェクト直下へ生成
    emptyOutDir: true,
  },
  base: "/",               // ← これ絶対必要（白画面防止）
  plugins: [react()],
});
