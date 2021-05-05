<template>
  <div class="catogries">
    <h6>See All Our Categories</h6>
    <div class="categoriesCards">
      <typesCard />
    </div>
    <div class="showMore">
      <button>Show More</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.catogries {
  width: 100%;
  height: 60%;
  text-align: center;
  background-color: $goldenBackground;
}
h6 {
  font-family: "Dancing Script";
  font-size: 20px;
  color: $golden;
  padding-top: 10px;
  margin: 5px;
}
button {
  background-color: transparent;
  border: solid 2px $golden;
  color: $golden;
  font-weight: 700;
  padding: 10px 35px;
  cursor: pointer;
  box-shadow: 1px 1px 1px $shadowColor;
  transition: 0.25s ease-in-out;
  margin: 20px;
}
button:focus {
  outline: none;
}
button:active {
  transform: scale(0.98);
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
