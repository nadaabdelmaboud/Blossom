<template>
  <div class="login">
    <BlossomLogo />
    <div class="form"></div>
  </div>
</template>

<script>
import BlossomLogo from "./blossomLogo";
export default {
  components: {
    BlossomLogo,
  },
  data: function () {
    return {};
  },
  computed: {},
  created: function () {},
};
</script>

<style lang="scss" scoped>
@import "../../scss/Colors";
@import "../../scss/GlobalPopup";
.login {
  display: flex;
}
.form {
  flex-grow: 3;
}
</style>
