<template>
  <div class="editCard">
    <div class="transparentBackground">
      <div class="popupBody">
        <div class="hoverGolden" id="closePopup">
          <i class="fa fa-times" @click="toggleEditState()"></i>
        </div>
        <div class="logo">
          <img src="../../assets/BlossomLogo_v7.png" alt="blossomLogo" />
        </div>
        <div class="container">
          <div class="box" id="imageBox">
            <img src="../../assets/flower.jpg" alt="blossomLogo" />
          </div>
          <div class="box" id="editInfo">
            <input
              placeholder="Flower Name"
              class="blossomInput"
              type="name"
              v-model="flowerName"
            />
            <input
              placeholder="Description"
              class="blossomInput"
              type="description"
              v-model="flowerDescription"
            />
            <input
              placeholder="Price"
              class="blossomInput"
              type="price"
              v-model="price"
            />
            <input
              placeholder="Number Available"
              class="blossomInput"
              type="number"
              v-model="number"
            />
            <div class="editButton">
              <button class="blossomButton">Save Changes</button>
            </div>
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
@import "../../scss/General";
#closePopup {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.logo {
  text-align: center;
  img {
    width: 15%;
  }
}
.container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
.box {
  margin: 5px 5px 20px 5px;
  box-sizing: border-box;
  position: relative;
}
#imageBox {
  width: 35%;
  img {
    width: 100%;
    height: 100%;
    margin-top: 5px;
    background-size: cover;
    object-fit: cover;
  }
}
#editInfo {
  width: 65%;
  margin-left: 20px;
}
.editButton {
  display: flex;
  justify-content: flex-end;
}
.blossomButton {
  font-size: 15px;
  height: 10%;
}
.blossomInput {
  width: 80%;
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
  #imageBox {
    width: 50%;
  }
  #editInfo {
    width: 100%;
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
export default {
  name: "editCard",
  data: function () {
    return {
      name: "",
      description: "",
      price: "",
      number: "",
    };
  },
  methods: {
    toggleEditState() {
      this.$store.commit("popupsState/toggleEditCardPopup");
    },
  },
};
</script>
