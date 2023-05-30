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
  {
    path: "/users",
    name: "users",
    component: () => import("../views/Users/UserView.vue")
  },
  {
    path: "/BasicDefine",
    name: "BasicDefine",
    component: () => import("../views/Basic/BasicDefine.vue")
  },
  {
    path: "/BasicDefineSetup",
    name: "BasicDefineSetup",
    component: () => import("../views/Basic/BasicDefineSetup.vue")
  },
  {
    path: "/usersTableList",
    name: "usersTableList",
    component: () => import("../views/Users/UsersTableList.vue")
  },
  {
    path: "/usersTableListV2",
    name: "usersTableListV2",
    component: () => import("../views/Users/UsersTableListV2.vue")
  },
  {
    path: "/usersTableListV3",
    name: "usersTableListV3",
    component: () => import("../views/Users/UsersTableListV3.vue")
  },
  {
    path: "/routerLink",
    name: "routerLink", //src\views\RouterLink.vue
    component: () => import("../views/RouterLink.vue"),
    children: [
      {
        path: "/routerchild",
        name: "routerchild",
        component: () => import("../views/PropsEmit.vue")
      }
    ]
  },
  {
    path: "/propsEmit",
    name: "propsEmit",
    component: () => import("../views/PropsEmit.vue")
  },
  {
    //     <router-link to="/vmodelmodelvalue">vmodelmodelValue</router-link> |
    path: "/vmodelmodelvalue",
    name: "vmodelmodelvalue",
    component: () => import("../views/VModelModelValue.vue")
  },
  {
    path: "/todoList/",
    name: "todoList",
    component: () => import("../views/TodoApp/todoList.vue")
  },
  { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
