<template>
  <router-view />
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  async beforeCreate() {
    window.localStorage.isMySessionActive = "false";
    const token = localStorage.getItem("token");
    if (token) {
      await this.$store.dispatch("authorization/get_user");
      if (this.isAdmin == false)
        this.$store.dispatch("authorization/currentUserCart");
      var status = this.isLoggedIn;
      if (status == "error") {
        //token is expired
        this.$store.dispatch("authorization/logout");
        this.$router.replace("/");
        this.$store.commit("popupsState/toggleAuthPopup");
      }
    } else {
      this.$store.dispatch("authorization/logout");
      if (this.$router.history.current.path != "/") this.$router.replace("/");
      this.$store.commit("popupsState/toggleAuthPopup");
    }
  },
  created() {
    window.localStorage.isMySessionActive = "true";
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      status: (state) => state.authorization.getStatus,
      isAdmin: (state) => state.authorization.isAdmin,
    }),
  },
};
</script>
