const state = {
  authPopup: true,
  editCardPopup: false,
  createCategoryPopup: false,
  createSpecialPopup: false,
};

const mutations = {
  toggleAuthPopup(state) {
    state.authPopup = !state.authPopup;
  },
  toggleEditCardPopup(state) {
    state.editCardPopup = !state.editCardPopup;
  },
  toggleCreateCategoryPopup(state) {
    state.createCategoryPopup = !state.createCategoryPopup;
  },
  toggleCreateSpecialPopup(state) {
    state.createSpecialPopup = !state.createSpecialPopup;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
