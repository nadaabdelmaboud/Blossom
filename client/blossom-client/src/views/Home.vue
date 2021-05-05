<template>
  <div class="home">
    <navBar />
    <authPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <homeCard />
    <reviewCard />
    <categories />
    <homeFooter />
    <router-view />
  </div>
</template>

<script>
import authPopup from "./AuthPopup";
import navBar from "../components/HomePage/navBar";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";
import editCard from "../components/HomePage/editCard";
import categories from "../components/HomePage/categories";
import homeFooter from "../components/HomePage/homeFooter";
import { mapState } from "vuex";

export default {
  name: "UserHome",
  components: {
    authPopup,
    homeCard,
    reviewCard,
    editCard,
    homeFooter,
    navBar,
    categories,
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
    }),
  },
};
</script>
