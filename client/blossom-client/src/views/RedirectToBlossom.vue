<template>
  <div class="redirectToBlossom">
    <h1><i class="fa fa-truck"></i> Your order is on its way now</h1>
    <h2>Thanks For Your Time</h2>
    <h4>Continue Searching for wonderful flowers and plants!</h4>
    <button class="blossomButton" @click="moveToHomePage()">Blossom</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_Colors";
@import "../scss/BlossomButton";
.redirectToBlossom {
  width: 100%;
  color: $darkGolden;
  text-align: center;
  h4 {
    padding: 7px;
  }
}
</style>

<script>
import router from "@/router";
export default {
  name: "redirectToBlossom",
  props: {
    paymentId: {
      type: String,
    },
    PayerID: {
      type: String,
    },
  },
  mounted() {
    this.$store.dispatch("cart/finishPayment", {
      paymentId: this.$route.query.paymentId,
      PayerID: this.$route.query.PayerID,
    });
  },
  methods: {
    moveToHomePage() {
      router.push("/");
    },
  },
};
</script>
