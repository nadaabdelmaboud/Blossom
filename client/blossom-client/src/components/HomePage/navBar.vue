<template>
  <div class="navBar">
    <div class="Logo">
      <img src="../../assets/BlossomLogo_v7.png" alt="Logo" />
    </div>
    <div class="navContent" id="stickyNav">
      <div class="blossom">Blossom</div>
      <div class="pages">
        <button id="bars" @click="showlist()">
          <i class="fa fa-bars"></i>
        </button>
        <ul id="listItems">
          <li v-if="noUser" @click="showLogin()">Login</li>
          <li v-if="noUser">Signup</li>
          <li v-if="admin">Users</li>
          <li v-if="admin">Orders</li>
          <li v-if="admin">Statistics</li>
          <li v-if="user">Track Orders</li>
          <li v-if="user"><i class="fa fa-user"></i> Profile</li>
          <li v-if="user || admin">Logout</li>
        </ul>
        <div v-if="user" id="cart">
          <i class="fa fa-shopping-cart"></i> {{ count }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.navBar {
  background-color: black;
  margin-bottom: 30px;
  width: 100%;
  height: 275px;
  z-index: 10;
}
img {
  width: 210px;
  text-align: center;
  display: block;
  margin: auto;
}
.navContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  z-index: 1;
}
.blossom {
  color: $darkGolden;
  font-size: 27px;
  font-weight: 700;
  width: 20%;
  padding-left: 15px;
  padding-bottom: 7px;
  cursor: pointer;
  &:hover {
    color: $lightGolden;
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
  color: $darkGolden;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: $lightGolden;
  }
}
ul,
li:focus {
  outline: none;
}
#cart {
  float: right;
  width: 30px;
  padding: 7px;
  padding-top: 2px;
  padding-right: 7px;
  padding-bottom: 2px;
  background-color: $golden;
  margin-top: 6px;
  color: black;
}
#bars {
  display: none;
  float: right;
  margin-left: 5px;
  margin-bottom: 2px;
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
@media screen and (max-width: 767px) {
  #bars {
    display: inline-block;
  }
  #listItems {
    display: none;
  }
  #listItems.show {
    position: absolute;
    z-index: 10;
    background-color: black;
    width: 50%;
    display: block;
    transition: background-color 0.5s ease;
    margin-top: 40px;
    li {
      display: block;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  name: "navBar",
  data: function () {
    return {
      admin: false,
      user: false,
      noUser: true,
      count: 0,
      toggleList: false,
    };
  },
  mounted() {
    var navId = document.getElementById("stickyNav");
    window.onscroll = function () {
      if (window.pageYOffset > 210) {
        navId.style.cssText +=
          "position:fixed; top:0; width:100%; background-color:black;";
      } else {
        navId.style = "default";
      }
    };
  },
  methods: {
    showlist() {
      var list = document.getElementById("listItems");
      list.classList.toggle("show");
    },
    showLogin() {
      this.$store.commit("popupsState/toggleAuthPopup");
    },
  },
};
</script>
