import axios from "axios";
const state = {
  homeCards: [],
  counter: 1,
  maxPages: 0,
  isFlower: true,
  cateogry: "",
  sentiment: "",
  cardId: "",
  cardName: "",
  cardDescription: "",
  reviewCards: [],
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
  setCardID(state, value) {
    state.cardId = value;
  },
  setCardName(state, value) {
    state.cardName = value;
  },
  setCardDescription(state, value) {
    state.cardDescription = value;
  },
  setReviewCards(state, cards) {
    state.reviewCards = cards;
  },
  deleteCard(state, cardId) {
    var index = state.homeCards.findIndex((x) => x._id === cardId);
    if (index !== -1) {
      state.homeCards.splice(index, 1);
    }
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
        commit("setHomeCards", response.data.bouquets);
        commit("setMaxPage", response.data.MaxPage);
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
        commit("setHomeCards", response.data.Plants);
        commit("setMaxPage", response.data.MaxPage);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getFlowerById({ commit }, id) {
    axios
      .get("bouquets/" + id)
      .then((response) => {
        commit("setCardName", response.data.name);
        commit("setCardDescription", response.data.info);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getPlantById({ commit }, id) {
    axios
      .get("plant/" + id)
      .then((response) => {
        commit("setCardName", response.data.name);
        commit("setCardDescription", response.data.info);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getTopReviews({ commit }) {
    axios
      .get("user/admin/cart/feedback/top")
      .then((response) => {
        commit("setReviewCards", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteBouquetCard({ commit }, id) {
    axios
      .delete("bouquets/" + id)
      .then(() => {
        commit("deleteCard", id);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deletePlantCard({ commit }, id) {
    axios
      .delete("plant/" + id)
      .then(() => {
        commit("deleteCard", id);
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
