<template>
  <div class="userProfile blossomCard">
    <img src="../assets/BlossomLogo_v7.png" alt="logo Image" />
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
    <button class="blossomButton">Save Changes</button>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data: function () {
    return {
      email: "menna@gmail.com",
      password: "qqqqqqqq",
      username: "Menna",
      phoneNumber: "01066761053",
      address: "Cairo,Egypt",
    };
  },
  methods: {
    saveChanges() {
      //send new user data to backend
    },
  },
  computed: {
    //map user state to the v-model
  },
  created: function () {
    //get user info from backend dispatch
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
@import "../scss/BlossomButton";
@import "../scss/BlossomInput";
@import "../scss/BlossomCard";
.blossomInput {
  width: 50%;
  margin: 20px auto;
  background: transparent;
}
.blossomButton {
  margin: 40px auto;
}
</style>
