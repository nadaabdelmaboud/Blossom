<template>
  <div class="transparentBackground">
    <div class="popupBody">
      <i class="fa fa-times hoverGolden close" @click="close"></i>
      <img
        src="../../assets/BlossomLogo_v7.png"
        alt="logo Image"
        class="logoImg"
      />
      <h3>Add new Bouquet Category? Intersting!</h3>
      <form v-on:submit.prevent="addCategory" class="form">
        <input
          class="blossomInput"
          v-model="categoryName"
          placeholder="Category Name"
        />
        <button class="blossomButton" type="submit">Add Category</button>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../scss/Colors";
@import "../../scss/GlobalPopup";
@import "../../scss/General";
@import "../../scss/BlossomCard";
@import "../../scss/BlossomButton";
@import "../../scss/BlossomInput";
.popupBody {
  width: 600px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.logoImg {
  display: flex;
  justify-self: center;
  width: 150px;
}
.blossomInput {
  border: $golden 3px solid;
  text-align: center;
  height: 48px;
}
.blossomInput:hover {
  border: $lightGolden 3px solid;
}
@media screen and (max-width: 900px) {
  .popupBody {
    margin: 50px auto;
    width: 97%;
  }
}
h3 {
  margin-top: -20px;
}
.form {
  display: flex;
  flex-grow: 1;
  align-content: center;
  flex-direction: column;
  padding: 0px 40px;
}
</style>

<script>
export default {
  name: "CreateBouquetCategory",
  data: function () {
    return {
      categoryName: "",
    };
  },
  methods: {
    addCategory() {
      let payload = {
        category: this.categoryName,
      };
      this.$store.dispatch("categories/addBouquetCategories", payload);
    },
    close() {
      this.$store.commit("popupsState/toggleCreateBouquetPopup");
    },
  },
};
</script>
