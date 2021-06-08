<template>
  <div
    class="tip"
    id="tipColor"
    :style="{ 'background-color': colorRand[randNum] }"
  >
    <i v-if="isAdmin" class="fa fa-times close" @click="deleteTip"></i>
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
  props: ["tip", "isAdmin"],
  created() {
    this.randNum = Math.floor(Math.random() * 7);
  },
  methods: {
    deleteTip() {
      this.$store.dispatch("tips/deleteTip", this.tip);
    },
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
  width: 220px;
  margin: 10px 0;
  padding: 5px;
  -webkit-box-shadow: 0px 0px 3px 3px $shadowColor;
  -moz-box-shadow: 0px 0px 3px 3px $shadowColor;
  box-shadow: 0px 0px 3px 3px $shadowColor;
  position: relative;
}
i {
  display: inline-block;
  height: 30px;
  color: black;
  margin: 10px 95px;
}
.close {
  font-size: 15px;
  position: absolute;
  transition: 0.25s ease-in-out;
  right: 10px;
  width: 15px;
  top: 0;
  left: 90px;
  cursor: pointer;
}
.close:active {
  transform: scale(0.98);
}
p {
  max-width: 200px;
  overflow-wrap: break-word;
}
</style>
