import { createRouter, createWebHistory } from "vue-router";
import routeConfig from "./routes.json" assert { type: "json" };

const pages = import.meta.glob("../views/**/*.vue");

const routes = routeConfig.map(({ path, name, file, meta }) => ({
  path,
  name,
  component: pages[`../views/${file}`],
  meta: meta || {},
}));

const router = createRouter({
  // Vite: import.meta.env.BASE_URL 은 vite.config.js 의 base 값 (기본 "/")
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
