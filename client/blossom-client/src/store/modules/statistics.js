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
  async getSales({ commit, state }) {
    state.salesLoaded = false;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("shop/sales");
      commit("setSales", data.data);
      setTimeout(() => {
        state.salesLoaded = true;
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  },
  async getRating({ state }) {
    state.ratingLoaded = false;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("user/admin/rating/top");
      state.rating = data.data[0].topRatings;
      setTimeout(() => {
        state.ratingLoaded = true;
      }, 3000);
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
