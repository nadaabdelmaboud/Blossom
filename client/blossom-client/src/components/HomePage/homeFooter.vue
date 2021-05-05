<template>
  <div class="homeFooter">
    <div class="footer-content">
      <div class="footer-section info">
        <div id="addressInfo">
          <span id="addressTitle">Shop Address</span>
          <span
            ><i class="fa fa-map-marker" aria-hidden="true"></i> 23 street,
            Madinat Naser</span
          >
        </div>
        <div id="contactInfoDiv">
          <span id="contactInfo">Contact Information</span>
          <span
            ><i class="fa fa-phone" aria-hidden="true"></i> +201066761053</span
          >
          <span><i class="fa fa-envelope"></i> blossom@gmail.com</span>
          <div id="timeInfo">
            <span><i class="fa fa-truck"></i> We ship inside Cairo & Giza</span>
            <span class="time" id="cairoTime"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2021 Copyright: Blossom.com | Designed by Team 2
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/Colors";
.homeFooter {
  background-color: black;
  color: $darkGolden;
  height: 20%;
  margin-top: 30px;
  text-align: center;
}
.footer-content {
  height: 10%;
  padding: 30px;
  padding-bottom: 10px;
  justify-content: center;
}
.footer-section {
  width: 100%;
}
.footer-bottom {
  padding: 10px;
  font-size: 10px;
}
.info {
  justify-content: center;
  font-size: 13px;
  #addressTitle,
  #contactInfo {
    font-weight: 400;
    font-size: 14px;
  }
  span {
    line-height: 30px;
    margin-left: 20px;
  }
}
#contactInfo {
  margin-top: 20px;
}
.time {
  color: $darkGolden;
  font-size: 10px;
}
@media screen and (max-width: 650px) {
  #contactInfoDiv,
  #addressInfo,
  #timeInfo {
    display: flex;
    flex-direction: column;
  }
  .info {
    span {
      margin-left: 0;
    }
  }
}
</style>

<script>
export default {
  name: "homeFooter",
  mounted() {
    const time = document.getElementById("cairoTime");
    let currentDate = new Date();
    time.innerHTML =
      "Cairo Time " + currentDate.getHours() + ":" + currentDate.getMinutes();
  },
};
</script>
