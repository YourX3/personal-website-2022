import AboutView from "@/views/AboutView/AboutView";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: ['/en/', '/fr/'],
    name: "home",
    component: () =>
      import("../views/HomeView/HomeView.vue"),
  },


  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView/AboutView.vue"),
    alias: [
      '/en/about',
      '/fr/about',
    ]
  },

  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/ContactsView/ContactsView.vue"),
    alias: [
      '/en/contacts',
      '/fr/contacts',
    ]
  },
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
