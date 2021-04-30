<template>
  <div class="home">
    <!--<AuthPopup />-->
    <homeCard />
    <reviewCard />
    <editCard />
  </div>
</template>

<script>
//import AuthPopup from "./AuthPopup";
import homeCard from "../components/HomePage/homeCard";
import reviewCard from "../components/HomePage/reviewCard";
import editCard from "../components/HomePage/editCard";

export default {
  name: "UserHome",
  components: {
    //AuthPopup,
    homeCard,
    reviewCard,
    editCard,
  },
};
</script>
