<template>
  <div class="cartCard">
    <div class="container">
      <div class="box">
        <div class="hoverGolden" id="deleteFlower" @click="deleteCartCard()">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="box" id="image">
        <img :src="getImage(image)" alt="BlossomFlower" />
      </div>
      <div class="box" v-if="available != 0">
        <div class="flowerName">
          <h3>{{ orderName }}</h3>
        </div>
        <div class="flowerPrice">
          <h3>{{ orderPrice }} LE</h3>
        </div>
        <div class="amountButton">Amount: {{ orderAmount }}</div>
      </div>
      <div class="box" v-if="available == 0">
        <div class="flowerName">
          <h3>{{ orderName }}</h3>
        </div>
        <div class="notAvailable">
          <h3>Not Available</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
@import "../../scss/BlossomButton";
@import "../../scss/General";
.cartCard {
  width: 300px;
}
.container {
  width: 100%;
  height: auto;
  box-shadow: 0 4px 4px 4px rgba(10, 10, 10, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.box {
  margin: 5px 5px 5px 5px;
  box-sizing: border-box;
  position: relative;
}
#deleteFlower {
  padding-right: 7px;
  width: 100%;
  text-align: right;
  i {
    font-size: 25px;
    font-weight: 400;
  }
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 5px;
  background-size: cover;
  object-fit: cover;
}
#image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
}
h3 {
  margin: 10px 0;
  color: $darkGolden;
}
.flowerName,
.flowerPrice,
.notAvailable {
  font-weight: 700;
  font-size: 25px;
  text-align: center;
}
.flowerName {
  color: $darkGolden;
  text-decoration: underline;
}
.flowerPrice {
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
}
.notAvailable {
  h3 {
    font-size: 19px;
  }
  margin-top: 20px;
}
i {
  padding-left: 5px;
}
.amountButton {
  text-align: center;
  margin-bottom: 20px;
  font-size: 17px;
  color: $darkGolden;
}
</style>

<script>
import { default as getImage } from "../../mixins/getImage";
export default {
  name: "cartCard",
  props: {
    id: {
      type: String,
    },
    image: {
      type: String,
    },
    orderName: {
      type: String,
    },
    orderPrice: {
      type: Number,
    },
    orderAmount: {
      type: Number,
    },
    available: {
      type: Number,
    },
  },
  mixins: [getImage],
  methods: {
    deleteCartCard() {
      this.$store.dispatch("cart/deleteCardFromCart", this.id);
    },
  },
};
</script>
