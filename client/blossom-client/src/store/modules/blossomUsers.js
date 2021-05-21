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
  banUser(state, userId){
    var index = state.users.findIndex(x => x._id === userId);
    if(index !== -1){
      state.users.splice(index , 1);
    }
  }
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
  banUser({ commit }, id) {
    //to be deleted when token is ready
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    //////////////////////////////////////
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
