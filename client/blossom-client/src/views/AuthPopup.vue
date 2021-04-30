<template>
  <div class="transparentBackground">
    <div class="popupBody">
      <LoginForm v-if="isLogin" @switchState="switchState" />
      <SignupForm v-if="!isLogin" @switchState="switchState" />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/Auth/loginForm";
import SignupForm from "../components/Auth/signupForm";
export default {
  name: "Authentication",
  components: {
    LoginForm,
    SignupForm,
  },
  data: function () {
    return {
      isLogin: true,
    };
  },
  methods: {
    switchState(state) {
      this.isLogin = state;
    },
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
