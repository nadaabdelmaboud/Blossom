<template>
  <div class="homeBody">
    <cardsPagination />
    <whyUs />
    <categories />
    <topReviews />
  </div>
</template>

<style lang="scss" scoped></style>
<script>
import cardsPagination from "../components/HomePage/cardsPagination";
import categories from "../components/HomePage/categories";
import whyUs from "../components/HomePage/whyUs";
import topReviews from "../components/HomePage/topReviews";
import { mapState } from "vuex";
export default {
  name: "homeBody",
  components: {
    cardsPagination,
    categories,
    whyUs,
    topReviews,
  },
  computed: {
    ...mapState({
      showCardDescription: (state) => state.popupsState.descriptionPopup,
    }),
  },
};
</script>
