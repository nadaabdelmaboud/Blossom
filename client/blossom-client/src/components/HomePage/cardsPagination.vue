<template>
  <div class="cardsPagination">
    <div v-if="homeCards.length != 0">
      <div class="container" v-if="isFlower == true">
        <homeCard
          class="box"
          v-for="card in homeCards"
          :key="card._id"
          :id="card._id"
          :image="card.images"
          :name="card.name"
          :price="card.price"
          :flowerCateogry="card.bouquetCategory"
          :isFlower="true"
          :available="card.count.available"
        />
      </div>
      <div class="container" v-else>
        <homeCard
          class="box"
          v-for="card in homeCards"
          :key="card._id"
          :id="card._id"
          :image="card.images"
          :name="card.name"
          :price="card.price"
          :plantType="card.type"
          :available="card.count.available"
          :isFlower="false"
        />
      </div>
    </div>
    <div v-if="homeCards.length == 0">
      <div class="emptyPage">
        <img src="../../assets/flowers.svg" alt="noItemsFound" />
        <p><span> OOOPS!</span> No items found in this page</p>
      </div>
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
  place-items: start;
  text-align: center;
  justify-self: center;
}
.pagination {
  margin-top: 15px;
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
.emptyPage {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  img {
    width: 60px;
    color: $darkGolden;
  }
  p {
    color: $darkGolden;
    font-size: 25px;
  }
  span {
    font-weight: 700;
  }
}
@media screen and (max-width: 960px) {
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
    this.$store.commit("homePage/setCounter", 1);
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
