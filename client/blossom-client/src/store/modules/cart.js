import axios from "axios";
import router from "@/router";
const state = {
  cartCards: [],
  availableCount: 0,
  errorDetected: false,
  checkoutDone: "",
  totalPrice: 0,
  isLoading: false,
  isScreenLoading: false,
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
  setTotalPrice(state, num) {
    state.totalPrice = num;
  },
  getTotalPrice() {
    for (let i = 0; i < state.cartCards.length; i++) {
      state.totalPrice =
        state.totalPrice + state.cartCards[i].price * state.cartCards[i].amount;
    }
  },
  setIsScreenLoading(state, val) {
    state.isScreenLoading = val;
  },
};
const actions = {
  callCartCards({ commit, state }) {
    state.isLoading = true;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .get("users/cart/orders")
      .then((response) => {
        commit("setCartCards", response.data);
        state.isLoading = false;
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
  buyCart({ commit, state }, { address, payment }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const cartAddress = address ? address.address : address;
    axios
      .post("me/cart", { address: cartAddress, paymentMethod: payment })
      .then((response) => {
        if (payment == "paypal") {
          commit("checkoutIsDone", "paypal");
          location.replace(response.data);
        } else {
          commit("checkoutIsDone", "cash");
          state.isScreenLoading = false;
          router.push("payment");
        }
        commit("setTotalPrice", 0);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  finishPayment({ commit }, { paymentId, PayerID }) {
    state.isScreenLoading = false;
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .get("me/cart/success?paymentId=" + paymentId + "&PayerID=" + PayerID)
      .then(() => {
        commit("checkoutIsDone", true);
        commit("setTotalPrice", 0);
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
