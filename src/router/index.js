import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: () => import("../views/signIn.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
