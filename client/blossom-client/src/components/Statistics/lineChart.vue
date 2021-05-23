<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["chartdata", "options"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style>
canvas {
  box-shadow: 0px 0px 10px 3px black;
}
</style>
