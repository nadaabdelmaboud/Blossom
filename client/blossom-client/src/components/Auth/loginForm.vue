<template>
  <div class="login">
    <BlossomLogo />
    <div class="form">
      <h3>Welcome to Blossom</h3>
      <input placeholder="Email" class="blossomInput" v-model="email" />
      <input
        placeholder="Password"
        class="blossomInput"
        type="password"
        v-model="password"
      />
      <p class="hoverGolden">Forgot password?</p>
      <button class="blossomButton">Login</button>
      <div class="toSignup">
        new to Blossom?
        <span class="hoverGolden" @click="switchState">Signup</span>
      </div>
    </div>
  </div>
</template>

<script>
import BlossomLogo from "./blossomLogo";
export default {
  components: {
    BlossomLogo,
  },
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    switchState() {
      this.$emit("switchState", false);
    },
  },
  computed: {},
  created: function () {},
};
</script>

<style lang="scss" scoped>
@import "../../scss/Colors";
@import "../../scss/GlobalPopup";
@import "../../scss/General";
@import "../../scss/BlossomButton";
@import "../../scss/BlossomInput";
.login {
  display: flex;
  align-content: center;
}
.form {
  display: flex;
  flex-grow: 1;
  align-content: center;
  flex-direction: column;
  padding: 0px 40px 0px 40px;
  p {
    text-align: end;
  }
}

.toSignup {
  text-align: center;
  margin: 20px 0px;
  color: $golden;
}
</style>
