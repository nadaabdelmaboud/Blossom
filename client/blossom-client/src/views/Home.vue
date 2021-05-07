<template>
  <div class="home">
    <navBar />
    <authPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <cardsPagination />
    <createCategoryPopup v-if="showCategoryPopup" />
    <createSpecialPopup v-if="showSpecialPopup" />
    <reviewCard />
    <categories />
    <whyUs />
    <homeFooter />
    <router-view />
  </div>
</template>

<script>
import authPopup from "./AuthPopup";
import navBar from "../components/HomePage/navBar";
import cardsPagination from "../components/HomePage/cardsPagination";
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
    }),
  },
};
</script>
