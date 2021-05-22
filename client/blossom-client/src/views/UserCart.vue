<template>
  <div class="userCart">
    <div class="container" v-if="!emptyCart">
      <cartCard />
      <div class="totalPrice">
        <h3>Total Price: 2050 LE</h3>
      </div>
      <div class="checkoutForm">
        <button class="blossomButton">Checkout</button>
      </div>
    </div>
    <div class="container" v-if="emptyCart">
      <div class="empty">
        <h3>OOOOh! Your cart is empty right now</h3>
        <h6>Check our home page and search for your order</h6>
      </div>
      <div class="checkoutForm">
        <button class="blossomButton" @click="routeToHomePage()">
          Blossom Page
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_Colors";
@import "../scss/BlossomButton";
.container {
  width: 100%;
  padding-top: 30px;
  text-align: center;
}
.totalPrice {
  h3 {
    font-size: 25px;
    font-weight: 700;
    color: $darkGolden;
  }
}
.blossomButton {
  width: 200px;
}
h3,
h6 {
  margin: 15px 0;
}
.empty {
  padding: 0 7px;
  h3 {
    font-size: 25px;
    color: $darkGolden;
    font-weight: 700;
  }
  h6 {
    font-size: 20px;
    color: $darkGolden;
    font-weight: 500;
  }
}
</style>

<script>
import cartCard from "../components/Cart/cartCard";
import router from "@/router";
export default {
  name: "userCart",
  components: {
    cartCard,
  },
  data: function () {
    return {
      emptyCart: true,
    };
  },
  methods: {
    routeToHomePage() {
      router.push("/");
    },
  },
};
</script>
