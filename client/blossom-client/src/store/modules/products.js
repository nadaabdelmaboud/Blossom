import axios from "axios";

const state = {};

const mutations = {};
const actions = {
  async upload({ state }, { imageFile, imageData, payload, type }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log(state);
    try {
      let data = await axios.post("upload", imageData);
      delete axios.defaults.headers.common["Authorization"];
      let url = data.data.url;
      let key = data.data.key;
      await axios.put(url, imageFile, {
        headers: { "Content-Type": imageFile.type },
      });
      axios.defaults.headers.common["Authorization"] = token;
      if (type == "Plant") {
        payload.images = key;
        await axios.post("plant", payload);
      } else {
        payload.image = key;
        await axios.post("bouquets", payload);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
