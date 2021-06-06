import axios from "axios";

const state = {
    bouquetSentiments:[],
};

const actions = {
  async getSentiments({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("bouquet/sentiments");
      state.bouquetSentiments = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async addSentiments({ state,commit },payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("bouquet/sentiments",payload);
      state.bouquetSentiments = data.data;
      commit("popupsState/toggleCreateSpecialPopup", null, { root: true });
    } catch (err) {
      console.log(err);
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
