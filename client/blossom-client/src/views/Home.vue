<template>
  <div class="home">
    <navBar />
    <authPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <cardsPagination />
    <cardDescription v-if="showCardDescription" />
    <createCategoryPopup v-if="showCategoryPopup" />
    <createSpecialPopup v-if="showSpecialPopup" />
    <reviewCard />
    <categories />
    <div class="toast" id="upload">
      <div class="addedToCart">A new product is uploaded!</div>
    </div>
    <whyUs />
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
import cardsPagination from "../components/HomePage/cardsPagination";
import cardDescription from "../components/HomePage/cardDescription";
import reviewCard from "../components/HomePage/reviewCard";
import editCard from "../components/HomePage/editCard";
import categories from "../components/HomePage/categories";
import whyUs from "../components/HomePage/whyUs";
import homeFooter from "../components/HomePage/homeFooter";
import createCategoryPopup from "../components/CreatePopups/newCategoryPopup";
import createSpecialPopup from "../components/CreatePopups/newSpecialPopup";
import { mapState } from "vuex";
export default {
  name: "UserHome",
  components: {
    authPopup,
    cardsPagination,
    cardDescription,
    reviewCard,
    editCard,
    homeFooter,
    createCategoryPopup,
    createSpecialPopup,
    navBar,
    categories,
    whyUs,
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
      showCategoryPopup: (state) => state.popupsState.createCategoryPopup,
      showSpecialPopup: (state) => state.popupsState.createSpecialPopup,
      showCardDescription: (state) => state.popupsState.descriptionPopup,
    }),
  },
};
</script>
