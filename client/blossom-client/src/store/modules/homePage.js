import axios from "axios";
const state = {
  homeCards: [],
  counter: 1,
  maxPages: 0,
  isFlower: true,
  cateogry: "",
  type: "",
  sentiment: "",
  cardId: "",
  cardName: "",
  cardDescription: "",
  reviewCards: [],
  editCardId: "",
  editImage: "",
  editType: "",
  isLoading: false,
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
  setType(state, type) {
    state.type = type;
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
  setEditType(state, type) {
    state.editType = type;
  },
  deleteCard(state, cardId) {
    var index = state.homeCards.findIndex((x) => x._id === cardId);
    if (index !== -1) {
      state.homeCards.splice(index, 1);
    }
  },
  setEditImage(state, image) {
    state.editImage = image;
  },
  setEditCardId(state, id) {
    state.editCardId = id;
  },
  editFlowerCard(state, { id, payload }) {
    var index = state.homeCards.findIndex((x) => x._id === id);
    var objectCard = state.homeCards.find((x) => x._id === id);
    let item = objectCard;
    item.name = payload.name != "" ? payload.name : objectCard.name;
    item.info = payload.info != "" ? payload.info : objectCard.info;
    item.count.available =
      payload.count != "" ? payload.count : objectCard.count.available;
    item.price = payload.price != "" ? payload.price : objectCard.price;
    item.bouquetSentiment =
      payload.bouquetSentiment != ""
        ? payload.bouquetSentiment
        : objectCard.bouquetSentiment;
    item.bouquetCategory =
      payload.bouquetCategory != ""
        ? payload.bouquetCategory
        : objectCard.bouquetCategory;
    state.homeCards.splice(index, 1, item);
  },
  editPlantCard(state, { id, payload }) {
    var index = state.homeCards.findIndex((x) => x._id === id);
    var objectCard = state.homeCards.find((x) => x._id === id);
    let item = objectCard;
    item.name = payload.name != "" ? payload.name : objectCard.name;
    item.info = payload.info != "" ? payload.info : objectCard.info;
    item.count.available =
      payload.count.available != ""
        ? payload.count.available
        : objectCard.count.available;
    item.price = payload.price != "" ? payload.price : objectCard.price;
    item.type = payload.type != "" ? payload.type : objectCard.type;
    state.homeCards.splice(index, 1, item);
  },
};

const actions = {
  callFlowerCards({ commit, state }, index) {
    state.isLoading = true;
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
        state.isLoading = false;
        state.homeCards = [];
        commit("setHomeCards", response.data.bouquets);
        commit("setMaxPage", response.data.MaxPage);
        commit("setCateogry", "");
        commit("setSentiment", "");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  callPlantCards({ commit, state }, index) {
    state.isLoading = true;
    let typeVal = "";
    if (state.type != "") typeVal = "type=" + state.type + "&";
    axios
      .get("plant?" + typeVal + "pageSize=12&pageNumber=" + index)
      .then((response) => {
        state.isLoading = false;
        state.homeCards = [];
        commit("setHomeCards", response.data.Plants);
        commit("setMaxPage", response.data.MaxPage);
        commit("setType", "");
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
  editBouquetsCard({ commit }, { id, payload }) {
    axios
      .put("bouquets/" + id, payload)
      .then(() => {
        commit("editFlowerCard", { id: id, payload: payload });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  editPlantsCard({ commit }, { id, payload }) {
    axios
      .put("plant/" + id, payload)
      .then(() => {
        commit("editPlantCard", { id: id, payload: payload });
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
