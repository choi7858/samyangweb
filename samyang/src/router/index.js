// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/products/products.vue";
import Clamps from "../views/products/clamps/clamps.vue";
import Ironman from "../views/products/clamps/Ironman.vue";
import CclampBahcoE from "../views/products/clamps/CclampBahcoE.vue";
import CclampBahco from "../views/products/clamps/CclampBahco.vue";
import CclampHeavyWideE from "@/views/products/clamps/CclampHeavyWideE.vue";
import CclampHeavyWide from "@/views/products/clamps/CclampHeavyWide.vue";
import LClampHeavy from "@/views/products/clamps/LClampHeavy.vue";
import SuperSetter from "@/views/products/clamps/SuperSetter.vue";
import SuperSetterRail from "@/views/products/clamps/SuperSetterRail.vue";
import WeldingMulti from "@/views/products/clamps/WeldingMulti.vue";
import PipeWelding from "@/views/products/clamps/PipeWelding.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/products", name: "Products", component: Products },
  { path: "/products/clamps", name: "Clamps", component: Clamps },
  { path: "/products/clamps/ironman", name: "Ironman", component: Ironman },
  {
    path: "/products/clamps/cclamp-bahco-e",
    name: "CclampBahcoE",
    component: CclampBahcoE,
  },
  {
    path: "/products/clamps/cclamp-bahco",
    name: "CclampBahco",
    component: CclampBahco,
  },
  {
    path: "/products/clamps/cclamp-heavy-wide-e",
    name: "CclampHeavyWideE",
    component: CclampHeavyWideE,
  },
  {
    path: "/products/clamps/cclamp-heavy-wide",
    name: "CclampHeavyWide",
    component: CclampHeavyWide,
  },
  {
    path: "/products/clamps/lclamp-heavy",
    name: "LClampHeavy",
    component: LClampHeavy,
  },
  {
    path: "/products/clamps/supersetter",
    name: "SuperSetter",
    component: SuperSetter,
  },
  {
    path: "/products/clamps/supersetter-rail",
    name: "SuperSetterRail",
    component: SuperSetterRail,
  },
  {
    path: "/products/clamps/welding-multi",
    name: "WeldingMulti",
    component: WeldingMulti,
  },
  {
    path: "/products/clamps/pipe-welding",
    name: "PipeWelding",
    component: PipeWelding,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
