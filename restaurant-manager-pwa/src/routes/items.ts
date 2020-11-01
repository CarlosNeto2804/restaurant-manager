import { RouteConfig } from "vue-router";
const routes: Array<RouteConfig> = [
  {
    path: "/categoria",
    name: "Categoria",
    component: () => import("./../app/category/Category.vue"),
  },
];
export default routes;
