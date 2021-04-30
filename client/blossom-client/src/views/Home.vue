<template>
  <div class="home">
    <!--<AuthPopup />-->
    <homeCard />
    <reviewCard />
  </div>
</template>

<script>
//import AuthPopup from "./AuthPopup";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";

export default {
  name: "UserHome",
  components: {
    //AuthPopup,
    homeCard,
    reviewCard,
  },
};
</script>
