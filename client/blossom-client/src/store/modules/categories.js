import axios from "axios";

const state = {
  plantCategories: [],
  bouquetCategories: [],
  popularCategories: [
    {
      id: 1,
      image: require("../../assets/baby-orchid.jpg"),
      name: "baby-orchid",
    },
    {
      id: 2,
      image: require("../../assets/Chrysanthemums.jpg"),
      name: "Chrysanthemums",
    },
    {
      id: 3,
      image: require("../../assets/Gerber.jpg"),
      name: "Gerber",
    },
    {
      id: 4,
      image: require("../../assets/lilies.jpg"),
      name: "lilies",
    },
    {
      id: 5,
      image: require("../../assets/Spider.jpg"),
      name: "Spider",
    },
    {
      id: 6,
      image: require("../../assets/Roses.jpg"),
      name: "Roses",
    },
    {
      id: 7,
      image: require("../../assets/Tullips.jpg"),
      name: "Tullips",
    },
  ],
};

const mutations = {
  deletedBouquetsItem(state, item) {
    var index = state.bouquetCategories.findIndex((x) => x === item);
    if (index !== -1) {
      state.bouquetCategories.splice(index, 1);
    }
  },
  deletedPlantsItem(state, item) {
    var index = state.plantCategories.findIndex((x) => x === item);
    if (index !== -1) {
      state.plantCategories.splice(index, 1);
    }
  },
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
      .delete("bouquet/categories", { data: { category: category } })
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
      .delete("plants/type", { data: { type: plant } })
      .then(() => {
        commit("deletedPlantsItem", plant);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const getters = {
  popularCategories: (state) => state.popularCategories,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
