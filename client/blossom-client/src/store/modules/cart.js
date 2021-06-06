import axios from "axios";
const state = {
  cartCards: [],
  availableCount:0,
  errorDetected: false,
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
  },
  deletedItem(state, itemId){
    var index = state.cartCards.findIndex((x) => x._id === itemId);
    if (index !== -1) {
      state.cartCards.splice(index, 1);
    }
  }
};
const actions = {
  callCartCards({ commit }) {
    axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiYzdmZjQwMWM2NzI4Njg4YjI3YjgiLCJ0eXBlIjoidXNlciIsImlhdCI6MTYyMjkxOTI5MiwiZXhwIjoxNjIzMDQyNzQ4fQ.aw32p1HYL_8mjbDQQYGv52pXNavODleXUJDjksNW4uU";
    axios
      .get("users/cart/orders")
      .then((response) => {
        commit("setCartCards", response.data);
        console.log("Cart",response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addToCart({ commit }, param) {
    //const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiYzdmZjQwMWM2NzI4Njg4YjI3YjgiLCJ0eXBlIjoidXNlciIsImlhdCI6MTYyMjkxOTI5MiwiZXhwIjoxNjIzMDQyNzQ4fQ.aw32p1HYL_8mjbDQQYGv52pXNavODleXUJDjksNW4uU";
    axios
      .post("users/cart/orders", param)
      .then((response) => {
        console.log("error", response.data)
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
  deleteCardFromCart({ commit } , id) {
    axios.defaults.headers.common["Authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJiYzdmZjQwMWM2NzI4Njg4YjI3YjgiLCJ0eXBlIjoidXNlciIsImlhdCI6MTYyMjkxOTI5MiwiZXhwIjoxNjIzMDQyNzQ4fQ.aw32p1HYL_8mjbDQQYGv52pXNavODleXUJDjksNW4uU";
    axios
      .delete("users/cart/orders/" + id)
      .then(() => {
        commit("deletedItem", id);
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
