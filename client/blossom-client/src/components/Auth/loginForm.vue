<template>
  <div class="login">
    <BlossomLogo />
    <div class="form">
      <i class="fa fa-times hoverGolden close" @click="close"></i>
      <h3>Welcome to Blossom</h3>
      <input
        placeholder="Email"
        class="blossomInput"
        type="email"
        v-model="email"
      />
      <input
        placeholder="Password"
        class="blossomInput"
        type="password"
        v-model="password"
      />
      <div>
        <span class="hoverGolden floatRight">Forgot password?</span>
      </div>
      <button class="blossomButton" @click="login">Login</button>
      <div class="toSignup">
        New to Blossom?
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
    login(){
      const user={
        email:this.email,
        password:this.password
      }
      this.$store.dispatch("authorization/login",user);
    },
    switchState() {
      this.$emit("switchState", false);
    },
    close() {
      this.$store.commit("popupsState/toggleAuthPopup");
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
}

.toSignup {
  text-align: center;
  margin: 20px 0px;
  color: $golden;
}
.floatRight {
  position: relative;
  float: right;
  margin: 10px 0px;
}
</style>
