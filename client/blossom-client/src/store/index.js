import Vue from "vue";
import Vuex from "vuex";
import popupsState from "./modules/popupsState.js";
import authorization from "./modules/authorization";
import whyChooseUs from "./modules/whyChooseUs.js";
import homePage from "./modules/homePage.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popupsState,
    authorization,
    whyChooseUs,
    homePage,
  },
});
