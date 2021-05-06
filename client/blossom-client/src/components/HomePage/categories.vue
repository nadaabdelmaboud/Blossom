<template>
  <div class="catogries">
    <h6>See All Our Categories</h6>
    <div class="categoriesCards">
      <typesCard />
    </div>
    <div class="showMore">
      <button class="blossomButton">Show More</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
@import "../../scss/BlossomButton";
.catogries {
  width: 100%;
  height: 60%;
  text-align: center;
  background-color: $goldenBackground;
}
h6 {
  font-family: "Dancing Script";
  font-size: 30px;
  font-weight: 700;
  color: $golden;
  padding-top: 10px;
  margin: 5px;
}
.blossomButton {
  width: 150px;
  margin-bottom: 40px;
}
</style>

<script>
import typesCard from "./typesCard";
export default {
  name: "categories",
  components: {
    typesCard,
  },
};
</script>
