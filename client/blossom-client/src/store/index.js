import Vue from "vue";
import Vuex from "vuex";
import popupsState from "./modules/popupsState.js";
import authorization from "./modules/authorization";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popupsState,
    authorization
  },
});
