<template>
  <div>
    <div class="orderCard">
      <img class="cardImg" :src="getImage(imageId)" />
      <p>Order#{{ Index }}</p>
      <u @click="viewOrder">View Order</u>
      <br />
      <div class="stars" v-if="cartStatus == 'delivered'">
        <i
          v-for="s in stars"
          :key="s"
          @click="rate(s)"
          class="fa fa-star"
          :class="{
            colorG: s <= cardRating,
            cursorP: !isAdmin,
          }"
        ></i>
      </div>
      <input
        v-if="confirmRating && cartStatus == 'delivered'"
        v-model="cardComment"
      />
      <p
        v-if="!confirmRating && cardComment != '' && cartStatus == 'delivered'"
      >
        {{ cardComment }}
      </p>

      <div class="stars">
        <i
          @click="changeStatus('pending')"
          class="fa fa-square"
          :class="{
            colorGl:
              cartStatus == 'pending' ||
              cartStatus == 'progress' ||
              cartStatus == 'delivered',
            cursorP: isAdmin,
          }"
        ></i>
        <i
          @click="changeStatus('progress')"
          class="fa fa-square"
          :class="{
            colorG: cartStatus == 'progress' || cartStatus == 'delivered',
            cursorP: isAdmin,
          }"
        ></i>
        <i
          @click="changeStatus('delivered')"
          class="fa fa-square"
          :class="{
            colorGd: cartStatus == 'delivered',
            cursorP: isAdmin,
          }"
        ></i>
      </div>
      <p>{{ cartStatus }}</p>
    </div>

    <div class="toast" :id="'rating' + Index">
      <img class="toastimage" :src="getImage(imageId)" />
      <div class="addedToCart">Confirm rating?</div>
      <button @click="confirmRate">confirm</button>
      <button @click="cancelRate">cancel</button>
    </div>
    <div class="toast" :id="'status' + Index">
      <img class="toastimage" :src="getImage(imageId)" />
      <div class="addedToCart">Confirm {{ cartStatus }} status?</div>
      <button @click="confirmStatus">confirm</button>
      <button @click="cancelStatus">cancel</button>
    </div>
    <div class="toast v" :id="'viewOrder' + Index">
      <p class="addedToCart" v-for="(it, i) in Items" :key="i">
        {{ it[1].name }} : {{ it[1].price }} LE
      </p>
      <button @click="hideOrder">close</button>
    </div>
  </div>
</template>

<script>
import { default as getImage } from "../mixins/getImage";
export default {
  data: function () {
    return {
      cardRating: 0,
      cardComment: "",
      cartStatus: "",
      stars: [1, 2, 3, 4, 5],
      stauses: ["pending", "progress", "delivered"],
      confirmRating: false,
    };
  },
  mixins: [getImage],
  props: [
    "userId",
    "Index",
    "orderId",
    "isAdmin",
    "price",
    "imageId",
    "status",
    "rating",
    "Items",
    "comment",
  ],
  created() {
    this.cardRating = this.rating;
    this.cardComment = this.comment;
    this.cartStatus = this.status;
  },
  methods: {
    rate(s) {
      if (this.isAdmin) return;
      this.cardRating = s;
      this.showToastRating();
      this.confirmRating = true;
    },
    confirmRate() {
      //send req
      let payload = {
        rate: this.cardRating,
      };
      if (this.cardComment != "") payload.comment = this.cardComment;
      this.$store.dispatch("orders/addFeedback", {
        cardId: this.orderId,
        payload,
      });

      this.hideToastRating();
      this.confirmRating = false;
    },
    cancelRate() {
      this.hideToastRating();
      this.confirmRating = false;
      this.cardRating = this.rating;
      this.cardComment = this.comment;
    },
    changeStatus(s) {
      if (!this.isAdmin) return;
      this.cartStatus = s;
      this.showToastStatus();
    },
    confirmStatus() {
      //send req
      let payload = {
        orderId: this.orderId,
        userId: this.userId,
        status: this.cartStatus,
      };
      console.log("p", payload);
      this.$store.dispatch("orders/changeStatusAdmin", payload);
      this.hideToastStatus();
    },
    cancelStatus() {
      this.hideToastStatus();
      this.cartStatus = this.status;
    },
    viewOrder() {
      var mytoast = document.getElementById("viewOrder" + this.Index);
      mytoast.className = "toast v toast--visible";
    },
    hideOrder() {
      var mytoast = document.getElementById("viewOrder" + this.Index);
      mytoast.classList.remove("toast--visible");
    },
    showToastRating() {
      var mytoast = document.getElementById("rating" + this.Index);
      mytoast.className = "toast toast--visible";
    },
    showToastStatus() {
      var mytoast = document.getElementById("status" + this.Index);
      mytoast.className = "toast toast--visible";
    },
    hideToastRating() {
      var mytoast = document.getElementById("rating" + this.Index);
      mytoast.classList.remove("toast--visible");
    },
    hideToastStatus() {
      var mytoast = document.getElementById("status" + this.Index);
      mytoast.classList.remove("toast--visible");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/BlossomToast";
@import "../scss/General";
.fa {
  color: rgb(230, 219, 170);
  font-size: 20px;
  margin: 5px;
}
.stars {
  display: flex;
  justify-content: center;
}
.toastimage {
  width: 60px;
  height: 60px;
  margin-left: 5%;
  margin-bottom: 0;
  margin-top: 10px;
}
.toast {
  display: flex;
  align-content: center;
  justify-content: space-between;
  bottom: 5%;
  left: calc(50% - 250px);
  margin-right: auto;
  width: 500px;
  height: 80px;
  padding: 5px;
  border-radius: 0;
  -webkit-box-shadow: 0px 0px 3px 3px $golden;
  -moz-box-shadow: 0px 0px 3px 3px $golden;
  box-shadow: 0px 0px 3px 3px $golden;
  .addedToCart {
    font-size: 20px;
    padding-top: 30px;
    margin: 0;
  }
}
button {
  margin: 30px 10px 0 0;
  height: 30px;
  width: 60px;
  background-color: $lightGolden;
  border-color: $lightGolden;
}
.orderCard {
  width: 240px;
  height: calc(100% - 90px);
  margin: 20px;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 3px 3px $golden;
  -moz-box-shadow: 0px 0px 3px 3px $golden;
  box-shadow: 0px 0px 3px 3px $golden;
}
.cardImg {
  margin: auto;
  display: inherit;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 3px 3px $golden;
  -moz-box-shadow: 0px 0px 3px 3px $golden;
  box-shadow: 0px 0px 3px 3px $golden;
}
p {
  text-align: center;
  font-size: 16px;
  overflow-wrap: break-word;
}
u {
  display: block;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.colorG {
  color: $golden;
}
.colorGl {
  color: $lightGolden;
}
.colorGd {
  color: $darkGolden;
}
.cursorP {
  cursor: pointer;
}
.v {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  height: initial;
  left: calc(50% - 150px);
  width: 300px;
  p {
    margin: 0;
  }
  button {
    margin: auto;
  }
  .addedToCart {
    padding-top: 5px;
  }
}
input {
  margin: 10px auto;
  display: block
}
</style>
