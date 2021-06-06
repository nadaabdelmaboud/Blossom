<template>
  <div class="navBar">
    <div class="firstNav">
      <ul>
        <li v-if="isAdmin == true">Upload</li>
        <router-link v-if="isAdmin == true" to="/statistics">
          <li>Statistics</li>
        </router-link>
        <li v-if="status == 'success' && isAdmin == false">Track Orders</li>
        <router-link to="/blossomUsers">
          <li v-if="isAdmin == true">Users</li>
        </router-link>
      </ul>
    </div>
    <div class="Logo">
      <img src="../../assets/BlossomLogo_v7.png" alt="Logo" />
    </div>
    <div class="navContent" id="stickyNav">
      <div class="blossom">
        <router-link to="/"> Blossom </router-link>
      </div>
      <div class="pages">
        <button id="bars" @click="showlist()">
          <i class="fa fa-bars"></i>
        </button>
        <ul id="listItems">
          <router-link to="/">
            <li @click="callFlowers()">
              <i class="fa fa-pagelines"></i> Flowers
            </li>
          </router-link>
          <router-link to="/">
            <li @click="callPlants()"><i class="fa fa-leaf"></i> Plants</li>
          </router-link>
          <li v-if="status == ''" @click="showLogin()">Login</li>
          <li v-if="status == ''">Signup</li>
          <li v-if="isAdmin == true">Orders</li>
          <li v-if="status == 'success' && isAdmin == false">
            <i class="fa fa-user"></i> Profile
          </li>
          <li
            v-if="status == 'success' && (isAdmin == false || isAdmin == true)"
            @click="logOut()"
          >
            Logout
          </li>
        </ul>
        <router-link to="/userCart">
          <div v-if="status == 'success' && isAdmin == false" id="cart">
            <i class="fa fa-shopping-cart"></i> {{ count }}
          </div>
        </router-link>
      </div>
    </div>
    <div id="showMyList">
      <ul>
        <li v-if="status == ''" @click="showLogin()">Login</li>
        <li v-if="status == ''">Signup</li>
        <router-link to="/">
          <li @click="callFlowers()">
            <i class="fa fa-pagelines"></i> Flowers
          </li>
        </router-link>
        <router-link to="/">
          <li @click="callPlants()"><i class="fa fa-leaf"></i> Plants</li>
        </router-link>
        <li v-if="isAdmin == true">Orders</li>
        <li v-if="status == 'success' && isAdmin == false">
          <i class="fa fa-user"></i> Profile
        </li>
        <li
          v-if="status == 'success' && (isAdmin == false || isAdmin == true)"
          @click="logOut()"
        >
          Logout
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.navBar {
  background-color: black;
  margin-bottom: 30px;
  width: 100%;
  //height: 210px;
  height: 40%;
  z-index: 10;
  display: flex;
  flex-direction: column;
}
img {
  width: 120px;
  text-align: center;
  display: block;
  margin: auto;
}
.firstNav {
  width: 100%;
  background-color: $golden;
  li {
    font-size: 15px;
    padding-left: 1px;
    color: black;
    font-weight: 700;
    &:hover {
      color: black;
    }
  }
}
.navContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  border-bottom: solid 1px $golden;
  padding-left: 10px;
  z-index: 1;
  font-weight: 700;
}
a {
  text-decoration: none;
  color: inherit;
}
.blossom {
  color: $lightGolden;
  font-size: 30px;
  font-weight: 700;
  width: 20%;
  padding-left: 15px;
  padding-bottom: 7px;
  cursor: pointer;
  &:hover {
    color: $golden;
  }
}
.pages {
  width: 80%;
  padding-right: 10px;
}
ul {
  margin: 0;
  padding: 0;
  float: right;
}
li {
  list-style: none;
  display: inline-block;
  padding: 8px 17px;
  text-align: center;
  color: $lightGolden;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: $golden;
  }
}
ul,
li:focus {
  outline: none;
}
#cart {
  float: right;
  //width: 45px;
  padding: 7px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: $golden;
  margin-top: 6px;
  margin-right: 6px;
  color: black;
  cursor: pointer;
}
#bars {
  display: none;
  float: right;
  margin-left: 5px;
  //margin-bottom: 1px;
  margin-top: 3px;
  margin-right: 10px;
  font-size: 25px;
  background-color: transparent;
  border-color: transparent;
  color: $darkGolden;
  width: 30px;
  cursor: pointer;
}
button:focus {
  outline: none;
}
#showMyList {
  width: 100%;
  display: none;
  background-color: black;
}
@media screen and (max-width: 767px) {
  #bars {
    display: inline-block;
  }
  #listItems {
    display: none;
  }
  #showMyList.show {
    display: block;
    border-top: solid 1px $golden;
    z-index: 10;
    ul {
      text-align: center;
      width: 100%;
      li {
        display: block;
        font-weight: 700;
      }
    }
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "navBar",
  data: function () {
    return {
      count: 0,
      toggleList: false,
    };
  },
  mounted() {
    console.log("admin", this.isAdmin);

    var navId = document.getElementById("stickyNav");
    var navList = document.getElementById("showMyList");
    window.onscroll = function () {
      if (window.pageYOffset > 150) {
        navId.style.cssText +=
          "position:fixed; top:0; width:100%; background-color:black;";
        navList.style.cssText += "position:fixed; top:57px;";
      } else {
        navId.style = "default";
        navList.style = "default";
      }
    };
  },
  computed: {
    ...mapState({
      isAdmin: (state) => state.authorization.isAdmin,
      status: (state) => state.authorization.status,
    }),
  },
  methods: {
    showlist() {
      var list = document.getElementById("showMyList");
      list.classList.toggle("show");
    },
    showLogin() {
      this.$store.commit("popupsState/toggleAuthPopup");
    },
    callFlowers() {
      this.$store.commit("homePage/setIsFlower", true);
      this.$store.commit("homePage/setCateogry", "");
      this.$store.commit("homePage/setSentiment", "");
      this.$store.commit("homePage/setCounter", 1);
      this.$store.dispatch("homePage/callFlowerCards", 1);
    },
    callPlants() {
      this.$store.commit("homePage/setIsFlower", false);
      this.$store.commit("homePage/setCateogry", "");
      this.$store.commit("homePage/setCounter", 1);
      this.$store.dispatch("homePage/callPlantCards", 1);
    },
    logOut() {
      this.$store.dispatch("authorization/logout");
    },
  },
};
</script>
