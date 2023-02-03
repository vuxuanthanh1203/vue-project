import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      layout: "error",
    },
    component: () => import(/* webpackChunkName: "error" */ "../views/404.vue"),
  },
  {
    path: "/overview",
    name: "Overview",
    component: () =>
      import(/* webpackChunkName: "overview" */ "../views/overview.vue"),
  },
  {
    path: "/category",
    name: "Category",
    meta: {
      title: "Category",
      des: "All of the categories",
    },
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/category.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "Order",
      des: "All of the orders",
    },
    component: () =>
      import(/* webpackChunkName: "order" */ "../views/order.vue"),
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "Product",
      des: "All of the products",
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/product.vue"),
  },
  {
    path: "/shipping",
    name: "Shipping",
    meta: {
      title: "Shipping",
      des: "All of the shipping methods",
    },
    component: () =>
      import(/* webpackChunkName: "shipping" */ "../views/shipping.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "User",
      des: "All of the users",
    },
    component: () => import(/* webpackChunkName: "user" */ "../views/user.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
