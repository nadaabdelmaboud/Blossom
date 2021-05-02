<template>
  <div class="upload blossomCard">
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

    <button class="blossomButton">Add Product</button>
  </div>
</template>

<style scoped lang="scss">
@import "../scss/Colors";
@import "../scss/General";
@import "../scss/BlossomButton";
@import "../scss/BlossomInput";
@import "../scss/BlossomCard";

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
  // margin: ;
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
</style>

<script>
export default {
  name: "UploadProduct",
  mounted() {},
  data: function () {
    return {
      title: "",
      description: "",
      searchCategory: "",
      amount: "",
      price: "",
      showCategory: false,
      showSpecials: false,
      imageFile: null,
      width: "",
      height: "",
      validate: false,
    };
  },
  methods: {
    onFileSelected: function (event) {
      this.imageFile = event.target.files[0];
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
        setTimeout(() => {
          this.width = image.width;
          this.height = image.height;
        }, 500);
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
      this.$store.commit("popUpsState/toggleCreateSpeciality");
    },
    createCategory() {
      this.$store.commit("popUpsState/toggleCreateCategory");
    },
    chooseCategory() {},
    chooseSpecial() {},
    showSection(i) {
      let index = this.showSections.indexOf(i);
      if (index == -1) this.showSections.push(i);
      else this.showSections.splice(index, 1);
    },
    createPin() {
      if (this.chosenBoardName == "Select") {
        this.showBoard = true;
      } else {
        if (this.title == "" || !this.imageFile) this.validate = true;
        else {
          let pin = {
            title: this.title,
            board: this.chosenBoardId,
            imageWidth: this.width,
            imageHeight: this.height,
            imageId: this.imageFile,
            topicName: this.label,
          };
          if (this.chosenSectionId != "") {
            pin.section = this.chosenSectionId;
          }
          if (this.note != "") pin.note = this.note;
          this.$store.dispatch("pins/createPin", { pin, label: this.label });
        }
      }
    },
  },
  computed: {},
};
</script>
