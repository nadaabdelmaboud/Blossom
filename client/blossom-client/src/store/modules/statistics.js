import axios from "axios";

const state = {
  salesLoaded: false,
  topUsersLoaded: false,
  ratingLoaded: false,
  sales: [],
  topUsers: [],
  rating: [],
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
      console.log("st ",data.data)
      commit("setSales", data.data);
      setTimeout(() => {
        commit("setSalsesLoaded", true);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  },
  async getRating({ state,commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("user/admin/rating/top")
      console.log("r ",data.data[0])
      state.rating = data.data[0].topRatings
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
