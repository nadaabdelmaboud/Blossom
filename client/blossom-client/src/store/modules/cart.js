import axios from "axios";
const state = {
  cartCards: [],
  availableCount: 0,
  errorDetected: false,
  checkoutDone: false,
};

const mutations = {
  setCartCards(state, cards) {
    state.cartCards = cards;
  },
  setAvailableCount(state, count) {
    state.availableCount = count;
  },
  setErrorDetected(state, error) {
    state.errorDetected = error;
  },
  deletedItem(state, itemId) {
    var index = state.cartCards.findIndex((x) => x._id === itemId);
    if (index !== -1) {
      state.cartCards.splice(index, 1);
    }
  },
  checkoutIsDone(state, check) {
    state.checkoutDone = check;
  },
};
const actions = {
  callCartCards({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .get("users/cart/orders")
      .then((response) => {
        commit("setCartCards", response.data);
        console.log("Cart", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addToCart({ commit }, param) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .post("users/cart/orders", param)
      .then((response) => {
        console.log("error", response.data);
        if (response.data.status == 0) {
          commit("setAvailableCount", response.data.count);
          commit("setErrorDetected", true);
        } else {
          commit("setErrorDetected", false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteCardFromCart({ commit }, id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .delete("users/cart/orders/" + id)
      .then(() => {
        commit("deletedItem", id);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  buyCart({ commit }, { address, payment }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log("address", address);
    console.log("payment", payment);
    axios
      .post("me/cart?paymentMethod=" + payment + "&address=" + address)
      .then(() => {
        commit("checkoutIsDone", true);
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
