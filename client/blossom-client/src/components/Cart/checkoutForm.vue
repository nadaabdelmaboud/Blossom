<template>
  <div class="checkoutForm">
    <div class="transparentBackground">
      <div class="popupBody">
        <div class="hoverGolden" id="closePopup">
          <i class="fa fa-times" @click="toggleCheckoutState()"></i>
        </div>
        <div class="logo">
          <p>Blossom</p>
        </div>
        <div class="block">
          <div class="box chooseAddress">
            <p v-if="errorAddress" id="errorMessage">
              Error pick address first
            </p>
            <div class="blossomRadio">
              <div class="title">
                <h3>Choose where to deliver order?</h3>
              </div>
              <div class="choose">
                <label class="container labelContainer"
                  ><p>Saved Address</p>
                  <input
                    type="radio"
                    name="addressType"
                    value="Saved Address"
                    v-model="addressType"
                    @click="fadeSurpriseAddress()"
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="container labelContainer"
                  ><p>Surprise Address</p>
                  <input
                    type="radio"
                    name="addressType"
                    value="Surprise Address"
                    v-model="addressType"
                    @click="showSurpriseAddress()"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="box blossomRadio" v-if="surprise">
              <div class="chooseCity">
                <label class="container labelContainer"
                  ><p>Cairo</p>
                  <input
                    type="radio"
                    name="addressCity"
                    value="cairo"
                    v-model="city"
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="container labelContainer"
                  ><p>Giza</p>
                  <input
                    type="radio"
                    name="addressCity"
                    value="giza"
                    v-model="city"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <input
                placeholder="Street"
                class="blossomInput"
                type="text"
                v-model="surpriseAddress"
              />
              <input
                placeholder="Building Number"
                class="blossomInput"
                type="number"
                v-model="buildingNo"
              />
              <input
                placeholder="Apartment Number"
                class="blossomInput"
                type="number"
                v-model="apartmentNo"
              />
            </div>
          </div>
          <div class="box choosePayment">
            <p v-if="errorPayment" id="errorMessage">
              Error pick way of payment first
            </p>
            <div class="blossomRadio">
              <div class="title">
                <h3>Choose way of payment?</h3>
              </div>
              <div class="choose">
                <label class="container labelContainer"
                  ><p>Cash</p>
                  <input
                    type="radio"
                    name="paymentType"
                    value="cash"
                    v-model="payment"
                    @click="showCashMoney()"
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="container labelContainer"
                  ><p>Paypal</p>
                  <input
                    type="radio"
                    name="paymentType"
                    value="paypal"
                    v-model="payment"
                    @click="showPaypal()"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="box cashMoney" v-if="cashPayment">
            <h2 id="totalPrice">Total Price: {{ totalPrice }} LE</h2>
          </div>
          <div class="box confirm">
            <button class="blossomButton" @click="confirm()">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/GlobalPopup";
@import "../../scss/Colors";
@import "../../scss/BlossomButton";
@import "../../scss/BlossomInput";
@import "../../scss/BlossomRadio";
@import "../../scss/General";
#closePopup {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
}
.logo {
  text-align: center;
  p {
    color: $darkGolden;
    font-size: 27px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 0;
  }
}
.block {
  padding: 12px;
}
.container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
.labelContainer {
  justify-content: start;
  p {
    font-size: 20px;
    margin: 0;
    color: $darkGolden;
  }
  .checkmark {
    margin-top: 2px;
  }
}
.box {
  margin: 20px 5px 20px 5px;
  box-sizing: border-box;
  position: relative;
}
.blossomRadio {
  display: flex;
  flex-direction: column;
}
.choose {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.blossomInput {
  width: 90%;
}
#errorMessage {
  color: red;
  margin-top: 7px;
  margin-bottom: 3px;
}
.cashMoney,
.paypal,
.confirm {
  text-align: center;
}
#totalPrice {
  color: $darkGolden;
  font-size: 25px;
  font-weight: 700;
}
.blossomButton {
  width: 50%;
}
h3 {
  font-weight: 700;
  color: $darkGolden;
  margin: 7px;
}
.chooseCity {
  display: flex;
  flex-direction: row;
}
.title {
  display: flex;
  justify-content: flex-start;
}
@media screen and (max-width: 993px) {
  .container {
    flex-flow: wrap;
    width: 85%;
    margin: auto;
  }
  .box {
    width: 100%;
    margin-top: 20px;
  }
}
@media screen and (max-width: 600px) {
  .popupBody {
    margin: 50px auto;
    width: 80%;
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "checkoutForm",
  data: function () {
    return {
      currentAddress: "",
      surpriseAddress: "",
      addressType: "",
      city: "",
      apartmentNo: "",
      buildingNo: "",
      surprise: false,
      payment: "",
      cashPayment: false,
      paypalPayment: false,
      errorAddress: false,
      errorPayment: false,
    };
  },
  computed: {
    ...mapState({
      totalPrice: (state) => state.cart.totalPrice,
    }),
  },
  methods: {
    toggleCheckoutState() {
      this.$store.commit("popupsState/toggleCheckoutFormPopup");
      this.$store.commit("cart/setTotalPrice", 0);
    },
    showSurpriseAddress() {
      this.surprise = true;
      this.errorAddress = false;
    },
    fadeSurpriseAddress() {
      this.surprise = false;
      this.errorAddress = false;
    },
    showCashMoney() {
      this.cashPayment = true;
      this.paypalPayment = false;
      this.errorPayment = false;
    },
    showPaypal() {
      this.cashPayment = false;
      this.paypalPayment = true;
      this.errorPayment = false;
    },
    confirm() {
      if (this.addressType == "") this.errorAddress = true;
      if (
        this.surprise == true &&
        (this.city == "" ||
          this.surpriseAddress == "" ||
          this.buildingNo == "" ||
          this.apartmentNo == "")
      )
        this.errorAddress = true;
      if (this.payment == "") this.errorPayment = true;
      if (this.errorAddress == false && this.errorPayment == false) {
        let address = {
          address: {
            country: "egypt",
            city: this.city,
            street: this.surpriseAddress,
            buildingNo: parseInt(this.buildingNo),
            apartmentNo: parseInt(this.apartmentNo),
          },
        };
        if (this.surprise == true)
          this.$store.dispatch("cart/buyCart", {
            address: address,
            payment: this.payment,
          });
        else
          this.$store.dispatch("cart/buyCart", {
            address: null,
            payment: this.payment,
          });
      }
      this.$store.commit("popupsState/toggleCheckoutFormPopup");
    },
  },
};
</script>
