const state = {
  authPopup: false,
  editCardPopup: false,
  createCategoryPopup: false,
  createSpecialPopup: false,
  descriptionPopup: false,
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
  toggleDescriptionPopup(state) {
    state.descriptionPopup = !state.descriptionPopup;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
