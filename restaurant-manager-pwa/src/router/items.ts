import { RouteConfig } from "vue-router";
const routes: Array<RouteConfig> = [
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];
export default routes;
