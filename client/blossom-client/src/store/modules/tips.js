import axios from "axios";

const state = {
  plantFull: {},
  loading: false,
};

const actions = {
  async getTips({ state }, id) {
    state.loading = true;
    state.plantFull.tips = [];
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("plant/" + id);
      state.plantFull = data.data;
      state.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
  async addTip({ state, commit }, tip) {
    const token = localStorage.getItem("token");
    commit("popupsState/toggleAddTipPopup", null, { root: true });
    commit("popupsState/toggleLoadingPopup", null, { root: true });
    axios.defaults.headers.common["Authorization"] = token;
    try {
      state.plantFull.tips.push(tip);
      let payload = {
        tips: state.plantFull.tips,
      };
      let data = await axios.put("plant/" + state.plantFull._id, payload);
      state.plantFull = data.data;
    } catch (err) {
      console.log(err);
    }
    commit("popupsState/toggleLoadingPopup", null, { root: true });
  },
  async deleteTip({ state, commit }, tip) {
    commit("popupsState/toggleLoadingPopup", null, { root: true });
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let payload = {
        tips: [],
      };
      for (let i in state.plantFull.tips) {
        if (state.plantFull.tips[i] != tip)
          payload.tips.push(state.plantFull.tips[i]);
      }
      let data = await axios.put("plant/" + state.plantFull._id, payload);
      state.plantFull = data.data;
    } catch (err) {
      console.log(err);
    }
    commit("popupsState/toggleLoadingPopup", null, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
