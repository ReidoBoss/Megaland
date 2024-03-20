import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/properties/:page",
    name: "Properties",
    component: () => import("../pages/Properties.vue"),
  },
  {
    path: "/propertyNews",
    name: "Property News",
    component: () => import("../pages/PropertyNews.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },

  {
    path: "/Details/:id",
    name: "Details",
    component: () => import("../pages/Details.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../pages/Admin.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AgentNewViewAgent",
    name: "ViewAgent",
    component: () => import("../components/ViewAgent.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AgentNewEditAgent",
    name: "EditAgent",
    component: () => import("../components/EditAgent.vue"),
    meta: { hideNavAndFooter: true },
  },

  {
    path: "/AgentNewAddProperty",
    name: "AgentAddProperty",
    component: () => import("../components/AgentNewAddProperty.vue"),
    meta: { hideNavAndFooter: true },
  },

  {
    path: "/AgentNewManageProperty",
    name: "AgentManageProperty",
    component: () => import("../components/AgentNewManageProperty.vue"),
    meta: { hideNavAndFooter: true },
  },

  {
    path: "/AgentNewChangePassword",
    name: "AgentChangePassword",
    component: () => import("../components/AgentNewChangePassword.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AgentNew",
    name: "Agent",
    component: () => import("../pages/AgentNew.vue"),
    meta: { hideNavAndFooter: true },
  },

  {
    path: "/AdminNew",
    name: "AdminListProperty",
    component: () => import("../pages/AdminNew.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewAddAgent",
    name: "AdminAddAgent",
    component: () => import("../components/AddAgent.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewAgentsTable",
    name: "AdminAgentsTable",
    component: () => import("../components/AgentsTable.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewPropertyTable",
    name: "AdminPropertyTable",
    component: () => import("../components/PropertyTable.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewBlogListing",
    name: "AdminBlogListing",
    component: () => import("../components/BlogListing.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/AdminNewBlogTable",
    name: "AdminBlogTable",
    component: () => import("../components/BlogTable.vue"),
    meta: { hideNavAndFooter: true },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../pages/Search.vue"),
    meta: { hideNavAndFooter: false },
  },
];

const router = createRouter({
  history: createWebHistory("./"),
  routes,
});

export default router;
