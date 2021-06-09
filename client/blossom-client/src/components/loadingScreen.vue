<template>
  <div class="loading">
    <img src="../assets/flower.png" class="image" />
  </div>
</template>
<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
.loading {
  background-color: rgba(1, 1, 1, 0.3);
  position: fixed;
  z-index: 12;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  max-height: 100vh;
  overflow: auto;
}
img {
  margin-top: 70px;
  display: inherit;
  width: 100px;
  height: 100px;
}
.image {
  position: absolute;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: "loadingScreen",
};
</script>
