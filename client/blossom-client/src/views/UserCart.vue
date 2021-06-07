<template>
  <div class="userCart">
    <div class="container" v-if="cartCards.length != 0">
      <div class="gridContainer">
        <cartCard
          class="box"
          v-for="card in cartCards"
          :key="card._id"
          :id="card._id"
          :image="card.images"
          :orderName="card.name"
          :orderPrice="card.price"
          :orderAmount="card.amount"
        />
      </div>
      <div class="totalPrice">
        <h3>Total Price: 2050 LE</h3>
      </div>
      <div class="checkoutForm">
        <button class="blossomButton" @click="showCheckoutForm()">
          Checkout
        </button>
      </div>
    </div>
    <div class="container" v-if="cartCards.length == 0">
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
.gridContainer {
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: minmax(auto, auto);
  margin: auto;
  padding: 20px;
  margin-top: 30px;
  grid-gap: 5px;
}
.gridContainer .box {
  width: 95%;
  display: grid;
  place-items: center;
  text-align: center;
  justify-self: center;
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
@media screen and (max-width: 960px) {
  .gridContainer {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 4px;
  }
}
@media screen and (max-width: 300px) {
  .gridContainer {
    padding: 0;
  }
}
</style>

<script>
import cartCard from "../components/Cart/cartCard";
import router from "@/router";
import { mapState } from "vuex";
export default {
  name: "userCart",
  components: {
    cartCard,
  },
  computed: {
    ...mapState({
      cartCards: (state) => state.cart.cartCards,
    }),
  },
  mounted() {
    this.$store.dispatch("cart/callCartCards");
  },
  methods: {
    routeToHomePage() {
      router.push("/");
    },
    showCheckoutForm() {
      this.$store.commit("popupsState/toggleCheckoutFormPopup");
    },
  },
};
</script>
