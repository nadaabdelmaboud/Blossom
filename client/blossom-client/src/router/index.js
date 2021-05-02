import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import UploadProduct from "../views/UploadProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/myprofile",
        name: "UserProfile",
        component: UserProfile,
      },
      {
        path: "/uploadProduct",
        name: "UploadProduct",
        component: UploadProduct,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
