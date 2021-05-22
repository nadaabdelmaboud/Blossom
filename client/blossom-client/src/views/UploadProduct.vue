<template>
  <div
    class="upload blossomCard"
    :class="{
      marginDown: showCategory || showSpecials,
    }"
  >
    <img src="../assets/BlossomLogo_v7.png" alt="logo Image" class="logoImg" />
    <input
      style="display: none"
      type="file"
      accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
      @change="onFileSelected"
      ref="fileInput"
    />
    <div class="uploadForm">
      <div class="formData">
        <input placeholder="Title" class="blossomInput" v-model="title" />
        <input
          placeholder="Description"
          class="blossomInput"
          v-model="description"
        />
        <input placeholder="Amount" class="blossomInput" v-model="amount" />
        <input placeholder="Price" class="blossomInput" v-model="price" />

        <div class="blossomRadio">
          <p>Type</p>
          <label class="container"
            >Plant
            <input type="radio" name="type" value="Plant" v-model="type" />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Bouquet
            <input type="radio" name="type" value="Bouquet" v-model="type" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div class="blossomSelectComponent">
          <div
            class="blossomInput blossomSelect"
            :class="{
              optionChosen: category != 'Choose Category',
            }"
            @click="showCategoriesOptions"
          >
            {{ category }}

            <i class="fa fa-chevron-right arrow" id="openArrow"></i>
          </div>
          <div class="blossomSelectList" v-if="showCategory">
            <input type="text" v-model="searchCategory" placeholder="Search" />
            <div v-for="(c, i) in categories" :key="i" class="options">
              <ul>
                <li
                  v-if="c.name.search(new RegExp(searchCategory, 'i')) != -1"
                  @click="chooseCategory(c.name)"
                >
                  {{ c.name }}
                </li>
              </ul>
            </div>
            <div class="create" @click="createCategory">
              <strong>Create Category</strong>
              <i class="fa fa-plus globalIcons"></i>
            </div>
          </div>
        </div>

        <div class="blossomSelectComponent" v-if="type && type == 'Bouquet'">
          <div
            class="blossomInput blossomSelect"
            :class="{
              optionChosen: specialityName != 'Choose Special',
            }"
            @click="(showSpecials = !showSpecials), (showCategory = false)"
          >
            {{ specialityName }}

            <i class="fa fa-chevron-right arrow" id="openArrow"></i>
          </div>
          <div class="blossomSelectList" v-if="showSpecials">
            <input type="text" v-model="searchSpecial" placeholder="Search" />
            <div v-for="(s, i) in specialities" :key="i" class="options">
              <ul>
                <li
                  v-if="s.name.search(new RegExp(searchSpecial, 'i')) != -1"
                  @click="chooseSpecial(s.name)"
                >
                  {{ s.name }}
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
      <div
        class="imageInput doubleBorder"
        :class="{ noImage: validate && !imageFile }"
        v-if="!imageFile"
        @click="$refs.fileInput.click()"
      >
        <p v-if="validate && !imageFile">Image is required to create a pin.</p>
        <p v-else>Click to upload</p>
        <i v-if="validate && !imageFile" class="fa fa-exclamation-circle"></i>
        <i v-else class="fa fa-arrow-circle-up"></i>
      </div>
      <img
        ref="image"
        style="display: none"
        id="imgPreview"
        src=""
        alt="uploaded img"
      />
      <i v-if="imageFile" class="fa fa-trash deleteicon" @click="unUpload"></i>
    </div>

    <button class="blossomButton" @click="upload">Add Product</button>

    <div class="toast" id="chooseType">
      <div class="addedToCart">Choose type first</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../scss/Colors";
@import "../scss/General";
@import "../scss/BlossomButton";
@import "../scss/BlossomInput";
@import "../scss/BlossomCard";
@import "../scss/BlossomSelect";
@import "../scss/BlossomToast";
@import "../scss/BlossomRadio";

.uploadForm {
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 40px;
}
.formData {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 60%;
}
.imageInput {
  width: 30%;
  height: 80%;
  min-height: 420px;
  margin: 0 5%;
  text-align: center;
  color: $golden;
  background-color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
  i {
    text-align: center;
    margin: 30px;
    font-size: 30px;
    transition: 0.25s ease-in-out;
  }
  i:hover {
    transform: scale(1.2);
  }
  p {
    padding: 0px 30px;
    text-align: center;
    font-size: 20px;
  }
}
.deleteicon {
  position: absolute;
  width: 38px;
  height: 38px;
  text-align: center;
  padding-top: 9px;
  font-size: 20px;
  transition: 0.25s ease-in-out;
  color: $golden;
  right: 10%;
  cursor: pointer;
}
.deleteicon:hover {
  transform: scale(1.2);
}
#imgPreview {
  max-width: 30%;
  margin: 0 5%;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
}
@media screen and (max-width: 650px) {
  .imageInput {
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
}
.doubleBorder {
  position: relative;
}
.doubleBorder:before {
  background: none;
  border: 3px dashed $golden;
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
}
.imageInput:hover {
  color: $lightGolden;
}
.noImage {
  border: 2px solid red;
  background-color: rgba(230, 0, 35, 0.03);
  color: rgb(230, 0, 35);
}
.addedToCart {
  padding: auto;
  width: 100%;
}

.blossomSelectList {
  width: 90%;
}
</style>

<script>
import { default as showToast } from "../mixins/toast";
export default {
  name: "UploadProduct",
  mounted() {},
  mixins: [showToast],
  data: function () {
    return {
      title: "",
      description: "",
      searchCategory: "",
      searchSpecial: "",
      amount: "",
      price: "",
      category: "Choose Category",
      specialityName: "Choose Special",
      type: null,
      showCategory: false,
      showSpecials: false,
      imageFile: null,
      validate: false,
      imgExtention: "",
      categories: [
        {
          name: "lillies",
        },
        {
          name: "tulip",
        },
      ],
      specialities: [
        {
          name: "I love you",
        },
        {
          name: "happy birth day",
        },
      ],
      tips: [],
    };
  },
  methods: {
    onFileSelected: function (event) {
      this.imageFile = event.target.files[0];
      let splited = this.imageFile.name.split(".");
      this.imgExtention = splited[splited.length - 1];
      console.log("my image ", this.imgExtention);
      if (this.imageFile) {
        const reader = new FileReader();
        var image = new Image();
        reader.addEventListener("load", function () {
          var img = document.getElementById("imgPreview");
          img.setAttribute("src", this.result);
          img.style.display = "block";
          image.setAttribute("src", this.result);
        });
        reader.readAsDataURL(this.imageFile);
      }
    },
    unUpload: function () {
      this.imageFile = null;
      var img = document.getElementById("imgPreview");
      img.setAttribute("src", "");
      img.style.display = "none";
      this.dragover = false;
    },
    createSpeciality() {
      this.$store.commit("popupsState/toggleCreateSpecialPopup");
      this.showSpecials = false;
    },
    createCategory() {
      this.$store.commit("popupsState/toggleCreateCategoryPopup");
      this.showCategory = false;
    },
    chooseCategory(categoryName) {
      this.category = categoryName;
      this.showCategory = false;
    },
    chooseSpecial(specialityName) {
      this.specialityName = specialityName;
      this.showSpecials = false;
    },
    showCategoriesOptions() {
      if (!this.type) {
        this.showToast("chooseType");
        return;
      }
      this.showCategory = !this.showCategory;
      this.showSpecials = false;
    },
    upload() {
      let imageData = {
        ContentType: this.imageFile.type,
        Type: this.type,
      };
      this.$store.dispatch("products/uploadImg", {
        imageFile: this.imageFile,
        imageData,
      });
      this.showToast("upload");
      this.$router.push("/");
    },
  },
  computed: {},
};
</script>
