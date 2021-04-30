<template>
  <div class="home">
    <AuthPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <homeCard />
    <reviewCard />
  </div>
</template>

<script>
import AuthPopup from "./AuthPopup";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";
import editCard from "../components/HomePage/editCard";
import { mapState } from "vuex";

export default {
  name: "UserHome",
  components: {
    AuthPopup,
    homeCard,
    reviewCard,
    editCard,
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
    }),
  },
};
</script>
