import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: './' 使用相对路径，无论部署在 username.github.io 根路径
// 还是任意项目 Pages 的子路径下，静态资源都能正确加载。
export default defineConfig({
  plugins: [react()],
  base: "./",
});
