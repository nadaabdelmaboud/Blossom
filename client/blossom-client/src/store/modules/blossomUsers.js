import axios from "axios";
const state = {
  users: [],
  counter: 1,
  maxPages: 5,
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
};

const actions = {
  callBlossomUsers({ commit }, index) {
    //to be deleted when token is ready
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    //////////////////////////////////////
    axios
      .get("users?pageSize=3&pageNumber=" + index)
      .then((response) => {
        state.users = [];
        commit("setUsers", response.data);
        console.log(response.data);
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
