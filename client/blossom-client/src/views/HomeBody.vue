<template>
  <div class="homeBody">
    <cardsPagination />
    <reviewCard />
    <categories />
    <whyUs />
  </div>
</template>

<style lang="scss" scoped></style>
<script>
import cardsPagination from "../components/HomePage/cardsPagination";
import categories from "../components/HomePage/categories";
import reviewCard from "../components/HomePage/reviewCard";
import whyUs from "../components/HomePage/whyUs";
import { mapState } from "vuex";
export default {
  name: "homeBody",
  components: {
    cardsPagination,
    reviewCard,
    categories,
    whyUs,
  },
  computed: {
    ...mapState({
      showCardDescription: (state) => state.popupsState.descriptionPopup,
    }),
  },
};
</script>
