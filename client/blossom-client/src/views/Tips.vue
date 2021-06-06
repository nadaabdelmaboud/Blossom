<template>
<div class="tipsView">
  <div class="tips">
    <tipsCard v-for="(t, i) in plantFull.tips" :key="i" :tip="t" :isAdmin="isAdmin" />
  </div>
      <div v-if="isAdmin" class="add">
      <i class="fa fa-plus hoverGolden" @click="addTip"></i>
    </div>
</div>
</template>

<script>
import tipsCard from "../components/tipsCard";
import {mapState } from "vuex";
export default {
  data: function () {
    return {
    };
  },
  components: {
    tipsCard,
  },
  methods: {
    addTip(){
      //this.$store.dispatch("tips/deleteTip",id);
    }
  },
   computed: {
    ...mapState({
      plantFull : (state) => state.tips.plantFull,
      isAdmin : (state) => state.authorization.isAdmin
    }),
  },
  async beforeCreate() {
    await this.$store.dispatch("tips/getTips",this.$route.params.plantId);
  },
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
.tipsView{
  position: relative;;
}
.fa-plus{
  position: absolute;
  bottom: 15px;
  font: 30px;
  left:calc(50% - 7px) ;
}
.add{
  width: 50px;
height: 50px;
position: absolute;
background-color: black;
  bottom: 0;
  font: 30px;
  left:calc(50%) ;
  border-radius: 50px;
cursor: pointer;
}
</style>
