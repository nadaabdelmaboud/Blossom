<template>
  <div class="editCard">
    <div class="transparentBackground">
      <div class="popupBody">
        <div class="hoverGolden" id="closePopup">
          <i class="fa fa-times" @click="toggleEditState()"></i>
        </div>
        <div class="logo">
          <img
            src="../../assets/BlossomLogo_v7.png"
            alt="logo Image"
            class="logoImg"
          />
        </div>
        <div class="containerDiv">
          <div class="box" id="imageBox">
            <img :src="getImage(editImage)" alt="blossomLogo" />
          </div>
          <div class="box" id="editInfo">
            <form v-on:submit.prevent="editCard" class="form">
              <div class="editForm">
                <div class="formData">
                  <input
                    placeholder="Title"
                    class="blossomInput"
                    v-model="title"
                  />
                  <input
                    placeholder="Description"
                    class="blossomInput"
                    v-model="description"
                  />
                  <input
                    placeholder="Amount"
                    class="blossomInput"
                    v-model="amount"
                    type="number"
                    min="0"
                  />
                  <input
                    placeholder="Price"
                    class="blossomInput"
                    v-model="price"
                    type="number"
                    min="0"
                  />
                  <div class="blossomSelectComponent" v-if="editType == false">
                    <div
                      class="blossomInput blossomSelect"
                      :class="{
                        optionChosen: categoryPlant != 'Choose Category',
                      }"
                      @click="
                        (showCategoryPlant = !showCategoryPlant),
                          (showSpecials = false),
                          (showCategoryBouquet = false)
                      "
                    >
                      {{ categoryPlant }}

                      <i class="fa fa-chevron-right arrow" id="openArrow"></i>
                    </div>
                    <div class="blossomSelectList" v-if="showCategoryPlant">
                      <input
                        type="text"
                        v-model="searchCategoryPlant"
                        placeholder="Search"
                      />
                      <div
                        v-for="(c, i) in plantCategories"
                        :key="i"
                        class="options"
                      >
                        <ul>
                          <li
                            v-if="
                              c.search(new RegExp(searchCategoryPlant, 'i')) !=
                              -1
                            "
                            @click="chooseCategoryPlant(c)"
                          >
                            {{ c }}
                          </li>
                        </ul>
                      </div>
                      <div class="create" @click="createCategory">
                        <strong>Create Category</strong>
                        <i class="fa fa-plus globalIcons"></i>
                      </div>
                    </div>
                  </div>

                  <div class="blossomSelectComponent" v-if="editType == true">
                    <div
                      class="blossomInput blossomSelect"
                      :class="{
                        optionChosen: categoryBouquet != 'Choose Category',
                      }"
                      @click="
                        (showCategoryBouquet = !showCategoryBouquet),
                          (showCategoryPlant = false),
                          (showSpecials = false)
                      "
                    >
                      {{ categoryBouquet }}

                      <i class="fa fa-chevron-right arrow" id="openArrow"></i>
                    </div>
                    <div class="blossomSelectList" v-if="showCategoryBouquet">
                      <input
                        type="text"
                        v-model="searchCategoryBouquet"
                        placeholder="Search"
                      />
                      <div
                        v-for="(c, i) in bouquetCategories"
                        :key="i"
                        class="options"
                      >
                        <ul>
                          <li
                            v-if="
                              c.search(
                                new RegExp(searchCategoryBouquet, 'i')
                              ) != -1
                            "
                            @click="chooseCategoryBouquet(c)"
                          >
                            {{ c }}
                          </li>
                        </ul>
                      </div>
                      <div class="create" @click="createBouquet">
                        <strong>Create Bouquet Category</strong>
                        <i class="fa fa-plus globalIcons"></i>
                      </div>
                    </div>
                  </div>

                  <div class="blossomSelectComponent" v-if="editType == true">
                    <div
                      class="blossomInput blossomSelect"
                      :class="{
                        optionChosen: specialityName != 'Choose Special',
                      }"
                      @click="
                        (showSpecials = !showSpecials),
                          (showCategoryPlant = false),
                          (showCategoryPlant = false)
                      "
                    >
                      {{ specialityName }}

                      <i class="fa fa-chevron-right arrow" id="openArrow"></i>
                    </div>
                    <div class="blossomSelectList" v-if="showSpecials">
                      <input
                        type="text"
                        v-model="searchSpecial"
                        placeholder="Search"
                      />
                      <div
                        v-for="(s, i) in bouquetSentiments"
                        :key="i"
                        class="options"
                      >
                        <ul>
                          <li
                            v-if="
                              s.search(new RegExp(searchSpecial, 'i')) != -1
                            "
                            @click="chooseSpecial(s)"
                          >
                            {{ s }}
                          </li>
                        </ul>
                      </div>
                      <div class="create" @click="createSpeciality">
                        <strong>Create Special</strong>
                        <i class="fa fa-plus globalIcons"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="editButton">
                <button class="blossomButton" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/GlobalPopup";
@import "../../scss/Colors";
@import "../../scss/General";
@import "../../scss/BlossomButton";
@import "../../scss/BlossomInput";
@import "../../scss/BlossomCard";
@import "../../scss/BlossomSelect";
@import "../../scss/BlossomToast";
@import "../../scss/BlossomRadio";
#closePopup {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
}
.popupBody {
  width: 800px;
}
.logo {
  text-align: center;
  .logoImg {
    display: flex;
    justify-self: center;
    width: 150px;
  }
}
.containerDiv {
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
  width: 50%;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
  img {
    width: 100%;
    height: 98%;
    margin-top: 5px;
    background-size: cover;
    object-fit: cover;
  }
}
#editInfo {
  width: 60%;
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
  width: 95%;
}
.formData {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}
@media screen and (max-width: 993px) {
  .containerDiv {
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
@media screen and (max-width: 650px) {
  .blossomSelectList {
    width: 90%;
  }

  .form {
    display: flex;
    flex-grow: 1;
    align-content: center;
    flex-direction: column;
    padding: 0px;
  }
}
@media screen and (max-width: 600px) {
  .popupBody {
    margin: 50px auto;
    width: 80%;
  }
}
@media screen and (max-width: 300px) {
  .containerDiv {
    width: 95%;
  }
  .blossomButton {
    height: 50px;
  }
}
</style>

<script>
import { mapState } from "vuex";
import { default as getImage } from "../../mixins/getImage";
export default {
  name: "editCard",
  data: function () {
    return {
      title: "",
      description: "",
      searchCategoryPlant: "",
      searchCategoryBouquet: "",
      searchSpecial: "",
      amount: "",
      price: "",
      categoryPlant: "Choose Category",
      categoryBouquet: "Choose Category",
      specialityName: "Choose Special",
      showCategoryPlant: false,
      showCategoryBouquet: false,
      showSpecials: false,
    };
  },
  mixins: [getImage],
  methods: {
    toggleEditState() {
      this.$store.commit("popupsState/toggleEditCardPopup");
    },
    createSpeciality() {
      this.$store.commit("popupsState/toggleCreateSpecialPopup");
      this.showSpecials = false;
    },
    createCategory() {
      this.$store.commit("popupsState/toggleCreateCategoryPopup");
      this.showCategoryPlant = false;
    },
    createBouquet() {
      this.$store.commit("popupsState/toggleCreateBouquetPopup");
      this.showCategoryBouquet = false;
    },
    chooseCategoryPlant(categoryName) {
      this.categoryPlant = categoryName;
      this.showCategoryPlant = false;
    },
    chooseCategoryBouquet(categoryName) {
      this.categoryBouquet = categoryName;
      this.showCategoryBouquet = false;
    },
    chooseSpecial(specialityName) {
      this.specialityName = specialityName;
      this.showSpecials = false;
    },
    editCard() {
      //true if card type is flower & false if plant
      if (this.editType == false) {
        if (this.categoryPlant == "Choose Category") this.categoryPlant = "";
        let amountNum = this.amount != "" ? parseInt(this.amount) : "";
        let priceNum = this.price != "" ? parseInt(this.price) : "";
        let payload = {
          name: this.title,
          type: this.categoryPlant,
          price: priceNum,
          count: {
            available: amountNum,
          },
          info: this.description,
        };
        console.log("payload", payload);
        this.$store.dispatch("homePage/editPlantsCard", {
          id: this.editCardId,
          payload: payload,
        });
      } else {
        if (this.categoryBouquet == "Choose Category")
          this.categoryBouquet = "";
        if (this.specialityName == "Choose Special") this.specialityName = "";
        let amountNum = this.amount != "" ? parseInt(this.amount) : "";
        let priceNum = this.price != "" ? parseInt(this.price) : "";
        let payload = {
          name: this.title,
          bouquetCategory: this.categoryBouquet,
          bouquetSentiment: this.specialityName,
          price: priceNum,
          count: amountNum,
          info: this.description,
        };
        console.log("payload", payload);
        this.$store.dispatch("homePage/editBouquetsCard", {
          id: this.editCardId,
          payload: payload,
        });
      }
      this.$store.commit("popupsState/toggleEditCardPopup");
    },
  },
  computed: {
    ...mapState({
      plantCategories: (state) => state.categories.plantCategories,
      bouquetCategories: (state) => state.categories.bouquetCategories,
      bouquetSentiments: (state) => state.sentiments.bouquetSentiments,
      editCardId: (state) => state.homePage.editCardId,
      editImage: (state) => state.homePage.editImage,
      editType: (state) => state.homePage.editType,
    }),
  },
  async beforeCreate() {
    await this.$store.dispatch("categories/getPlantCategories");
    await this.$store.dispatch("categories/getBouquetCategories");
    await this.$store.dispatch("sentiments/getSentiments");
  },
};
</script>
