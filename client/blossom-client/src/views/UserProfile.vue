<template>
  <div>
    <loading v-if="loadingUser" />
    <div class="userProfile blossomCard" v-else>
      <img src="../assets/BlossomLogo_v7.png" alt="logo Image" />
      <form class="form" v-on:submit.prevent="saveChanges">
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
        <input
          placeholder="Phone Number"
          class="blossomInput"
          v-model="phoneNumber"
          name="phone"
          pattern="[0]{1}[1]{1}[0-2]{1}[0-9]{8}"
          required
        />
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

        <button type="submit" class="blossomButton">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import loading from "../components/loading.vue";
export default {
  components: { loading },
  name: "UserProfile",
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
      loadingUser: false,
    };
  },
  methods: {
    async saveChanges() {
      //send new user data to backend
      const user = {
        name: this.username,
        email: this.email,
        phone: this.phoneNumber,
        address: this.address,
      };
      await this.$store.dispatch("authorization/update_user", user);
      this.$router.push("/");
    },
  },
  computed: {
    //map user state to the v-model
    ...mapState({
      curUser: (state) => state.authorization.user,
    }),
  },
  created() {},
  async mounted() {
    this.loadingUser = true;
    await this.$store.dispatch("authorization/get_user");
    this.username = this.curUser.name;
    this.email = this.curUser.email;
    this.phoneNumber = this.curUser.phone;
    this.address.city = this.curUser.address.city;
    this.address.street = this.curUser.address.street;
    this.address.buildingNo = this.curUser.address.buildingNo;
    this.address.apartmentNo = this.curUser.address.apartmentNo;
    this.loadingUser = false;
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
@import "../scss/BlossomButton";
@import "../scss/BlossomInput";
@import "../scss/BlossomCard";
@import "../scss/GlobalPopup";
@import "../scss/BlossomSelect";
.blossomInput {
  width: 50%;
  margin: 20px auto;
  background: transparent;
}
.blossomButton {
  margin: 40px auto;
}

.blossomSelectList {
  padding: 10px;
  width: calc(50% - 20px);
  margin: 0 calc(25%);
}
.passwordContainer {
  position: relative;
  margin: auto;
  width: 50%;
}
.form {
  display: flex;
  flex-grow: 1;
  align-content: center;
  flex-direction: column;
  padding: 0px 40px;
}
img {
  width: 250px;
  margin: auto;
}
</style>
