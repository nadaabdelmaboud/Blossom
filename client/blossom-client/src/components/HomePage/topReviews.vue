<template>
  <div class="topReviews">
    <h6>What people say about us?</h6>
    <div class="container">
      <reviewCard
        class="box"
        v-for="card in reviewCards"
        :key="card._id"
        :id="card._id"
        :userName="card.name"
        :userReview="card.Cart[0].feedback.comment"
        :userRating="card.Cart[0].feedback.rate"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.topReviews {
  width: 100%;
  margin-top: 25px;
  text-align: center;
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
  grid-gap: 13px;
}
.container .box {
  width: 93%;
  display: grid;
  place-items: center;
  text-align: center;
  justify-self: center;
}
h6 {
  font-family: "Dancing Script";
  font-weight: 700;
  font-size: 40px;
  color: $golden;
  margin-top: 20px;
  margin-bottom: 20px;
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
import reviewCard from "./reviewCard";
import { mapState } from "vuex";
export default {
  name: "topReviews",
  components: {
    reviewCard,
  },
  mounted() {
    this.$store.dispatch("homePage/getTopReviews");
  },
  computed: {
    ...mapState({
      reviewCards: (state) => state.homePage.reviewCards,
    }),
  },
};
</script>
