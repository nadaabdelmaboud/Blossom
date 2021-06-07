import axios from "axios";

const state = {
  orders: [],
};

const actions = {
  async addFeedback({ state }, { id, payload }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post("/user/me/cart/" + id + "/feedback", payload);
      state.orders = data.data;
      //update orders
      // close popup
    } catch (err) {
      console.log(err);
    }
  },
  async getOrdersUser({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("carts?limit=1000");
      state.orders = data.data;
    } catch (err) {
      console.log(err);
    }
  },
  async getOrdersAdmin({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let dataPending = await axios.get(
        "users/carts/status?status=pending&limit=1000"
      );
      let dataProgress = await axios.get(
        "users/carts/status?status=progress&limit=1000"
      );
      let dataDelivered = await axios.get(
        "users/carts/status?status=delivered&limit=1000"
      );
      state.orders = dataPending.data;
      state.orders = state.orders.concat(dataProgress.data);
      state.orders = state.orders.concat(dataDelivered.data);
    } catch (err) {
      console.log(err);
    }
  },
  async changeStatusAdmin({ state }, payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.put(
        "users/" +
          payload.userId +
          "/order/" +
          payload.orderId +
          "/status?" +
          payload.status
      );
      state.orders = data.data;
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
