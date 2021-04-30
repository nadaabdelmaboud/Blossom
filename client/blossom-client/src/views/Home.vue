<template>
  <div class="home">
    Blossom
    <!--<AuthPopup />-->
    <homeCard />
  </div>
</template>

<script>
//import AuthPopup from "./AuthPopup";
import homeCard from "../components/HomePage/homeCard";

export default {
  name: "UserHome",
  components: {
    //AuthPopup,
    homeCard,
  },
};
</script>
