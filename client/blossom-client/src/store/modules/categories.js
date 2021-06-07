import axios from "axios";

const state = {
  plantCategories: [],
  bouquetCategories: [],
};

const mutations = {
  deletedBouquetsItem(state , item){
    var index = state.bouquetCategories.findIndex((x) => x === item);
    if (index !== -1) {
      state.bouquetCategories.splice(index, 1);
    }
  },
  deletedPlantsItem(state , item){
    var index = state.plantCategories.findIndex((x) => x === item);
    if (index !== -1) {
      state.plantCategories.splice(index, 1);
    }
  }
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
  async addBouquetCategories({ state, commit }, payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("bouquet/categories", payload);
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
  async addPlantCategories({ state, commit }, payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("plants/type", payload);
      state.plantCategories = data.data;
      commit("popupsState/toggleCreateCategoryPopup", null, { root: true });
    } catch (err) {
      console.log(err);
    }
  },
  deleteBouquetsCategory({ commit }, category) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
    .delete("bouquet/categories" , { data: { category: category } })
    .then(() => {
      commit("deletedBouquetsItem", category);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  deletePlantsCategory({ commit }, plant) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
    .delete("plants/type" , { data: { type: plant } })
    .then(() => {
      commit("deletedPlantsItem", plant);
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
