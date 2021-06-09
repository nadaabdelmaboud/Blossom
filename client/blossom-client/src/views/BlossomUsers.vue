<template>
  <div class="blossomUsers">
    <loading v-if="isLoading" />
    <div class="conatiner" v-if="isLoading == false">
      <userCard
        v-for="card in users"
        :key="card._id"
        :id="card._id"
        :name="card.name"
        :email="card.email"
        :phone="card.phone"
        :country="card.address.country"
        :city="card.address.city"
        :street="card.address.street"
      />
      <div v-if="users.length == 0">
        <div class="emptyPage">
          <img src="../assets/noUser.svg" alt="noItemsFound" />
          <p><span> OOOPS!</span> No user found in this page</p>
        </div>
      </div>
      <div class="pagination">
        <div><i class="fa fa-arrow-left" @click="previousPage()"></i></div>
        <div class="counter">{{ counter }}</div>
        <div><i class="fa fa-arrow-right" @click="nextPage()"></i></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_Colors";
.blossomUsers {
  width: 100%;
}
.conatiner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pagination {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  color: $darkGolden;
  font-size: 20px;
  width: 100%;
  text-align: center;
  justify-content: center;
  i {
    cursor: pointer;
  }
}
.counter {
  padding-left: 15px;
  padding-right: 15px;
}
.emptyPage {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  img {
    width: 60px;
    color: $darkGolden;
  }
  p {
    color: $darkGolden;
    font-size: 25px;
  }
  span {
    font-weight: 700;
    padding-left: 7px;
  }
}
@media screen and (max-width: 700px) {
  .blossomUsers {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

<script>
import { mapState } from "vuex";
import userCard from "../components/BlossomUsers/userCard";
import loading from "../components/loading";
export default {
  name: "blossomUsers",
  components: {
    userCard,
    loading,
  },
  computed: {
    ...mapState({
      users: (state) => state.blossomUsers.users,
      counter: (state) => state.blossomUsers.counter,
      maxPages: (state) => state.blossomUsers.maxPages,
      isLoading: (state) => state.blossomUsers.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch("blossomUsers/callBlossomUsers", 1);
    this.$store.commit("blossomUsers/setCounter", 1);
  },
  methods: {
    nextPage() {
      if (this.counter + 1 <= this.maxPages) {
        this.$store.commit("blossomUsers/setCounter", this.counter + 1);
        this.$store.dispatch("blossomUsers/callBlossomUsers", this.counter);
        window.scrollTo(0,0);
      }
    },
    previousPage() {
      if (this.counter - 1 != 0) {
        this.$store.commit("blossomUsers/setCounter", this.counter - 1);
        this.$store.dispatch("blossomUsers/callBlossomUsers", this.counter);
        window.scrollTo(0,0);
      }
    },
  },
};
</script>
