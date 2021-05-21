import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import UploadProduct from "../views/UploadProduct.vue";
import BlossomUsers from "../views/BlossomUsers.vue";
import HomeBody from "../views/HomeBody.vue";
import AdminStatistics from "../views/AdminStatistics.vue"

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
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
