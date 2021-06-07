<template>
  <div>
    <ordersCard
      :Index="1"
      :imageId="'Bouquet/d9a0f89e-7660-4640-b323-a59bf5d78c83.image/jpeg'"
      :price="200"
      :Items="[
        ['abb', { name: 'venom', price: 8 }],
        ['jj', { name: 'veee', price: 9 }],
      ]"
      :isAdmin="true"
      :status="'pending'"
      :rating="1"
      :comment="''"
    />
  </div>
</template>

<script>
import ordersCard from "../components/ordersCard.vue";
import { mapState } from "vuex";
export default {
  data: function () {
    return {};
  },
  components: {
    ordersCard,
  },
  methods: {
    addTip() {
      // this.$store.commit("popupsState/toggleAddTipPopup");
    },
  },
  computed: {
    ...mapState({
      isAdmin: (state) => state.authorization.isAdmin,
    }),
  },
  //async
  beforeCreate() {
    //await this.$store.dispatch("tips/getTips", this.$route.params.plantId);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
</style>
