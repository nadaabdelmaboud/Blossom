<template>
  <div class="homeCard">
    <div class="container">
      <div class="box">
        <div class="flowerState" v-if="user == true">In Stock</div>
        <div class="hoverGolden" id="deleteFlower" v-if="admin == true">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="box" id="flowerBox">
        <div class="flowerImage">
          <!--<img :src="image" />-->
          <img src="../../assets/flower.jpg" alt="flower image" />
        </div>
      </div>
      <div class="box" id="flowerInfo">
        <div class="title">{{ name }}</div>
        <div class="description" @click="showDescriptionPopup()">
          See Description
        </div>
        <div class="price">{{ price }} EG</div>
        <div class="flowersCount" v-if="admin == true">
          <span id="counter">{{ available }} </span>
          <span id="available"> available</span>
        </div>
        <div class="buttonDiv">
          <button
            class="addToCart blossomButton"
            v-if="user == true"
            @click="showToast('toastId')"
          >
            Add to Cart
          </button>
          <button
            class="editCardInfo blossomButton"
            v-if="admin == true"
            @click="toggleEditState()"
          >
            Edit Card
          </button>
        </div>
      </div>
    </div>
    <div class="toast" id="toastId">
      <img class="toastimage" src="../../assets/flower.jpg" />
      <div class="addedToCart">Added to Cart</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
@import "../../scss/BlossomButton";
@import "../../scss/BlossomToast";
@import "../../scss/General";
.homeCard {
  width: 200px;
}
.container {
  width: 100%;
  height: auto;
  box-shadow: 0 3px 3px 3px rgba(10, 10, 10, 0.06);
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
#flowerBox {
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
}
#flowerBox,
#flowerInfo {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
img {
  width: 100%;
  height: 100%;
  margin-top: 5px;
  background-size: cover;
  object-fit: cover;
}
.flowerState {
  padding-right: 5px;
  width: 100%;
  color: $lightGolden;
  text-align: right;
  font-size: 15px;
  font-weight: 400;
}
#deleteFlower {
  padding-right: 7px;
  width: 100%;
  text-align: right;
  i {
    font-size: 20px;
    font-weight: 400;
  }
}
.title {
  margin-top: 7px;
  //margin-bottom: 7px;
  color: $darkGolden;
  font-size: 25px;
  font-weight: 700;
}
.line {
  width: 70%;
  height: 3px;
  margin-right: auto;
  margin-left: auto;
  border-bottom: 2px solid $golden;
  margin-top: 7px;
}
.description {
  font-size: 17px;
  text-decoration: underline;
  color: $golden;
  cursor: pointer;
}
.price {
  margin-top: 7px;
  margin-bottom: 7px;
  color: $darkGolden;
  font-size: 20px;
  font-weight: 600;
}
.flowersCount {
  display: flex;
  flex-direction: row;
  color: $darkGolden;
  font-size: 20px;
  font-weight: 600;
  margin-left: 2%;
}
#available {
  padding-top: 3px;
  padding-left: 3px;
  color: $darkGolden;
  font-size: 17px;
}
.buttonDiv {
  float: right;
  margin-right: 12px;
  margin-bottom: 6px;
}
.blossomButton {
  font-size: 15px;
  height: 15%;
}
</style>

<script>
import { default as showToast } from "../../mixins/toast";
export default {
  name: "homeCard",
  data: function () {
    return {
      admin: true,
      user: false,
    };
  },
  props: {
    id: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    available: {
      type: Number,
    },
  },
  mixins: [showToast],
  methods: {
    toggleEditState() {
      this.$store.commit("popupsState/toggleEditCardPopup");
    },
    showDescriptionPopup() {
      this.$store.commit("popupsState/toggleDescriptionPopup");
      this.$store.commit("homePage/setCardID", this.id);
      console.log(this.id);
    },
  },
};
</script>
