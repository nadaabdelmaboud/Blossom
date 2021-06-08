import axios from "axios";

const state = {
  orders: [],
};

const actions = {
  async addFeedback({ state }, { cardId, payload }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      await axios.post("user/me/cart/" + cardId + "/feedback", payload);
      //state.orders = data.data;
      console.log(state);
    } catch (err) {
      console.log(err);
    }
  },
  async getOrdersUser({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("me/carts?limit=1000");
      state.orders = data.data;
      console.log(state);
    } catch (err) {
      console.log(err);
    }
  },
  async getOrdersAdmin({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    let orders = [];
    try {
      let dataPending = await axios.get(
        "users/carts/status?status=pending&limit=1000"
      );
      orders = dataPending.data;
      console.log("o  ", orders);
    } catch (err) {
      console.log(err);
    }
    try {
      let dataProgress = await axios.get(
        "users/carts/status?status=progress&limit=1000"
      );
      orders = orders.concat(dataProgress.data);
    } catch (err) {
      console.log(err);
    }
    try {
      let dataDelivered = await axios.get(
        "users/carts/status?status=delivered&limit=1000"
      );
      orders = orders.concat(dataDelivered.data);
    } catch (err) {
      console.log(err);
    }

    state.orders = orders;
    console.log("state ", state.orders);
  },
  async changeStatusAdmin({ state }, payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log("kk", payload);
    try {
      await axios.put(
        "users/" +
          payload.userId +
          "/cart/" +
          payload.orderId +
          "?status=" +
          payload.status
      );
      console.log(state);
      // state.orders = data.data;
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
