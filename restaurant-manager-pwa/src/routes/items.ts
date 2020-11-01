import { RouteConfig } from "vue-router";
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Página Inicial",
    component: () => import("./../app/home/home.template.vue"), 
  },
];
export default routes; 
