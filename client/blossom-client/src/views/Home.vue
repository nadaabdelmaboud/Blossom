<template>
  <div class="home">
    <navBar />
    <authPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <cardDescription v-if="showCardDescription" />
    <createCategoryPopup v-if="showCategoryPopup" />
    <createBouquetPopup v-if="showBouquetPopup" />
    <createSpecialPopup v-if="showSpecialPopup" />
    <checkoutForm v-if="checkoutFormPopup" />
    <addTipPopup v-if="addTipPopup" />
    <loading v-if="loadingPopup" />
    <div class="toast" id="upload">
      <div class="addedToCart">A new product is uploaded!</div>
    </div>
    <router-view class="content" />
    <homeFooter />
  </div>
</template>
<style scoped lang="scss">
@import "../scss/Colors";
@import "../scss/BlossomToast";
.content {
  min-height: calc(100vh - 400px);
}
#upload {
  -webkit-box-shadow: 0px 0px 3px 3px $golden;
  -moz-box-shadow: 0px 0px 3px 3px $golden;
  box-shadow: 0px 0px 3px 3px $golden;
}
</style>

<script>
import authPopup from "./AuthPopup";
import navBar from "../components/HomePage/navBar";
import editCard from "../components/HomePage/editCard";
import cardDescription from "../components/HomePage/cardDescription";
import homeFooter from "../components/HomePage/homeFooter";
import createCategoryPopup from "../components/CreatePopups/newCategoryPopup";
import createBouquetPopup from "../components/CreatePopups/newBouquetPopup.vue";
import createSpecialPopup from "../components/CreatePopups/newSpecialPopup";
import addTipPopup from "../components/CreatePopups/addTip.vue";
import checkoutForm from "../components/Cart/checkoutForm";
import loading from "../components/loadingScreen.vue";
import { mapState } from "vuex";
export default {
  name: "UserHome",
  components: {
    authPopup,
    editCard,
    cardDescription,
    homeFooter,
    createCategoryPopup,
    createBouquetPopup,
    createSpecialPopup,
    navBar,
    checkoutForm,
    addTipPopup,
    loading,
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
      showCategoryPopup: (state) => state.popupsState.createCategoryPopup,
      showBouquetPopup: (state) => state.popupsState.createBouquetPopup,
      showSpecialPopup: (state) => state.popupsState.createSpecialPopup,
      showCardDescription: (state) => state.popupsState.descriptionPopup,
      checkoutFormPopup: (state) => state.popupsState.checkoutFormPopup,
      addTipPopup: (state) => state.popupsState.addTipPopup,
      loadingPopup: (state) => state.popupsState.loadingPopup,
      isAdmin: (state) => state.authorization.isAdmin,
    }),
  },
  created() {
    window.scrollTo(0,0);

  },
  updated(){
      window.scrollTo(0,0);
  console.log("ff")
  }
};
</script>
