<template>
  <div class="homeCard">
    <div class="container">
      <div class="box">
        <div
          class="flowerState"
          v-if="status == 'success' && isAdmin == false && available != 0"
        >
          In Stock
        </div>
        <div
          class="flowerState"
          v-if="status == 'success' && isAdmin == false && available == 0"
        >
          Out Stock
        </div>
        <div
          class="hoverGolden"
          id="deleteFlower"
          v-if="isAdmin == true"
          @click="deleteCard()"
        >
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="box" id="flowerBox">
        <div class="flowerImage" v-if="isFlower == true">
          <!-- if flower card -->
          <img :src="getImage(image)" alt="Flower image" />
        </div>
        <div
          class="plantImage"
          v-if="isFlower == false"
          @click="routeToTipsPage()"
        >
          <!-- if plant card -->
          <span data-toggle="tooltip" title="See this Plant Tips">
            <img :src="getImage(image)" alt="Plant image" />
          </span>
        </div>
      </div>
      <div class="box" id="flowerInfo">
        <div class="title">{{ name }}</div>
        <div class="description" @click="showDescriptionPopup()">
          See Description
        </div>
        <div class="price">{{ price }} EG</div>
        <div class="flowersCount" v-if="isAdmin == true">
          <span id="counter">{{ available }} </span>
          <span id="available"> available</span>
        </div>
        <div class="cartBlock" v-if="available != 0 && getAll == false">
          <div
            class="chooseAmount"
            v-if="status == 'success' && isAdmin == false"
          >
            {{ cartAmount }}
            <router-link to="/userCart">
              <i class="fa fa-shopping-cart" id="cartIcon"></i>
            </router-link>
            <i class="fa fa-arrow-up" @click="increaseAmount()"></i>
            <i class="fa fa-arrow-down" @click="decreaseAmount()"></i>
          </div>
        </div>
        <div class="buttonDiv">
          <div class="homeCardButtons">
            <button
              class="addToCart blossomButton"
              v-if="
                status == 'success' &&
                isAdmin == false &&
                available != 0 &&
                getAll == false
              "
              @click="addItemToCart()"
            >
              Add to Cart
            </button>
            <button
              class="editCardInfo blossomButton"
              v-if="isAdmin == true"
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
    <div class="toast" :id="'toastId'+this.id">
      <img class="toastimage" :src="getImage(image)" />
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
  height: 100%;
  box-shadow: 0 0 10px 3px rgba(10, 10, 10, 0.3);
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
  height: 100%;
  margin-right: auto;
  margin-left: auto;
}
.flowerImage,
.plantImage {
  height: 380px;
}
img {
  width: 100%;
  height: 98%;
  margin-top: 5px;
  background-size: cover;
  object-fit: cover;
}
.plantImage {
  cursor: pointer;
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
  overflow-wrap: break-word;
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
  justify-content: center;
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
  //justify-content: space-between;
  justify-content: center;
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
  //justify-content: space-between;
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
  width: 70%;
  margin-right: 12px;
  margin-bottom: 6px;
}
.blossomButton {
  font-size: 15px;
  height: 50px;
  width: 100%;
}
</style>

<script>
import { mapState } from "vuex";
import { default as showToast } from "../../mixins/toast";
import { default as getImage } from "../../mixins/getImage";
export default {
  name: "homeCard",
  data: function () {
    return {
      cartAmount: 0,
      notAvailable: false,
      zeroAmount: false,
      getAll: false,
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
  mixins: [showToast, getImage],
  computed: {
    ...mapState({
      availableCount: (state) => state.cart.availableCount,
      errorDetected: (state) => state.cart.errorDetected,
      isAdmin: (state) => state.authorization.isAdmin,
      status: (state) => state.authorization.status,
    }),
  },
  methods: {
    routeToTipsPage() {
      this.$router.push("tips/" + this.id);
    },
    deleteCard() {
      if (this.isFlower == true) {
        this.$store.dispatch("homePage/deleteBouquetCard", this.id);
      } else {
        this.$store.dispatch("homePage/deletePlantCard", this.id);
      }
    },
    toggleEditState() {
      this.$store.commit("homePage/setEditImage", this.image);
      this.$store.commit("homePage/setEditCardId", this.id);
      this.$store.commit("homePage/setEditType", this.isFlower);
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
      if (this.cartAmount == this.available) {
        this.getAll = true;
        this.zeroAmount = false;
        this.notAvailable = false;
      }
      if (this.cartAmount == 0) {
        this.zeroAmount = true;
      } else {
        this.zeroAmount = false;
        this.showToast("toastId" + this.id);
        this.$store.commit("authorization/updateOrdersNum", this.name);

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
