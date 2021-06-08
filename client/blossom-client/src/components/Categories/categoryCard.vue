<template>
  <div class="categoryCard">
    <div class="trash">
      <img
        id="trashImg"
        src="../../assets/trash.svg"
        @click="deleteCategories()"
        alt="trash icon"
        v-if="status == 'success' && isAdmin == true"
      />
      <div class="typeName">{{ name }}</div>
    </div>
    <div class="card" @click="selectCategory()">
      <div class="typeImage">
        <img :src="getImage(image)" alt="flower" v-if="image != ''" />
        <img
          src="../../assets/defaultFlower.svg"
          id="defaultImage"
          alt="flower"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.categoryCard {
  width: 100%;
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
.card {
  cursor: pointer;
}
.typeImage {
  width: 100%;
  height: 380px;
  img {
    width: 100%;
    height: 99%;
    background-size: cover;
    object-fit: cover;
  }
}
#defaultImage {
  height: auto;
  padding-top: 20px;
}
.trash {
  display: flex;
  flex-direction: column;
  width: 100%;
  #trashImg {
    align-self: flex-end;
    padding: 7px;
    width: 25px;
    cursor: pointer;
  }
}
.typeName {
  width: 100%;
  text-align: center;
  align-self: center;
  font-size: 22px;
  font-weight: 700;
  padding-top: 5px;
  //padding-bottom: 10px;
  color: $golden;
}
</style>

<script>
import { mapState } from "vuex";
import { default as getImage } from "../../mixins/getImage";
export default {
  name: "categoryCard",
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    cardType: {
      type: String,
    },
  },
  mixins: [getImage],
  computed: {
    ...mapState({
      bouquetCategories: (state) => state.categories.bouquetCategories,
      plantCategories: (state) => state.categories.plantCategories,
      bouquetSentiments: (state) => state.sentiments.bouquetSentiments,
      isAdmin: (state) => state.authorization.isAdmin,
      status: (state) => state.authorization.status,
    }),
  },
  methods: {
    deleteCategories() {
      if (this.cardType == "bouquets") {
        this.$store.dispatch("categories/deleteBouquetsCategory", this.name);
      } else if (this.cardType == "plant") {
        this.$store.dispatch("categories/deletePlantsCategory", this.name);
      } else {
        this.$store.dispatch("sentiments/deleteSentiments", this.name);
      }
    },
    selectCategory() {
      if (this.cardType == "bouquets") {
        this.$store.commit("homePage/setHomeCards", []);
        this.$store.commit("homePage/setIsFlower", true);
        this.$store.commit("homePage/setCateogry", this.name);
      } else if (this.cardType == "sentiment") {
        this.$store.commit("homePage/setHomeCards", []);
        this.$store.commit("homePage/setIsFlower", true);
        this.$store.commit("homePage/setSentiment", this.name);
      } else {
        this.$store.commit("homePage/setHomeCards", []);
        this.$store.commit("homePage/setType", this.name);
        this.$store.commit("homePage/setIsFlower", false);
      }
      this.$router.push("/");
    },
  },
};
</script>
