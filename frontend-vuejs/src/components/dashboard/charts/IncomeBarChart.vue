<template>
  <div class="col-lg-6">
    <div class="card card-fullheight">
      <div class="card-body">
        <div class="mb-5">
          <div>
            <h5 class="box-title mb-2">Revenus - Dépenses</h5>
          </div>
        </div>
        <div
          v-if="getMonthlyIncomeExpenses[0].Jan === null || getMonthlyIncomeExpenses[1].Jan === null"
          class="text-center text-muted font-weight-strong"
        >
          <p>Aucune transaction n'a été réalisée pour le moment</p>
        </div>
        <apexchart
          v-else
          type="bar"
          height="350"
          width="100%"
          :options="chartBarOptions"
          :series="chartBarSeries"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("kpis/getMonthlyIncomeExpenses");
  },
  computed: {
    chartBarSeries() {
      return [
        {
          name: "Dépenses",
          data: Object.values(this.getMonthlyIncomeExpenses[1])
        },
        {
          name: "Revenus",
          data: Object.values(this.getMonthlyIncomeExpenses[0])
        }
      ];
    },
    chartBarOptions() {
      return {
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%"
          }
        },
        colors: ["#F44336", "#00e396"],
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"]
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "top"
        },
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
        tooltip: {
          y: {
            formatter: function(val) {
              return "€ " + val + " euros";
            }
          }
        }
      };
    },
    getMonthlyIncomeExpenses() {
      return this.$store.getters["kpis/getIncomeExpensesData"];
    }
  }
};
</script>

