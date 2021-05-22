import axios from "axios";

const state = {
  salesLoaded: false,
  topUsersLoaded: false,
  ratingLoaded: false,
  sales: [
    1, 29, 3, 4, 5, 6, 97, 8, 9, 10, 81, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  topUsers: {},
  rating: {},
};

const mutations = {
  setSalsesLoaded(state, flag) {
    state.salesLoaded = flag;
  },
  setSalses(state, data) {
    state.sales = data;
  },
};
const actions = {
  // async
  getSales({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      // let data = await axios.post("upload",imageData)
      setTimeout(() => {
        commit("setSalsesLoaded", true);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
