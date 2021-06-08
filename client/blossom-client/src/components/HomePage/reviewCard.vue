<template>
  <div class="reviewCard">
    <div class="container">
      <div class="userImageBox">
        <img src="../../assets/user.svg" alt="userImage" />
      </div>
      <div class="userName">{{ userName }}</div>
      <div class="userReview">
        {{ userReview }}
      </div>
      <div class="ratingStars">
        <ul>
          <li v-for="index in userRating" :key="index">
            <i class="fa fa-star"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.reviewCard {
  width: 100%;
  -webkit-box-shadow: 0px 0px 10px 3px $lightGolden;
  -moz-box-shadow: 0px 0px 10px 3px $lightGolden;
  box-shadow: 0px 0px 10px 3px $lightGolden;
}
.container {
  padding: 15px;
  width: 96%;
  height: 100%;
  margin-top: 20px;
  justify-content: center;
  text-align: center;
}
.userImageBox {
  img {
    border-radius: 50%;
    width: 95px;
    margin-top: 5px;
    background-size: cover;
    object-fit: cover;
    border: 2px solid $darkGolden;
  }
}
.userName {
  word-break: break-word;
  margin-top: 7px;
  margin-bottom: 7px;
  color: $darkGolden;
  text-decoration: underline;
  font-size: 25px;
  font-weight: 700;
}
.userReview {
  word-break: break-word;
  margin-top: 15px;
  margin-bottom: 7px;
  font-size: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: center;
  li {
    margin-left: 5px;
    list-style: none;
    color: $lightGolden;
    font-size: 30px;
  }
}
</style>

<script>
export default {
  name: "reviewCard",
  props: {
    userName: {
      type: String,
    },
    userReview: {
      type: String,
    },
    userRating: {
      type: Number,
    },
  },
};
</script>
