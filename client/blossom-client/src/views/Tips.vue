<template>
  <div class="tips">
    <tipsCard v-for="(t, i) in tips" :key="i" :tip="t" />
  </div>
</template>

<script>
import tipsCard from "../components/tipsCard";
export default {
  data: function () {
    return {
      tips: [
        "awsomeeee plant",
        "keeep in shadow and water every three days",
        "give it love and care to have its flowers",
        "awsomeeee plant",
        "keeep in shadow and water every three days",
        "give it love and care to have its flowers",
        "awsomeeee plant",
        "keeep in shadow and water every three days",
        "give it love and care to have its flowers",
        "awsomeeee plant",
        "keeep in shadow and water every three days",
        "give it love and care to have its flowers",
      ],
    };
  },
  components: {
    tipsCard,
  },
  methods: {},
  computed: {},
  created: function () {},
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
.tips {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
