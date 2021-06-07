import axios from "axios";

const state = {
  plantFull: {},
};

const actions = {
  async getTips({ state }, id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("plant/" + id);
      state.plantFull = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async addTip({ state, commit }, tip) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      state.plantFull.tips.push(tip);
      let payload = {
        tips: state.plantFull.tips,
      };
      let data = await axios.put("plant/" + state.plantFull._id, payload);
      state.plantFull = data.data;
      commit("popupsState/toggleAddTipPopup", null, { root: true });
    } catch (err) {
      console.log(err);
    }
  },
  async deleteTip({ state }, tip) {
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
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
