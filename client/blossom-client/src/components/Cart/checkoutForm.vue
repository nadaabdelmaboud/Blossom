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
          <div class="box surpriseAddress" v-if="surprise">
            <input
              placeholder="The Surprise Address"
              class="blossomInput"
              type="text"
              v-model="surpriseAddress"
            />
          </div>
          <div class="box orderDate">
            <h2 id="deliveryTime">Delivery Time</h2>
            <p id="selectDate">Select date with in next five days</p>
            <div class="selectDeliveryTime">
              <div class="dayBox">
                {{ today }}
                <i class="fa fa-arrow-up" @click="increaseDay()"></i>
                <i class="fa fa-arrow-down" @click="decreaseDay()"></i>
              </div>
              <div class="monthBox">{{ month }}/{{ year }}</div>
              <div class="chooseHour">
                /{{ deliveryHour }}:00 PM
                <i class="fa fa-arrow-up" @click="increaseHour()"></i>
                <i class="fa fa-arrow-down" @click="decreaseHour()"></i>
              </div>
            </div>
          </div>
          <div class="box choosePayment">
            <p v-if="errorPayment" id="errorMessage">
              Error pick way of payment first
            </p>
            <div class="blossomRadio">
              <label class="container labelContainer"
                ><p>Cash</p>
                <input
                  type="radio"
                  name="paymentType"
                  value="Cash"
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
                  value="Paypal"
                  v-model="payment"
                  @click="showPaypal()"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="box cashMoney" v-if="cashPayment">
            <h2 id="totalPrice">Total Price: 2500 LE</h2>
          </div>
          <div class="box paypal" v-if="paypalPayment">
            <button class="paypalButton">Paypal</button>
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
    margin-bottom: 25px;
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
  justify-content: space-between;
}
.blossomInput {
  width: 90%;
}
#deliveryTime {
  color: $darkGolden;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 0;
}
#errorMessage {
  color: red;
  margin-top: 7px;
  margin-bottom: 3px;
}
.selectDeliveryTime {
  display: flex;
  padding: 12px;
  .dayBox,
  .monthBox,
  .chooseHour {
    color: $darkGolden;
    font-size: 20px;
    padding: 7px;
    i {
      cursor: pointer;
      padding: 3px;
    }
  }
  .monthBox {
    padding-top: 10px;
  }
  .chooseHour {
    i {
      padding: 3px;
    }
  }
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
.paypalButton {
  background-color: transparent;
  border-color: $darkGolden;
  box-shadow: none;
  color: $darkGolden;
  border: 2px solid $darkGolden;
  width: 50%;
  font-size: 20px;
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
}
#selectDate {
  margin: 0;
  margin-top: 5px;
  color: $darkGolden;
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
  .selectDeliveryTime {
    flex-wrap: wrap;
  }
}
</style>

<script>
export default {
  name: "checkoutForm",
  data: function () {
    return {
      currentAddress: "",
      surpriseAddress: "",
      addressType: "",
      surprise: false,
      date: "",
      time: "",
      formattedDate: "",
      formattedTime: "",
      payment: "",
      cashPayment: false,
      paypalPayment: false,
      errorAddress: false,
      errorPayment: false,
      today: 0,
      month: 0,
      year: 0,
      currentDay: 0,
      currentMonth: 0,
      deliveryHour: 1,
      monthDays: 0,
      counter: 4,
    };
  },
  methods: {
    toggleCheckoutState() {
      this.$store.commit("popupsState/toggleCheckoutFormPopup");
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
    clearDate() {
      this.date = "";
      this.formattedDate = "";
      console.log("cleared");
    },
    clearTime() {
      this.time = "";
      this.formattedTime = "";
      console.log("cleared");
    },
    increaseDay() {
      if (this.counter > 0) {
        if (this.today + 1 == this.monthDays) {
          this.today = 1;
          this.month = this.month + 1;
          this.counter = this.counter - 1;
        } else {
          this.today = this.today + 1;
          this.counter = this.counter - 1;
        }
      }
    },
    decreaseDay() {
      if (this.today - 1 >= this.currentDay) {
        this.today = this.today - 1;
        this.counter = this.counter + 1;
      }
    },
    increaseHour() {
      if (this.deliveryHour + 1 <= 5) this.deliveryHour = this.deliveryHour + 1;
    },
    decreaseHour() {
      if (this.deliveryHour - 1 >= 1) this.deliveryHour = this.deliveryHour - 1;
    },
    //donot forget to check if paypal is done correctly before confirmation
    confirm() {
      if (this.addressType == "") this.errorAddress = true;
      if (this.payment == "") this.errorPayment = true;
    },
  },
  mounted() {
    var currentDate = new Date();
    this.today = parseInt(currentDate.getDate() + 1);
    this.currentDay = this.today;
    this.month = parseInt(currentDate.getMonth() + 1);
    this.currentMonth = this.month;
    this.year = parseInt(currentDate.getFullYear());

    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    this.monthDays = new Date(year, month + 1, 0).getDate();
  },
};
</script>
