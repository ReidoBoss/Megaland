import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../Pages/Home.vue"),
  },
  {
    path: "/properties",
    name: "Properties",
    component: () => import("../Pages/Properties.vue"),
  },
  {
    path: "/propertyNews",
    name: "Property News",
    component: () => import("../Pages/PropertyNews.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../Pages/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../Pages/Contact.vue"),
  },
  {
    path: "/listProperty",
    name: "List Property",
    component: () => import("../Pages/ListProperty.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("./"),
  routes,
});

export default router;
