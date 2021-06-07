<template>
  <div class="catogries">
    <h6>Our Popular Products</h6>
    <div class="categoriesCards">
      <div class="container">
        <typesCard
          class="box"
          v-for="card in popularCategories"
          :key="card.id"
          :image="card.image"
          :name="card.name"
        />
      </div>
    </div>
    <div class="showMore">
      <button class="blossomButton" @click="moreCategories()">
        Show Our Categories
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
@import "../../scss/BlossomButton";
.catogries {
  width: 100%;
  text-align: center;
  background-color: $goldenBackground;
  margin-top: 20px;
}
h6 {
  font-family: "Dancing Script";
  font-size: 40px;
  font-weight: 700;
  color: $golden;
  padding-top: 10px;
  margin: 5px;
}
.blossomButton {
  width: 260px;
  margin-bottom: 40px;
}
.container {
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: minmax(auto, auto);
  margin: auto;
  padding: 20px;
  margin-top: 30px;
  grid-gap: 5px;
}
.container .box {
  width: 85%;
  display: grid;
  place-items: center;
  text-align: center;
  justify-self: center;
}
@media screen and (max-width: 960px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 4px;
  }
}
@media screen and (max-width: 300px) {
  .container {
    padding: 0;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import typesCard from "./typesCard";
export default {
  name: "categories",
  components: {
    typesCard,
  },
  methods: {
    moreCategories() {
      this.$router.push("CategoriesPage");
    },
  },
  computed: {
    ...mapGetters({
      popularCategories: "categories/popularCategories",
    }),
  },
};
</script>
