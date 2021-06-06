import axios from "axios";

const state = {

  plantFull: {}
};

const actions = {
  async getTips({ state },id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("plant/"+id);
      state.plantFull = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async addTip({ state }, payload,id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("plant/"+id, payload);
      state.plantFull = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteTip({ state }, payload,id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("plant/"+id, payload);
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
