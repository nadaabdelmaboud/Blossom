<template>
  <div class="cardsPagination">
    <div class="container">
      <homeCard
        class="box"
        v-for="card in homeCards"
        :key="card._id"
        :image="card.images"
        :name="card.name"
        :description="card.info"
        :price="card.price"
        :available="card.count.available"
      />
    </div>
    <div class="pagination">
      <div><i class="fa fa-arrow-left" @click="previousPage()"></i></div>
      <div class="counter">{{ counter }}</div>
      <div><i class="fa fa-arrow-right" @click="nextPage()"></i></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
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
  width: 95%;
  display: grid;
  place-items: center;
  text-align: center;
}
.pagination {
  display: flex;
  flex-direction: row;
  color: $darkGolden;
  font-size: 20px;
  width: 100%;
  text-align: center;
  justify-content: center;
  i {
    cursor: pointer;
  }
}
.counter {
  padding-left: 15px;
  padding-right: 15px;
}
@media screen and (max-width: 960px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 4px;
  }
}
@media screen and (max-width: 300px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 0;
  }
}
</style>

<script>
import { mapState } from "vuex";
import homeCard from "./homeCard";
export default {
  name: "cardsPagination",
  components: {
    homeCard,
  },
  mounted() {
    if (this.isFlower == true) {
      this.$store.dispatch("homePage/callFlowerCards", 1);
    } else {
      this.$store.dispatch("homePage/callPlantCards", 1);
    }
    console.log(this.homeCards);
  },
  computed: {
    ...mapState({
      homeCards: (state) => state.homePage.homeCards,
      counter: (state) => state.homePage.counter,
      maxPages: (state) => state.homePage.maxPages,
      isFlower: (state) => state.homePage.isFlower,
    }),
  },
  methods: {
    nextPage() {
      if (this.counter + 1 <= this.maxPages) {
        this.$store.commit("homePage/setCounter", this.counter + 1);
        if (this.isFlower == true) {
          this.$store.dispatch("homePage/callFlowerCards", this.counter);
        } else {
          this.$store.dispatch("homePage/callPlantCards", this.counter);
        }
      }
    },
    previousPage() {
      if (this.counter - 1 != 0) {
        this.$store.commit("homePage/setCounter", this.counter - 1);
        if (this.isFlower == true) {
          this.$store.dispatch("homePage/callFlowerCards", this.counter);
        } else {
          this.$store.dispatch("homePage/callPlantCards", this.counter);
        }
      }
    },
  },
};
</script>
