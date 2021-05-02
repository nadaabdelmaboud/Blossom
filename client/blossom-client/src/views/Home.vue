<template>
  <div class="home">
    <AuthPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <homeCard />
    <reviewCard />
    <homeFooter />
  </div>
</template>

<script>
import AuthPopup from "./AuthPopup";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";
import editCard from "../components/HomePage/editCard";
import homeFooter from "../components/HomePage/homeFooter";
import { mapState } from "vuex";

export default {
  name: "UserHome",
  components: {
    AuthPopup,
    homeCard,
    reviewCard,
    editCard,
    homeFooter,
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
    }),
  },
};
</script>
