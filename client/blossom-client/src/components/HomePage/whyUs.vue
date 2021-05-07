<template>
  <div class="whyUs">
    <h6>Why Choose Us?</h6>
    <p>
      We deliver fresh flowers to your door, directly from our greenhouses. They
      reach any point of Egypt in 24h.
    </p>
    <div class="container">
      <aboutUsCard
        class="box"
        v-for="card in whyUsArr"
        :key="card.id"
        :image="card.image"
        :name="card.name"
        :description="card.description"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.whyUs {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
h6 {
  font-family: "Dancing Script";
  font-weight: 700;
  font-size: 30px;
  color: $golden;
  margin-top: 20px;
  margin-bottom: 20px;
}
p {
  color: black;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 20px;
  margin-top: 15px;
}
.container {
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(190px, 1fr));
  grid-template-rows: minmax(auto, auto);
  margin: auto;
  padding: 20px;
  margin-top: 25px;
  grid-gap: 13px;
  justify-content: center;
}
.container .box {
  width: 93%;
  display: grid;
  place-items: center;
  text-align: center;
  justify-self: center;
}
@media screen and (max-width: 960px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 8px;
  }
}
@media screen and (max-width: 300px) {
  .container {
    padding: 3px;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import aboutUsCard from "./aboutUsCard";
export default {
  name: "whyUs",
  components: {
    aboutUsCard,
  },
  computed: {
    ...mapGetters({
      whyUsArr: "whyChooseUs/whyUsArr",
    }),
  },
};
</script>
