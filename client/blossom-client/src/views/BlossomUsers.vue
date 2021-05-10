<template>
  <div class="blossomUsers">
    <userCard />
  </div>
</template>

<style lang="scss" scoped>
.blossomUsers {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

<script>
import userCard from "../components/BlossomUsers/userCard";
export default {
  name: "blossomUsers",
  components: {
    userCard,
  },
};
</script>
