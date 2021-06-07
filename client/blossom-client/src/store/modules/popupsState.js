const state = {
  authPopup: false,
  editCardPopup: false,
  createCategoryPopup: false,
  createBouquetPopup: false,
  createSpecialPopup: false,
  descriptionPopup: false,
  checkoutFormPopup: false,
  addTipPopup: false,
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
  toggleCreateBouquetPopup(state) {
    state.createBouquetPopup = !state.createBouquetPopup;
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
  toggleAddTipPopup(state) {
    state.addTipPopup = !state.addTipPopup;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
