<template>
  <div class="home">
    <AuthPopup v-if="showAuth"/>
    <homeCard />
    <reviewCard />
  </div>
</template>

<script>
import AuthPopup from "./AuthPopup";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";
import { mapState } from "vuex";

export default {
  name: "UserHome",
  components: {
    AuthPopup,
    homeCard,
    reviewCard,
  },
  computed:{
    ...mapState({
      showAuth: state => state.popupsState.authPopup
    })
  }
};
</script>
