<template>
  <div class="cardDescription">
    <div class="transparentBackground">
      <div class="popupBody">
        <div class="hoverGolden" id="closePopup">
          <i class="fa fa-times" @click="toggleDescriptionState()"></i>
        </div>
        <div class="logo">
          <p>Blossom</p>
          <p>{{ cardName }}</p>
        </div>
        <div class="content">
          <h2>Description</h2>
          <p>{{ cardDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/GlobalPopup";
@import "../../scss/Colors";
@import "../../scss/General";
.cardDescription {
  width: 100%;
}
#closePopup {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
}
.logo {
  text-align: center;
  p {
    color: $golden;
    font-size: 30px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.content {
  padding: 20px;
  padding-top: 0;
  h2 {
    color: $golden;
    font-size: 25px;
    font-weight: 700;
  }
  p {
    font-size: 21px;
    word-wrap: break-word;
  }
}
@media screen and (max-width: 600px) {
  .popupBody {
    margin: 50px auto;
    width: 80%;
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "cardDescription",
  computed: {
    ...mapState({
      cardId: (state) => state.homePage.cardId,
      isFlower: (state) => state.homePage.isFlower,
      cardName: (state) => state.homePage.cardName,
      cardDescription: (state) => state.homePage.cardDescription,
      descriptionPopup: (state) => state.popupsState.descriptionPopup,
    }),
  },
  methods: {
    toggleDescriptionState() {
      this.$store.commit("popupsState/toggleDescriptionPopup");
      if (this.descriptionPopup == false) {
        this.$store.commit("homePage/setCardName", "");
        this.$store.commit("homePage/setCardDescription", "");
      }
    },
  },
  mounted() {
    if (this.isFlower == true) {
      this.$store.dispatch("homePage/getFlowerById", this.cardId);
    } else {
      this.$store.dispatch("homePage/getPlantById", this.cardId);
    }
  },
};
</script>
