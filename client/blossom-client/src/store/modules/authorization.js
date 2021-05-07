import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: {},
  isAdmin: Boolean,
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, { token, user }) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state, err_msg) {
    state.status = err_msg;
  },
  logout(state) {
    state.status = "";
    state.token = "";
    state.user = {};
  },
};
const actions = {
  signup({ commit, dispatch }, user) {
    commit("auth_request");
    axios
      .post("sign", user)
      .then((response) => {
        console.log("response ", response);
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        dispatch("get_user");
      })
      .catch((error) => {
        commit("auth_error", "signup_err");
        localStorage.removeItem("token");
        console.log(error);
      });
  },
  login({ commit, dispatch }, user) {
    commit("auth_request");
    axios
      .post("login", user)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        dispatch("get_user");
      })
      .catch((error) => {
        console.log(error);
        commit("auth_error", "login_err");
        localStorage.removeItem("token");
      });
  },
  get_user({ commit }) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    commit("popupsState/toggleAuthPopup", null, { root: true });
  },
  logout({ commit }) {
    commit("logout");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  },
  // saveEdit({ }, user) {
  //   axios
  //     .put("", {
  //       user
  //     })
  //     .then(() => {})
  //     .catch(() => {});
  // },
};
const getters = {
  username: (state) => state.user.displayName,
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
