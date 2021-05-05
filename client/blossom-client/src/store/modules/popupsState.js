const state = {
  authPopup: false,
  editCardPopup: false,
};

const mutations = {
  toggleAuthPopup(state) {
    state.authPopup = !state.authPopup;
  },
  toggleEditCardPopup(state) {
    state.editCardPopup = !state.editCardPopup;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
