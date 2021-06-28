import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import { ROUTERS } from "@/data/ROUTERS";
import Wall from "@/views/Messages/Wall.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: ROUTERS.settings,
    component: Settings
  },
  {
    path: ROUTERS.wall + '/:id',
    name: 'wall',
    component: Wall
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
