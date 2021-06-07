import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import UploadProduct from "../views/UploadProduct.vue";
import BlossomUsers from "../views/BlossomUsers.vue";
import HomeBody from "../views/HomeBody.vue";
import AdminStatistics from "../views/AdminStatistics.vue";
import UserCart from "../views/UserCart.vue";
import Tips from "../views/Tips.vue";
import CategoriesPage from "../views/CategoriesPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "HomeBody",
        component: HomeBody,
      },
      {
        path: "myprofile",
        name: "UserProfile",
        component: UserProfile,
      },
      {
        path: "uploadProduct",
        name: "UploadProduct",
        component: UploadProduct,
      },
      {
        path: "blossomUsers",
        name: "blossomUsers",
        component: BlossomUsers,
      },
      {
        path: "statistics",
        name: "statistics",
        component: AdminStatistics,
      },
      {
        path: "userCart",
        name: "userCart",
        component: UserCart,
      },
      {
        path: "tips/:plantId",
        name: "tips",
        component: Tips,
      },
      {
        path: "CategoriesPage",
        name: "CategoriesPage",
        component: CategoriesPage,
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
