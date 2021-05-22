<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>
canvas {
  box-shadow: 0px 0px 10px 3px #888888;
}
</style>
