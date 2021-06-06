<template>
  <div
    class="tip"
    id="tipColor"
    :style="{ 'background-color': colorRand[randNum] }"
  >
    <i class="fa fa-thumb-tack" aria-hidden="true"></i>
    <p class="slogan">{{ tip }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      colorRand: [
        "#FF9AA2",
        "#FFB7B2",
        "#FFDAC1",
        "#E2F0CB",
        "#B5EAD7",
        "#C7CEEA",
        "#FFFFD1",
      ],
      randNum: 0,
    };
  },
  props: ["tip"],
  created: function () {
    this.randNum = Math.floor(Math.random() * 7);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
.slogan {
  color: black;
}
.tip {
  width: 200px;
  margin: 10px 0;
  padding: 5px;
  -webkit-box-shadow: 0px 0px 3px 3px $shadowColor;
  -moz-box-shadow: 0px 0px 3px 3px $shadowColor;
  box-shadow: 0px 0px 3px 3px $shadowColor;
}
i {
  display: inline-block;
  height: 30px;
  color: black;
  margin: 10px 95px;
}
</style>
