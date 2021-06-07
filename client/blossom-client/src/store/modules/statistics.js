import axios from "axios";

const state = {
  salesLoaded: false,
  topUsersLoaded: false,
  ratingLoaded: false,
  sales: [],
  topUsers: [],
  rating: [1, 2, 20, 30, 24],
};

const mutations = {
  setSalsesLoaded(state, flag) {
    state.salesLoaded = flag;
  },
  setSales(state, data) {
    state.sales = data;
  },
  setRatingLoaded(state, flag) {
    state.ratingLoaded = flag;
  },
  setRating(state, data) {
    state.rating = data;
  },
};
const actions = {
  // async
  async getSales({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("shop/sales");
      commit("setSales", data.data);
      setTimeout(() => {
        commit("setSalsesLoaded", true);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  },
  // async
  getRating({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      // let data = await axios.post("upload",imageData)
      setTimeout(() => {
        commit("setRatingLoaded", true);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  },
  async getTopUsers({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("shop/top-users");
      state.topUsers = data.data;
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
