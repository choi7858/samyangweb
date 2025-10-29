import { createRouter, createWebHashHistory } from "vue-router";
import routeConfig from "./routes.json" assert { type: "json" };

const pages = import.meta.glob("../views/**/*.vue");

const routes = routeConfig.map(({ path, name, file, meta }) => ({
  path,
  name,
  component: pages[`../views/${file}`],
  meta: meta || {},
}));

const router = createRouter({
  // import.meta.env.BASE_URL 대신 createWebHashHistory()를 사용합니다.
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
