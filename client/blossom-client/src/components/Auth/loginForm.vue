<template>
  <div class="login">
    <BlossomLogo />
    <form class="form" v-on:submit.prevent="login">
      <i class="fa fa-times hoverGolden close" @click="close"></i>
      <h3>Welcome to Blossom</h3>
      <p v-if="status != '' && status != 'success'" class="perr">
        Sorry there was an error! Try again.
      </p>
      <input
        placeholder="Email"
        class="blossomInput"
        type="email"
        v-model="email"
        required
      />
      <div class="passwordContainer">
        <input
          placeholder="Password"
          class="blossomInput"
          id="passwordInput"
          type="password"
          v-model="password"
          minlength="3"
          required
        />
        <i
          v-if="showPassword"
          class="fa fa-eye-slash passwordIcon"
          id="togglePassword"
          @click="togglePasswordState"
        ></i>
        <i
          v-else
          class="fa fa-eye passwordIcon"
          id="togglePassword"
          @click="togglePasswordState"
        ></i>
      </div>
      <button class="blossomButton" type="submit">Login</button>
      <div class="toSignup">
        New to Blossom?
        <span class="hoverGolden" @click="switchState">Signup</span>
      </div>
    </form>
  </div>
</template>

<script>
import BlossomLogo from "./blossomLogo";
import { default as togglePasswordState } from "../../mixins/togglePasswordState";
import { mapState } from "vuex";
export default {
  components: {
    BlossomLogo,
  },
  data: function () {
    return {
      email: "",
      password: "",
      showPassword: true,
    };
  },
  mixins: [togglePasswordState],
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("authorization/login", user);
    },
    switchState() {
      this.$emit("switchState", false);
    },
    close() {
      this.$store.commit("popupsState/toggleAuthPopup");
    },
  },
  computed: {
    ...mapState({
      status: (state) => state.authorization.status,
    }),
  },
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
.perr {
  color: red;
}
</style>
