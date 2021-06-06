<template>
  <div class="tips">
   
    <tipsCard v-for="(t, i) in plantFull.tips" :key="i" :tip="t" :isAdmin="isAdmin" />
    <div v-if="isAdmin">
      <i class="fas fa-plus" @click="addTip"></i>
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
</style>
