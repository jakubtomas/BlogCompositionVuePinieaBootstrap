import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/Blog/ListBlogView.vue")
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
  },
  {
    path: "/updateBlog/:id",
    name: "update",
    component: () => import("../views/Blog/UpdateBlogView.vue")
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/Users/UserView.vue")
  },
  { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
