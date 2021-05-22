<template>
  <div class="userCard">
    <div class="userName">{{ name }}</div>
    <div class="line"></div>
    <div class="address">
      Address: {{ country }}/{{ city }}/{{ street }} Street
    </div>
    <div class="userEmail">Email: {{ email }}</div>
    <div class="phoneNumber">Phone Number: {{ phone }}</div>
    <div class="banUser">
      <button class="blossomButton" @click="banUser()">Ban User</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
@import "../../scss/BlossomButton";
.userCard {
  width: 60%;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
  margin: 20px;
  padding: 20px;
}
.userName {
  font-size: 25px;
  color: $darkGolden;
  font-weight: 700;
  padding: 15px;
  padding-left: 0;
}
.line {
  border-bottom: 2px solid $golden;
  width: 30%;
  margin-bottom: 5px;
}
.address,
.userEmail,
.phoneNumber {
  padding-bottom: 5px;
  padding-top: 7px;
  padding-left: 0;
  color: $golden;
  font-size: 20px;
  word-wrap: break-word;
}
.banUser {
  text-align: right;
}
.blossomButton {
  width: 250px;
  height: 55px;
}
@media screen and (max-width: 900px) {
  .userCard {
    width: 90%;
  }
}
@media screen and (max-width: 300px) {
  .userCard {
    width: 85%;
  }
  .blossomButton {
    width: 150px;
  }
}
</style>

<script>
export default {
  name: "userCard",
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    street: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  methods: {
    banUser() {
      this.$store.dispatch("blossomUsers/banUser", this.id);
    },
  },
};
</script>
