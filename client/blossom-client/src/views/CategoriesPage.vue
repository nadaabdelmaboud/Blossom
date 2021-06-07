<template>
    <div class="categoriesPage">
        <h1>Bouquets</h1>
        <ul>
            <li v-for="bouquetsCard in bouquetCategories" :key="bouquetsCard">
                <p @click="selectBouquets(bouquetsCard , '')">{{bouquetsCard}}</p>
                <img src="../assets/trash.svg" @click="deleteCategories(bouquetsCard,'bouquets')" alt="trash icon" v-if="status == 'success' && isAdmin == true">
            </li>
        </ul>
        <div class="line"></div>
        <h1>Plants</h1>
        <ul>
            <li v-for="plantCard in plantCategories" :key="plantCard">
                <p  @click="selectPlant(plantCard)">{{plantCard}}</p>
                <img src="../assets/trash.svg" @click="deleteCategories(plantCard,'plant')" alt="trash icon" v-if="status == 'success' && isAdmin == true">
            </li>
        </ul>
       <div class="line"></div>
        <h1>Bouquets for what reason?</h1>
        <ul>
           <li v-for="sentimentCard in bouquetSentiments" :key="sentimentCard">
               <p @click="selectBouquets('' , sentimentCard)">{{sentimentCard}}</p>
               <img src="../assets/trash.svg" @click="deleteCategories(sentimentCard,'sentiment')" alt="trash icon" v-if="status == 'success' && isAdmin == true">
           </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/_Colors";
h1{
    font-family: "Dancing Script";
    color: $darkGolden;
    margin: 25px;
    font-size: 50px;
    font-weight: 700;
}
ul{
    list-style: none;
     position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-template-rows: minmax(auto, auto);
    margin: auto;
    padding: 20px;
    margin-top: 30px;
    grid-gap: 5px;
    li{
        padding: 20px;
        box-shadow: 0 0 8px 3px rgba(10, 10, 10, 0.3);
        margin: 20px;
        width: 80%;
        font-size: 20px;
        display: grid;
        place-items: center;
        text-align: center;
        justify-self: center;
        display: flex;
        justify-content: space-between;
        p{
            margin: 0;
            cursor: pointer;
        }
    }
}
img{
    width: 20px;
    cursor: pointer;
}
.line{
 border-top: 2px solid $darkGolden;
 width: 80%;
 margin: 10px;
}
@media screen and (max-width: 960px) {
  ul {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 4px;
  }
}
@media screen and (max-width: 300px) {
  ul {
    padding: 0;
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
    name:"categoriesPage",
      computed: {
    ...mapState({
      bouquetCategories: (state) => state.categories.bouquetCategories,
      plantCategories: (state) => state.categories.plantCategories,
      bouquetSentiments: (state) => state.sentiments.bouquetSentiments,
      isAdmin: (state) => state.authorization.isAdmin,
      status: (state) => state.authorization.status,
    }),
  },
   mounted() {
       this.$store.dispatch("categories/getBouquetCategories");
       this.$store.dispatch("categories/getPlantCategories");
       this.$store.dispatch("sentiments/getSentiments");
   },
   methods:{
       deleteCategories(card , typeCard){
           if(typeCard == "bouquets"){
               this.$store.dispatch("categories/deleteBouquetsCategory",card);
           }else if(typeCard == "plant"){
               this.$store.dispatch("categories/deletePlantsCategory",card);
           }else{
               this.$store.dispatch("sentiments/deleteSentiments",card);
           }
       },
       selectBouquets(bouquet , sentiment){
           this.$store.commit("homePage/setHomeCards", []);
           this.$store.commit("homePage/setIsFlower", true);
           if(bouquet != "")
            this.$store.commit("homePage/setCateogry", bouquet);
            else
            this.$store.commit("homePage/setSentiment", sentiment);
            this.$router.push("/");
       },
       selectPlant(plant){
           this.$store.commit("homePage/setHomeCards", []);
           this.$store.commit("homePage/setType", plant);
           this.$store.commit("homePage/setIsFlower", false);
           this.$router.push("/");
       }
   }
}
</script>