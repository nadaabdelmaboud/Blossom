import axios from "axios";

const state = {
    plantCategories:[],
    bouquetCategories:[],
};

const actions = {
  async getBouquetCategories({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("bouquet/categories");
      state.bouquetCategories = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async addBouquetCategories({ state ,commit},payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("bouquet/categories",payload);
      state.bouquetCategories = data.data;
      commit("popupsState/toggleCreateBouquetPopup", null, { root: true });
    } catch (err) {
      console.log(err);
    }
  },
  async getPlantCategories({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("plants/type");
      state.plantCategories = data.data;
    } catch (err) {
      console.log(err);
    }
  },  
  async addPlantCategories({ state ,commit},payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("plants/type",payload);
      state.plantCategories = data.data;
      commit("popupsState/toggleCreateCategoryPopup", null, { root: true });

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
