import axios from "axios";
import router from "../../router/index";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {
    name: "",
  },
  isAdmin: false,
  orders: 0,
  cartOrdersName: [],
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state) {
    state.status = "success";
  },
  set_user(state, user) {
    state.user = user;
    state.isAdmin = user.type != "user";
  },
  auth_error(state, err_msg) {
    state.status = err_msg;
  },
  logout(state) {
    state.status = "";
    state.token = "";
    state.user = {};
    state.isAdmin = false;
  },
  setOrders(state, num) {
    state.orders = num;
  },
  updateCartOrders(state, cards) {
    for (let i = 0; i < cards.length; i++) {
      state.cartOrdersName.push(cards[i].name);
    }
  },
  updateOrdersNum(state, name) {
    let found = false;
    for (let i = 0; i < state.cartOrdersName.length; i++) {
      if (state.cartOrdersName[i] === name) {
        found = true;
        break;
      }
    }
    if (found == false) {
      state.orders = state.orders + 1;
      state.cartOrdersName.push(name);
    }
  },
  deleteCartName(state, name) {
    var index = state.cartOrdersName.findIndex((x) => x === name);
    if (index !== -1) {
      state.cartOrdersName.splice(index, 1);
    }
    console.log("deleted now", state.cartOrdersName);
  },
};
const actions = {
  signup({ commit, dispatch }, user) {
    axios
      .post("sign", user)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("popupsState/toggleAuthPopup", null, { root: true });
        dispatch("get_user");
      })
      .catch((error) => {
        commit("auth_error", "signup_err");
        localStorage.removeItem("token");
        console.log(error);
      });
  },
  login({ commit, dispatch }, user) {
    axios
      .post("login", user)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("popupsState/toggleAuthPopup", null, { root: true });
        dispatch("get_user");
      })
      .catch((error) => {
        console.log(error);
        commit("auth_error", "login_err");
        localStorage.removeItem("token");
      });
  },
  async get_user({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.get("user/current");
      commit("set_user", data.data);
      commit("auth_success");
      commit("setOrders", data.data.orders);
    } catch (err) {
      console.log(err);
      commit("auth_error", "error");
    }
  },
  async update_user({ commit }, payload) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      let data = await axios.put("users", payload);
      commit("set_user", data);
    } catch (err) {
      console.log(err);
      commit("auth_error", "error");
    }
  },
  logout({ commit }) {
    commit("logout");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    if (router.history.current.path != "/") router.replace("/");
  },
  currentUserCart({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .get("users/cart/orders")
      .then((response) => {
        commit("updateCartOrders", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
const getters = {
  username: (state) => state.user.name,
  getStatus: (state) => state.status,
  user: (state) => state.user,
  isAdmin: (state) => state.isAdmin,
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
