import axios from "axios";

const state = {
  bouquetSentiments: [],
};

const mutations = {
  deletedSentiments(state, item) {
    var index = state.bouquetSentiments.findIndex((x) => x.name === item);
    if (index !== -1) {
      state.bouquetSentiments.splice(index, 1);
    }
  },
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
  async addSentiments({ state, commit }, payload) {
    const token = localStorage.getItem("token");
    commit("popupsState/toggleCreateSpecialPopup", null, { root: true });
    commit("popupsState/toggleLoadingPopup", null, { root: true });
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("bouquet/sentiments", payload);
      state.bouquetSentiments = data.data;
      commit("popupsState/toggleLoadingPopup", null, { root: true });
    } catch (err) {
      console.log(err);
    }
  },
  deleteSentiments({ commit }, sentiment) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .delete("bouquet/sentiments", { data: { sentiment: sentiment } })
      .then(() => {
        commit("deletedSentiments", sentiment);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
