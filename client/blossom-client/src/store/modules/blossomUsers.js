import axios from "axios";
const state = {
  users: [],
  counter: 1,
  maxPages: 5,
  isLoading: false,
};

const mutations = {
  setUsers(state, usersCards) {
    state.users = usersCards;
  },
  setCounter(state, count) {
    state.counter = count;
  },
  setMaxPage(state, value) {
    state.maxPages = value;
  },
  banUser(state, userId) {
    var index = state.users.findIndex((x) => x._id === userId);
    if (index !== -1) {
      state.users.splice(index, 1);
    }
  },
};

const actions = {
  callBlossomUsers({ commit, state }, index) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    state.isLoading = true;
    axios
      .get("users?pageSize=3&pageNumber=" + index)
      .then((response) => {
        state.isLoading = false;
        state.users = [];
        commit("setUsers", response.data.users);
        commit("setMaxPage", response.data.maxPage);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  banUser({ commit }, id) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    axios
      .delete("users/" + id)
      .then(() => {
        commit("banUser", id);
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
