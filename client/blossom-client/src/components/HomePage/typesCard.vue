<template>
  <div class="typesCard">
    <div class="typeName">Tuilp</div>
    <div class="typeImage">
      <img src="../../assets/Roses.jpg" alt="flower" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.typesCard {
  width: 200px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: solid 1px $golden;
  background-color: white;
  &:hover {
    box-shadow: 0 3px 3px 3px rgba(207, 170, 4, 0.11);
    transform: scale(1.01);
  }
}
.typeImage {
  width: 100%;
  height: 88%;
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
  }
}

.typeName {
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  padding-top: 5px;
  color: $golden;
}
</style>

<script>
export default {
  name: "typesCard",
};
</script>
