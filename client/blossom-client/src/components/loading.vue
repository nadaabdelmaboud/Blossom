<template>
  <div class="loading">
      <img src="../assets/flower.png" class="image"/>
  </div>
</template>
<style lang="scss" scoped>
.image {
    width: 150px;
    height: 150px;
    position: absolute;
    left: calc(50% - 100px);
    margin:0px 0 0 0px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>

<script>
export default {
  name: "loading",
  data: function () {
    return {
    };
  },
  methods: {
  },
};
</script>
