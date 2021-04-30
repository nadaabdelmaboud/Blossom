<template>
  <div class="home">
    Blossom
    <AuthPopup />
  </div>
</template>

<script>
import AuthPopup from "./AuthPopup";

export default {
  name: "UserHome",
  components: {
    AuthPopup,
  },
};
</script>
