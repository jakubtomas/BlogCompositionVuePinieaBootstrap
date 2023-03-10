import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/Blog/ListBlogView.vue")
  },
  {
    path: "/addBlog",
    name: "addBlog",
    component: () => import("../views/Blog/AddBlogView.vue")
  },
  {
    path: "/detailsBlog/:id",
    name: "details",
    component: () => import("../views/Blog/DetailsBlogView.vue")
    //props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
