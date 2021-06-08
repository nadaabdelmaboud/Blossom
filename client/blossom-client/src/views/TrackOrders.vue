<template>
<div>
    <loading v-if="loadingOrders"/>
  <div class="orderView" v-else>
    <div v-if="isAdmin && orders.length == 0" class="slogan">
        The shop has no orders yet.
      </div>
      <div v-if="!isAdmin && orders.length == 0" class="slogan">
        Order from Blossom, then track your order here.
      </div>
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
</div>
</template>

<script>
import ordersCard from "../components/ordersCard.vue";
import loading from "../components/loading.vue";
import { mapState } from "vuex";
export default {
  data: function () {
    return {};
  },
  components: {
    ordersCard,
    loading
  },
  methods: {},
  computed: {
    ...mapState({
      isAdmin: (state) => state.authorization.isAdmin,
      orders: (state) => state.orders.orders,
      loadingOrders: (state) => state.orders.loading,
    }),
  },
  async beforeCreate() {
    this.$store.dispatch("orders/flushOrder");
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
.slogan {
  font-size: 55px;
}
</style>
