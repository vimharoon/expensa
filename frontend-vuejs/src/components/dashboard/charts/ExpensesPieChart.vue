<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-4">
            <h5 class="box-title">Dépenses totales</h5>
          </div>
          <div
            v-if="!getExpensesByCategory.length"
            class="text-center text-muted font-weight-strong"
          >
            <p>Aucune transaction n'a été réalisée pour le moment</p>
          </div>
          <apexchart
            v-else
            type="pie"
            height="350"
            width="100%"
            :options="chartPieOptions"
            :series="chartPieSeries"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("kpis/getExpensesByCategory");
  },
  computed: {
    chartPieSeries() {
      const expensesAmount = this.getExpensesByCategory.map(el => {
        return el.expense;
      });
      return expensesAmount;
    },
    chartPieOptions() {
      const expensesLabel = this.getExpensesByCategory.map(el => {
        return el.transaction_category_name + " - " + el.expense + " €";
      });
      return {
        labels: expensesLabel,
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    },
    getExpensesByCategory() {
      return this.$store.getters["kpis/getExpensesByCategory"];
    }
  }
};
</script>

