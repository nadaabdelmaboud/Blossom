<template>
  <div class="homeCard">
    <div class="container">
      <div class="box" id="flowerBox">
        <div class="flowerImage">
          <img src="../../assets/flower.jpg" />
        </div>
      </div>
      <div class="box" id="flowerInfo">
        <div class="flowerState" v-if="user == true">In Stock</div>
        <div class="deleteFlower" v-if="admin == true">
          <i class="fa fa-times"></i>
        </div>
        <div class="title">Love Flowers</div>
        <div class="description">
          red flower bouquets for your lovely person
        </div>
        <div class="price">230 EG</div>
        <div class="flowersCount" v-if="admin == true">
          <span id="counter">5 </span>
          <span id="available"> available</span>
        </div>
        <div class="buttonDiv">
          <button class="addToCart" v-if="user == true" @click="showToast()">
            Add to Cart
          </button>
          <button class="editCardInfo" v-if="admin == true">Add to Cart</button>
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
.homeCard {
  width: 35%;
}
.container {
  width: 100%;
  height: auto;
  box-shadow: 0 3px 3px 3px rgba(10, 10, 10, 0.06);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  //will-change: transform;
  /*transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
  }*/
}
.box {
  margin: 5px 5px 5px 5px;
  box-sizing: border-box;
  position: relative;
}
#flowerBox {
  width: 35%;
}
#flowerInfo {
  width: 65%;
}
img {
  width: 100%;
  height: 100%;
  margin-top: 5px;
  background-size: cover;
  object-fit: cover;
}
.flowerState {
  margin-right: 2px;
  width: 100%;
  color: $lightGolden;
  text-align: right;
  font-size: 12px;
  font-weight: 400;
}
.deleteFlower {
  margin-right: 7px;
  width: 100%;
  color: $lightGolden;
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: black;
  }
}
.title {
  margin-top: 7px;
  margin-bottom: 7px;
  color: $darkGolden;
  font-size: 18px;
  font-weight: 700;
}
.description {
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 13px;
}
.price {
  margin-top: 7px;
  margin-bottom: 7px;
  color: $darkGolden;
  font-size: 15px;
  font-weight: 600;
}
.flowersCount {
  display: flex;
  flex-direction: row;
  color: $darkGolden;
  font-size: 15px;
  font-weight: 600;
}
#available {
  padding-top: 3px;
  padding-left: 3px;
  color: $darkGolden;
  font-size: 12px;
}
.buttonDiv {
  float: right;
  margin: 12px;
}
.toastimage {
  width: 20%;
  border-radius: 10px;
  margin-left: 5%;
  margin-bottom: 2%;
}
.toast {
  display: flex;
  align-content: center;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  position: fixed;
  bottom: 2%;
  left: 42%;
  margin-right: auto;
  width: 18%;
  background-color: rgb(19, 20, 20);
  padding: 5px;
  border-radius: 50px;
  z-index: 1500;
  box-shadow: 0 0 10 rgb(19, 20, 20);
  transition: 0.5s ease-in-out;
  .addedToCart {
    font-size: 14px;
    color: $lightGolden;
    padding: 5%;
    padding-top: 8%;
    text-align: center;
  }
}
.toast--visible {
  visibility: visible;
  opacity: 1;
}
@media screen and (max-width: 900px) {
  .toast {
    width: 30%;
    left: 33%;
  }
}
@media screen and (max-width: 420px) {
  .toast {
    width: 40%;
    left: 27%;
  }
}
@media screen and (max-width: 360px) {
  .toast {
    width: 50%;
    left: 24%;
  }
}
</style>

<script>
export default {
  name: "homeCard",
  data: function () {
    return {
      admin: false,
      user: true,
    };
  },
  methods: {
    showToast() {
      var mytoast = document.getElementById("toastId");
      clearTimeout(mytoast.hideTimeout);
      mytoast.className = "toast toast--visible";
      mytoast.hideTimeout = setTimeout(() => {
        mytoast.classList.remove("toast--visible");
      }, 2000);
    },
  },
};
</script>
