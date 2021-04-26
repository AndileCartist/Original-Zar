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
    component: () => import("../pages/CartPage")
  },
  {
    path: "/connect/facebook/redirect",
    name: "facebook-redirect",
    component: () => import("../pages/RedirectPage")
  },
  {
    path: "/connect/google/redirect",
    name: "google-redirect",
    component: () => import("../pages/RedirectPage")
  },
  {
    path: "/connect/twitter/redirect",
    name: "twitter-redirect",
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
    path: "/women/:id",
    name: "woman-page",
    component: () => import("../pages/WomanPage")
  },
  {
    path: "/men/:id",
    name: "men-page",
    component: () => import("../pages/MenPage")
  },
  {
    path: "/kids/:id",
    name: "kids-page",
    component: () => import("../pages/KidsPage")
  },
  {
    path: "/brands/:id",
    name: "brands-page",
    component: () => import("../pages/BrandsPage")
  },
  {
    path: "/search",
    name: "search-page",
    component: () => import("../pages/SearchPage")
  },
  {
    path: "/checkout",
    name: "checkout-page",
    component: () => import("../pages/CheckoutPage")
  },
  {
    path: "/terms",
    name: "terms-page",
    component: () => import("../pages/TermsPage")
  },
  {
    path: "/privacy",
    name: "privacy-page",
    component: () => import("../pages/PrivacyPage")
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
            return { x: 0, y: 0, behavior: 'smooth' }
    }
    
  }
});

export default router;
