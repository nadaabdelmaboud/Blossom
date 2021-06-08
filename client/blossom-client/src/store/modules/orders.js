import axios from "axios";

const state = {
  orders: [],
};

const actions = {
  async addFeedback({ state }, { cartId, payload }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.post(
        "user/me/cart/" + cartId + "/feedback",
        payload
      );
      state.orders = data.data;
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
    } catch (err) {
      console.log(err);
    }
  },
  async getOrdersAdmin({ state }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    let orders =[]
    try {
      let dataPending = await axios.get(
        "users/carts/status?status=pending&limit=1000"
      );
      orders = dataPending.data;
      console.log("o  ",orders)
    } catch (err) {
        console.log(err);
    }
    try{
        let dataProgress = await axios.get(
            "users/carts/status?status=progress&limit=1000"
          );
        orders = orders.concat(dataProgress)
    }
    catch(err){
        console.log(err)
    }
    try{
        let dataDelivered = await axios.get(
            "users/carts/status?status=delivered&limit=1000"
        );
        orders = state.orders.concat(dataDelivered.data);
    }catch(err){
        console.log(err)
    }

    state.orders = orders;

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
