<template>
  <div class="col-lg-6">
    <div class="card card-fullheight">
      <div class="card-body">
        <div class="mb-5">
          <div>
            <h5 class="box-title mb-2">Compte - Solde</h5>
          </div>
        </div>
        <div
          v-if="getIncomesPerMonth[0].Jan === null"
          class="text-center text-muted font-weight-strong"
        >
          <p>Aucune transaction n'a été réalisée pour le moment</p>
        </div>
        <apexchart
          v-else
          type="line"
          height="350"
          width="100%"
          :options="chartOptions"
          :series="chartSeries"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("kpis/getIncomePerMonth");
  },
  computed: {
    chartSeries() {
      return [
        {
          name: "Solde",
          data: Object.values(this.getIncomesPerMonth[0])
        }
      ];
    },
    chartOptions() {
      return {
        xaxis: {
          categories: [
            "Jan",
            "Fév",
            "Mar",
            "Avr",
            "Mai",
            "Jui",
            "Jui",
            "Aoû",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        dataLabels: {
          enabled: true,
          offsetY: -3
        },
        colors: [theme_color("purple"), theme_color("pink")],
        stroke: {
          curve: "smooth",
          width: 3
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: [theme_color("pink")],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "€ " + val + " euros";
            }
          }
        }
      };
    },
    getIncomesPerMonth() {
      return this.$store.getters["kpis/getIncomesPerMonth"];
    }
  }
};
</script>
