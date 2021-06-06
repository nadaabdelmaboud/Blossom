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
      let data = await axios.put("plant/"+id, payload);
      state.plantFull = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteTip({ state }, tip,id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
        let payload={
            tips:[]
        }
      for(let i in state.plantFull.tips){
          if(state.plantFull.tips[i] != tip)
            payload.tips.push(state.plantFull.tips[i])
      }
      let data = await axios.put("plant/"+id, payload);
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
