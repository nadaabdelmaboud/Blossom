const state = {
    authPopup: false,
  };
  
  const mutations = {
    toggleAuthPopup(state) {
      state.authPopup = !state.authPopup;
    }
  };
  export default {
    namespaced: true,
    state,
    mutations
  };