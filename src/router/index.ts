import AboutView from "@/views/AboutView/AboutView";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("../views/HomeView/HomeView.vue"),
  },

  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView/AboutView.vue"),
  },

  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectsView/ProjectsView.vue")
  },

  {
    path: "/projects/:id",
    alias: ['/project/:id'],
    name: "project-content",
    component: () => import("../views/ProjectContentView/ProjectContentView.vue")
  },


  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/ContactsView/ContactsView.vue")
  },
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
