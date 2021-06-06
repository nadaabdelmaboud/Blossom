<template>
  <div class="homeCard">
    <div class="container">
      <div class="box">
        <div class="flowerState" v-if="user == true && available != 0">
          In Stock
        </div>
        <div class="flowerState" v-if="user == true && available == 0">
          Out Stock
        </div>
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
          <div class="cartBlock" v-if="available != 0">
            <div class="chooseAmount" v-if="user == true">
              {{ cartAmount }}
              <router-link to="/userCart">
                <i class="fa fa-shopping-cart" id="cartIcon"></i>
              </router-link>
              <i class="fa fa-arrow-up" @click="increaseAmount()"></i>
              <i class="fa fa-arrow-down" @click="decreaseAmount()"></i>
            </div>
          </div>
          <div class="homeCardButtons">
            <button
              class="addToCart blossomButton"
              v-if="user == true && available != 0"
              @click="addItemToCart()"
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
        <p id="errorMessage" v-if="notAvailable">
          only {{ available }} Available
        </p>
        <p id="errorMessage" v-if="errorDetected">
          only {{ availableCount }} Available
        </p>
        <p id="errorMessage" v-if="zeroAmount">choose amount first</p>
      </div>
    </div>
    <div class="toast" id="toastId">
      <img class="toastimage" src="../../assets/flower.jpg" />
      <div class="addedToCart">Added to Cart</div>
    </div>
  </div>
  <!-- showToast('toastId'), -->
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
  display: flex;
  justify-content: space-between;
}
.chooseAmount {
  padding: 10px;
  color: $darkGolden;
  i {
    cursor: pointer;
    padding: 5px;
    font-size: 18px;
  }
}
.cartBlock {
  display: flex;
  flex-direction: column;
}
#errorMessage {
  color: red;
  margin: 5px;
  padding: 0;
}
#cartIcon {
  color: $darkGolden;
  padding-left: 0;
}
.homeCardButtons {
  margin-right: 12px;
  margin-bottom: 6px;
}
.blossomButton {
  font-size: 15px;
  height: 50px;
}
</style>

<script>
import { mapState } from "vuex";
import { default as showToast } from "../../mixins/toast";
export default {
  name: "homeCard",
  data: function () {
    return {
      admin: false,
      user: true,
      cartAmount: 0,
      notAvailable: false,
      zeroAmount: false,
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
    flowerCateogry: {
      type: String,
    },
    isFlower: {
      type: Boolean,
    },
    plantType: {
      type: String,
    },
  },
  mixins: [showToast],
  computed: {
    ...mapState({
      availableCount: (state) => state.cart.availableCount,
      errorDetected: (state) => state.cart.errorDetected,
    }),
  },
  methods: {
    toggleEditState() {
      this.$store.commit("popupsState/toggleEditCardPopup");
    },
    showDescriptionPopup() {
      this.$store.commit("popupsState/toggleDescriptionPopup");
      this.$store.commit("homePage/setCardID", this.id);
      console.log(this.id);
    },
    increaseAmount() {
      this.zeroAmount = false;
      if (this.cartAmount + 1 <= this.available)
        this.cartAmount = this.cartAmount + 1;
      else this.notAvailable = true;
    },
    decreaseAmount() {
      if (this.cartAmount - 1 >= 0) {
        this.cartAmount = this.cartAmount - 1;
        this.notAvailable = false;
      }
    },
    addItemToCart() {
      //var toast = document.getElementById("toastId");
      if (this.cartAmount == 0) {
        this.zeroAmount = true;
      } else {
        this.zeroAmount = false;
        this.showToast("toastId");

        if (this.isFlower == true)
          this.$store.dispatch("cart/addToCart", {
            bouquetId: this.id,
            amount: this.cartAmount,
            orderType: "bouquet",
            category: this.flowerCateogry,
          });
        ///return bouquet and cateogry
        else
          this.$store.dispatch("cart/addToCart", {
            bouquetId: this.id,
            amount: this.cartAmount,
            orderType: "plant",
            category: this.plantType,
          }); //// return plant and type
        this.cartAmount = 0;
      }
    },
  },
};
</script>
