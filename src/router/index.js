import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../layouts/MainLayout.vue"),
      redirect: { name: "home" },
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "projects",
          name: "projects",
          component: () => import("../views/Projects.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/About.vue"),
        },
        {
          path: "contacts",
          name: "contacts",
          component: () => import("../views/Contacts.vue"),
        },
      ],
    },
  ],
});

export default router;
