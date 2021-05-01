<template>
  <div class="logo">
    <img src="../../assets/BlossomLogo_v7.png" alt="logo Image" />
    <p class="slogan">Give it time. I’ll grow on you.</p>
    <p />
  </div>
</template>

<script>
export default {
  methods: {},
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
@import "../../scss/General";
.logo {
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 40%;
}
img {
  width: 250px;
  display: flex;
  align-self: center;
}
@media screen and (max-width: 700px) {
  .logo {
    display: none;
  }
}
@media screen and (max-height: 820px) {
  .logo {
    display: none;
  }
}
</style>
