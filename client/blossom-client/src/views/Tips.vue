<template>
  <div>
    <div class="tipsView">
      <img :src="getImage(plantFull.images)" />
      <h1 class="slogan">{{ plantFull.name }}</h1>
      <div v-if="!isAdmin && plantFull.tips.length == 0" class="slogan">
        This plant has no tips yet.
      </div>
      <div v-if="isAdmin && plantFull.tips.length == 0" class="slogan">
        This plant has no tips yet.Add more?
      </div>
      <div class="tips">
        <tipsCard
          v-for="(t, i) in plantFull.tips"
          :key="i"
          :tip="t"
          :isAdmin="isAdmin"
        />
      </div>
      <div v-if="isAdmin" class="add" @click="addTip">
        <i class="fa fa-plus hoverGolden"></i>
      </div>
    </div>
  </div>
</template>

<script>
import tipsCard from "../components/tipsCard";
import { default as getImage } from "../mixins/getImage";
import { mapState } from "vuex";
export default {
  data: function () {
    return {};
  },
  mixins: [getImage],
  components: {
    tipsCard,
  },
  methods: {
    addTip() {
      this.$store.commit("popupsState/toggleAddTipPopup");
    },
  },
  computed: {
    ...mapState({
      plantFull: (state) => state.tips.plantFull,
      isAdmin: (state) => state.authorization.isAdmin,
    }),
  },
  async beforeCreate() {
    await this.$store.dispatch("tips/getTips", this.$route.params.plantId);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
.tips {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 100px;
}
.tipsView {
  position: relative;
}
.fa-plus {
  position: absolute;
  bottom: 15px;
  font: 30px;
  left: calc(50% - 7px);
}
.add {
  width: 50px;
  height: 50px;
  position: inherit;
  background-color: black;
  bottom: 0;
  font: 30px;
  left: calc(50%);
  border-radius: 50px;
  cursor: pointer;
  margin-top: 20px;
}
h1 {
  color: $golden;
  text-align: center;
  margin: 20px;
}
.slogan {
  font-size: 55px;
}
img {
  margin: auto;
  display: inherit;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 3px 3px $golden;
  -moz-box-shadow: 0px 0px 3px 3px $golden;
  box-shadow: 0px 0px 3px 3px $golden;
}
</style>
