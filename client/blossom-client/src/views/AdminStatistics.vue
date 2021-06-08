<template>
  <div class="statistics">
    <loading v-if="!ratingLoaded || !salesLoaded" />
    <div class="sales" v-if="ratingLoaded && salesLoaded">
      <lineChart
        v-if="salesLoaded"
        :chartdata="chartdataSales"
        :options="options"
      />
    </div>
    <div class="bar" v-if="ratingLoaded && salesLoaded">
      <div class="rating">
        <barChart
          v-if="ratingLoaded"
          :chartdata="chartdataRate"
          :options="options"
        />
      </div>
      <br />
      <div class="users">
        <h3 class="slogan">Top Users</h3>
        <p v-for="(u, i) in topUsers" :key="i" class="slogan names">
          {{ u.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import lineChart from "../components/Statistics/lineChart";
import barChart from "../components/Statistics/barChart";
import loading from "../components/loading.vue";
import { mapState } from "vuex";
export default {
  name: "statistics",
  components: {
    lineChart,
    barChart,
    loading,
  },
  data: function () {
    return {
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      chartdataSales: {
        labels: [],
        datasets: [
          {
            backgroundColor: "rgba(192,160,91,0.6)",
            pointBackgroundColor: "#846b36",
            pointBorderColor: "#846b36",
            borderColor: ["#846b36"],
            borderWidth: 2,
          },
        ],
      },
      chartdataRate: {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Blossom Ratings",
            backgroundColor: "rgba(192,160,91,0.6)",

            borderColor: [
              "#846b36",
              "#846b36",
              "#846b36",
              "#846b36",
              "#846b36",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    setSales() {
      let d = new Date();
      let month = d.getMonth();
      let year = d.getFullYear();
      this.chartdataSales.datasets[0].label = this.monthNames[month] + " Sales";
      this.chartdataSales.datasets[0].data = [];
      let monthDays = new Date(year, month +1 , 0).getDate();
      for (let i = 0; i < monthDays; i++) {
        this.chartdataSales.labels.push(i + 1);
        this.chartdataSales.datasets[0].data.push(this.sales[i + 1]);
      }
      console.log(this.chartdataSales.datasets[0].data);
    },
    async setRate() {
      this.chartdataRate.datasets[0].data = this.rating;
    },
  },
  computed: {
    ...mapState({
      salesLoaded: (state) => state.statistics.salesLoaded,
      sales: (state) => state.statistics.sales,
      rating: (state) => state.statistics.rating,
      ratingLoaded: (state) => state.statistics.ratingLoaded,
      topUsers: (state) => state.statistics.topUsers,
    }),
  },
  async created() {
    await this.$store.dispatch("statistics/getSales");
    await this.$store.dispatch("statistics/getTopUsers");
    await this.$store.dispatch("statistics/getRating");

    this.setSales();
    this.setRate();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
@import "../scss/BlossomButton";
.statistics {
  display: flex;
  padding: 10px;
  justify-content: space-around;
}
.sales {
  width: 60%;
  margin-right: 10px;
}
.bar {
  width: 30%;
}
.names {
  color: black;
}
@media screen and (max-width: 855px) {
  .statistics {
    flex-direction: column;
  }
  .sales {
    width: 100%;
    margin-bottom: 30px;
  }
  .bar {
    width: 100%;
  }
}
</style>
