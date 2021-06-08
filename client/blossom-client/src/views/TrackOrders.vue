<template>
  <div class="orderView">
    <ordersCard
      v-for="(v, i) in orders"
      :key="i"
      :Index="i + 1"
      :userId="v.userId"
      :orderId="v.id"
      :imageId="v.image"
      :price="v.price"
      :Items="v.orders"
      :isAdmin="isAdmin"
      :status="v.status"
      :rating="v.feedback.rate"
      :comment="v.feedback.comment"
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
  methods: {},
  computed: {
    ...mapState({
      isAdmin: (state) => state.authorization.isAdmin,
      orders: (state) => state.orders.orders,
    }),
  },
  async beforeCreate() {
    await this.$store.dispatch("authorization/get_user");
    if (this.isAdmin) await this.$store.dispatch("orders/getOrdersAdmin");
    else await this.$store.dispatch("orders/getOrdersUser");
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
.orderView{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>
