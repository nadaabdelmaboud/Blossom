import axios from "axios";
const state = {
  homeCards: [],
  counter: 1,
  maxPages: 5,
  isFlower: false,
  cateogry: "",
  sentiment: "",
};

const mutations = {
  setHomeCards(state, cards) {
    state.homeCards = cards;
  },
  setCounter(state, value) {
    state.counter = value;
  },
  setMaxPage(state, value) {
    state.maxPages = value;
  },
  setPaginationName(state, cardName) {
    state.paginationName = cardName;
  },
  setCateogry(state, type) {
    state.cateogry = type;
  },
  setSentiment(state, type) {
    state.sentiment = type;
  },
  setIsFlower(state, check) {
    state.isFlower = check;
  },
};

const actions = {
  callFlowerCards({ commit }, index) {
    let cateogryVal = "";
    let sentimentVal = "";
    if (state.cateogry != "") cateogryVal = "category=" + state.cateogry;
    if (state.sentiment != "") sentimentVal = "&sentiment=" + state.sentiment;
    axios
      .get(
        "bouquets?" +
          cateogryVal +
          sentimentVal +
          "&pageSize=12&pageNumber=" +
          index
      )
      .then((response) => {
        state.homeCards = [];
        commit("setHomeCards", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  callPlantCards({ commit }, index) {
    let typeVal = "";
    if (state.cateogry != "") typeVal = "type=" + state.cateogry;
    axios
      .get("plant?" + typeVal + "pageSize=4&pageNumber=" + index)
      .then((response) => {
        state.homeCards = [];
        commit("setHomeCards", response.data);
        console.log(response.data);
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
