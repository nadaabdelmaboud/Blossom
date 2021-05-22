<template>
  <div class="signup">
    <BlossomLogo />
    <form class="form">
      <i class="fa fa-times hoverGolden close" @click="close"></i>
      <h3>Welcome to Blossom</h3>
      <input
        placeholder="Username"
        class="blossomInput"
        v-model="username"
        required
      />
      <input
        placeholder="Email"
        type="email"
        class="blossomInput"
        v-model="email"
        required
      />

      <div class="passwordContainer">
        <input
          placeholder="Password"
          class="blossomInput"
          id="passwordInput"
          type="password"
          v-model="password"
          required
        />
        <i
          v-if="showPassword"
          class="fa fa-eye-slash passwordIcon"
          id="togglePassword"
          @click="togglePasswordState"
        ></i>
        <i
          v-else
          class="fa fa-eye passwordIcon"
          id="togglePassword"
          @click="togglePasswordState"
        ></i>
      </div>

      <input
        placeholder="Phone Number"
        class="blossomInput"
        v-model="phoneNumber"
        required
      />
      <p class="addressLabel">Address</p>

      <div class="address">
        <div class="blossomSelectComponent">
          <div
            class="blossomInput blossomSelect"
            :class="{
              optionChosen: address.city != 'City',
            }"
            @click="showCity = !showCity"
          >
            {{ address.city }}

            <i class="fa fa-chevron-right arrow" id="openArrow"></i>
          </div>
          <div class="blossomSelectList" v-if="showCity">
            <div v-for="(c, i) in cities" :key="i" class="options">
              <ul>
                <li @click="(address.city = c.name), (showCity = false)">
                  {{ c.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <input
          placeholder="Street"
          class="blossomInput"
          v-model="address.street"
          required
        />
        <input
          placeholder="building Number"
          type="number"
          class="blossomInput"
          min="0"
          v-model="address.buildingNo"
          required
        />
        <input
          placeholder="apartment Number"
          type="number"
          class="blossomInput"
          min="0"
          v-model="address.apartmentNo"
          required
        />
      </div>
      <button class="blossomButton" @submit="signup">Signup</button>
      <div class="toSignup">
        Have an account?
        <span class="hoverGolden" @click="switchState">login</span>
      </div>
    </form>
  </div>
</template>

<script>
import BlossomLogo from "./blossomLogo";
import { default as togglePasswordState } from "../../mixins/togglePasswordState";
export default {
  components: {
    BlossomLogo,
  },
  mixins: [togglePasswordState],
  data: function () {
    return {
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      address: {
        country: "egypt",
        city: "City",
        street: "",
        buildingNo: "",
        apartmentNo: "",
      },
      showCity: false,
      cities: [
        {
          name: "Cairo",
        },
        {
          name: "Giza",
        },
      ],
      showPassword: true,
    };
  },
  methods: {
    signup() {
      const user = {
        name: this.username,
        email: this.email,
        password: this.password,
        repeat_password: this.password,
        phone: this.phoneNumber,
        address: this.address,
      };
      this.$store.dispatch("authorization/signup", user);
    },
    switchState() {
      this.$emit("switchState", true);
    },
    close() {
      this.$store.commit("popupsState/toggleAuthPopup");
    },
  },
  computed: {},
  created: function () {},
};
</script>

<style lang="scss" scoped>
@import "../../scss/Colors";
@import "../../scss/GlobalPopup";
@import "../../scss/General";
@import "../../scss/BlossomButton";
@import "../../scss/BlossomInput";
@import "../../scss/BlossomSelect";

.signup {
  display: flex;
  align-content: center;
}
.form {
  display: flex;
  flex-grow: 1;
  align-content: center;
  flex-direction: column;
  padding: 0px 40px;
  width: calc(60% - 80px);
}

.toSignup {
  text-align: center;
  margin: 20px 0px;
  color: $golden;
}

.blossomSelectList {
  padding: 10px;
  width: calc(100% - 20px);
}
.address {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  .blossomInput {
    width: 40%;
    margin: 0%;
  }
}
.addressLabel {
  text-align: start;
  color: $golden;
}
.blossomSelectComponent {
  width: 40%;
  .blossomInput {
    width: 100%;
  }
}

@media screen and (max-width: 450px) {
  .address {
    .blossomInput {
      width: 100%;
    }
  }
  .addressLabel {
    text-align: start;
    color: $golden;
  }
  .blossomSelectComponent {
    width: 100%;
    .blossomInput {
      width: 100%;
    }
  }
}
</style>
