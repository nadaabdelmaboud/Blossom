<template>
  <div class="transparentBackground">
    <div class="popupBody">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/Auth/loginForm";
export default {
  name: "Authentication",
  components: {
    LoginForm,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/GlobalPopup";
.popupBody {
  width: 900px;
  padding: 0px;
}
</style>
