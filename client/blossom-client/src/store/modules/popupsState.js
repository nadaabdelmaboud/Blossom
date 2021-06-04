const state = {
  authPopup: false,
  editCardPopup: false,
  createCategoryPopup: false,
  createSpecialPopup: false,
  descriptionPopup: false,
  checkoutFormPopup: false,
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
  toggleCheckoutFormPopup(state) {
    state.checkoutFormPopup = !state.checkoutFormPopup;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
