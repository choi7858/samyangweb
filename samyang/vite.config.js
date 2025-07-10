import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  base: "/", // 슬래시 반드시 포함해야 링크와 리소스가 올바르게 연결됨
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
