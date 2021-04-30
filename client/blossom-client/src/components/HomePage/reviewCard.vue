<template>
  <div class="reviewCard">
    <div class="container">
      <div class="userImageBox">
        <img src="../../assets/anime.jpg" alt="userImage" />
      </div>
      <div class="userName">Nihal Mansour</div>
      <div class="userReview">
        this website is really awesome contains lots of wonderful flowers and
        the service here is great
      </div>
      <div class="ratingStars">
        <ul>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_Colors";
.reviewCard {
  margin-top: 30px;
  width: 18%;
}
.container {
  padding: 15px;
  width: 100%;
  height: 30%;
  box-shadow: 0 3px 3px 3px rgba(10, 10, 10, 0.06);
  justify-content: center;
  text-align: center;
}
img {
  border-radius: 50%;
  width: 60%;
  margin-top: 5px;
  background-size: cover;
  object-fit: cover;
}
.userName {
  margin-top: 7px;
  margin-bottom: 7px;
  color: $darkGolden;
  font-size: 18px;
  font-weight: 700;
}
.userReview {
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 13px;
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
    font-size: 20px;
  }
}
</style>

<script>
export default {
  name: "reviewCard",
};
</script>
