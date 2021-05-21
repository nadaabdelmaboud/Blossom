<template>
  <div class="statistics">
    <div class="sales"></div>
        <lineChart 
        v-if="salesLoaded"
        :chartdata="chartdata"
        :options="options"/>
    <div>
        <div class="rating"></div>
        <div class="users"></div>
    </div>
  </div>
</template>

<script>
import lineChart from "../components/Statistics/lineChart"
import { mapState } from "vuex";
export default {
  name:"statistics",
  components: {
    lineChart
  },
  data: function () {
    return {
     monthNames : ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"
     ],
    chartdata: {
      labels:[],
      datasets: [
        {
          backgroundColor: 'rgba(192,160,91,0.8)',
          borderColor: [
                'rgb(192,160,91)'
            ],
            borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
    };
  },
  methods: {
      setSales(){
            let d =new Date();
            let month= d.getMonth();
            let year= d.getFullYear();
            this.chartdata.datasets[0].label = this.monthNames[month] + " Sales";
            this.chartdata.datasets[0].data = this.sales;
            let monthDays=new Date(year, month+1, 0).getDate();
            for(let i=0;i<monthDays;i++)
                this.chartdata.labels.push(i+1)
            this.$store.dispatch("statistics/getSales");
      }
  },
  computed: {
    ...mapState({
      salesLoaded: (state) => state.statistics.salesLoaded,
      sales: (state) => state.statistics.sales
    }),
  },
  created: function () {
      this.setSales();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/Colors";
@import "../scss/General";
@import "../scss/BlossomButton";
</style>
