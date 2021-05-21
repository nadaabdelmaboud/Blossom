<template>
  <div class="userCart">
    <cartCard />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import cartCard from "../components/Cart/cartCard";
export default {
  name: "userCart",
  components: {
    cartCard,
  },
};
</script>
