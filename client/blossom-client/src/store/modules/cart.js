import axios from "axios";
const state = {
  cartCards: [],
  availableCount:0,
  errorDetected: false
};

const mutations = {
  setCartCards(state, cards) {
    state.cartCards = cards;
  },
  setAvailableCount(state , count){
    state.availableCount = count;
  },
  setErrorDetected(state , error){
    state.errorDetected = error;
  }
};
const actions = {
  callCartCards({ commit }) {
    axios
      .get("users/cart/orders")
      .then((response) => {
        commit("setCartCards", response.data);
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
        if(response.data.status == 0){
          commit("setAvailableCount", response.data.count);
          commit("setErrorDetected" , true);
        }
        else{
          commit("setErrorDetected" , false);
        }
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
