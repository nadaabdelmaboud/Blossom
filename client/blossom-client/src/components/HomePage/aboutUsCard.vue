<template>
  <div class="aboutUsCard">
    <img :src="image" alt="Blossom Services" />
    <h6>{{ name }}</h6>
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.aboutUsCard {
  width: 200px;
  justify-content: center;
  text-align: center;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
}
img {
  padding: 5px;
}
h6 {
  font-size: 23px;
  font-weight: 700;
  color: $golden;
  margin: 5px;
}
p {
  color: black;
  font-size: 17px;
  padding-bottom: 25px;
}
</style>

<script>
export default {
  name: "aboutUsCard",
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
