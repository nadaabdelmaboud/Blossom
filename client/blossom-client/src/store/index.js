import Vue from "vue";
import Vuex from "vuex";
import popupsState from "./modules/popupsState.js";
import authorization from "./modules/authorization.js";
import whyChooseUs from "./modules/whyChooseUs.js";
import products from "./modules/products.js";
import homePage from "./modules/homePage.js";
import blossomUsers from "./modules/blossomUsers";
import statistics from "./modules/statistics";
import cart from "./modules/cart";
import sentiments from "./modules/sentiments";
import categories from "./modules/categories";
import tips from "./modules/tips"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popupsState,
    authorization,
    whyChooseUs,
    products,
    homePage,
    blossomUsers,
    statistics,
    cart,
    sentiments,
    categories,
    tips
  },
});
