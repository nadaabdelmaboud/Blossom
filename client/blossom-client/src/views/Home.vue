<template>
  <div class="home">
    <navBar />
    <authPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <homeCard />
    <createCategoryPopup v-if="showCategoryPopup" />
    <createSpecialPopup v-if="showSpecialPopup" />
    <reviewCard />
       <div class="toast" id="upload">
      <div class="addedToCart">A new product is uploaded!</div>
    </div>

    <homeFooter />
       <div class="toast" id="upload">
      <div class="addedToCart">A new product is uploaded!</div>
    </div>
    <router-view />
  </div>
</template>
<style scoped lang="scss">
@import "../scss/Colors";
@import "../scss/BlossomToast";
</style>

<script>
import authPopup from "./AuthPopup";
import navBar from "../components/HomePage/navBar";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";
import editCard from "../components/HomePage/editCard";
import homeFooter from "../components/HomePage/homeFooter";
import createCategoryPopup from "../components/CreatePopups/newCategoryPopup";
import createSpecialPopup from "../components/CreatePopups/newSpecialPopup";
import { mapState } from "vuex";
export default {
  name: "UserHome",
  components: {
    authPopup,
    homeCard,
    reviewCard,
    editCard,
    homeFooter,
    createCategoryPopup,
    createSpecialPopup,
    navBar,
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
      showCategoryPopup: (state) => state.popupsState.createCategoryPopup,
      showSpecialPopup: (state) => state.popupsState.createSpecialPopup,
    }),
  },
};
</script>
