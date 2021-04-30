<template>
  <div class="login">
    <BlossomLogo />
    <div class="form">
      <i class="fa fa-times hoverGolden close" @click="close"></i>
      <h3>Welcome to Blossom</h3>
      <input placeholder="Username" class="blossomInput" v-model="username" />
      <input
        placeholder="Email"
        type="email"
        class="blossomInput"
        v-model="email"
      />
      <input
        placeholder="Password"
        class="blossomInput"
        type="password"
        v-model="password"
      />
      <input
        placeholder="Phone Number"
        class="blossomInput"
        v-model="phoneNumber"
      />
      <input placeholder="Address" class="blossomInput" v-model="address" />
      <button class="blossomButton">Signup</button>
      <div class="toSignup">
        Have an account?
        <span class="hoverGolden" @click="switchState">login</span>
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
      username: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    switchState() {
      this.$emit("switchState", true);
    },
    close() {
      this.$store.commit("popupsState/toggleAuthPopup");
    }
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
