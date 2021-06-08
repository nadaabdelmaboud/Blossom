<template>
  <div class="categoriesPage">
    <loading v-if="isLoading" />
    <div v-if="isLoading == false">
      <h1>Bouquets</h1>
      <div class="container">
        <categoryCard
          class="box"
          v-for="card in bouquetCategories"
          :key="card.name"
          :image="card.image"
          :name="card.name"
          :cardType="'bouquets'"
        />
      </div>
      <div class="line"></div>
      <h1>Plants</h1>
      <div class="container">
        <categoryCard
          class="box"
          v-for="card in plantCategories"
          :key="card.name"
          :image="card.image"
          :name="card.name"
          :cardType="'plant'"
        />
      </div>
      <div class="line"></div>
      <h1>Bouquets for what reason?</h1>
      <div class="container">
        <categoryCard
          class="box"
          v-for="card in bouquetSentiments"
          :key="card.name"
          :image="card.image"
          :name="card.name"
          :cardType="'sentiment'"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_Colors";
h1 {
  font-family: "Dancing Script";
  color: $darkGolden;
  margin: 25px;
  font-size: 50px;
  font-weight: 700;
}
.line {
  border-top: 2px solid $darkGolden;
  width: 80%;
  margin: 10px;
}
.container {
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  grid-template-rows: minmax(auto, auto);
  margin: auto;
  padding: 20px;
  margin-top: 30px;
  grid-gap: 5px;
}
.container .box {
  width: 95%;
  display: grid;
  place-items: start;
  text-align: center;
  justify-self: center;
}
@media screen and (max-width: 1100px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 4px;
  }
}
@media screen and (max-width: 990px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 4px;
  }
}
@media screen and (max-width: 300px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    padding: 0;
  }
}
</style>

<script>
import { mapState } from "vuex";
import categoryCard from "../components/Categories/categoryCard";
import loading from "../components/loading";
export default {
  name: "categoriesPage",
  components: {
    categoryCard,
    loading,
  },
  computed: {
    ...mapState({
      bouquetCategories: (state) => state.categories.bouquetCategories,
      plantCategories: (state) => state.categories.plantCategories,
      bouquetSentiments: (state) => state.sentiments.bouquetSentiments,
      isLoading: (state) => state.categories.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch("categories/getBouquetCategories");
    this.$store.dispatch("categories/getPlantCategories");
    this.$store.dispatch("sentiments/getSentiments");
  },
};
</script>
