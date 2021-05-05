<template>
  <div class="home">
    <!-- <authPopup v-if="showAuth" />
    <editCard v-if="showEditPopup" />
    <homeCard />
    <reviewCard /> -->
    <!-- <homeFooter /> -->
    <createCategoryPopup v-if="showCategoryPopup"/>
    <createSpecialPopup v-if="showSpecialPopup"/>
    <router-view />
  </div>
</template>

<script>

import createCategoryPopup from "../components/CreatePopups/newCategoryPopup"
import createSpecialPopup from "../components/CreatePopups/newSpecialPopup"
import { mapState } from "vuex";
export default {
  name: "UserHome",
  components: {
    authPopup,
    homeCard,
    reviewCard,
    editCard,
    homeFooter,
    createCategoryPopup,
    createSpecialPopup

  },
  computed: {
    ...mapState({
      showAuth: (state) => state.popupsState.authPopup,
      showEditPopup: (state) => state.popupsState.editCardPopup,
      showCategoryPopup: (state) => state.popupsState.createCategoryPopup,
      showSpecialPopup: (state) => state.popupsState.createSpecialPopup,

    }),
  },
};
</script>
