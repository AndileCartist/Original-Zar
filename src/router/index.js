import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage")
  },
  {
    path: "/card",
    name: "card",
    component: () => import("../components/CardComponent")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../pages/SignIn")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../pages/SignUp")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/Cart")
  },
  {
    path: "/connect/facebook/redirect",
    name: "redirect",
    component: () => import("../pages/RedirectPage")
  },
  {
    path: "/connect/google/redirect",
    name: "redirect",
    component: () => import("../pages/RedirectPage")
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../pages/ForgotPassword")
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../pages/ResetPassword")
  },
  {
    path: "/women/all",
    name: "woman-page",
    component: () => import("../pages/WomanPage")
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    } else {
      if (to.hash) {
        return { selector: to.hash };
      }
    }
    
  }
});

export default router;
