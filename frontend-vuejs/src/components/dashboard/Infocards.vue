<template>
  <div class="row">
    <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
      <div class="card">
        <div class="card-body">
          <h6 class="mb-3 font-15 text-muted font-weight-normal">REVENUES</h6>
          <div
            v-if="!getTransactionsInfosList[0].income"
            class="h2 mb-0 font-weight-normal text-success"
          >0 €</div>
          <div
            v-else
            class="h2 mb-0 font-weight-normal text-success"
          >{{ getTransactionsInfosList[0].income | toCurrency }}</div>

          <i class="la la-arrow-up top-widget-icon text-success"></i>
        </div>
      </div>
    </div>
    <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
      <div class="card">
        <div class="card-body">
          <h6 class="mb-3 font-15 text-muted font-weight-normal">DEPENSES</h6>
          <div
            v-if="!getTransactionsInfosList[0].expense"
            class="h2 mb-0 font-weight-normal text-danger"
          >0 €</div>
          <div
            v-else
            class="h2 mb-0 font-weight-normal text-danger"
          >{{ getTransactionsInfosList[0].expense | toCurrency }}</div>

          <i class="la la-arrow-down top-widget-icon text-danger"></i>
        </div>
      </div>
    </div>
    <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
      <div class="card">
        <div class="card-body">
          <h6 class="mb-3 font-15 text-muted font-weight-normal">SOLDE</h6>
          <div
            v-if="!getTransactionsInfosList[0].transactions_number"
            class="h2 mb-0 font-weight-normal text-primary"
          >0 €</div>
          <div
            v-else
            class="h2 mb-0 font-weight-normal text-primary"
          >{{ getTransactionsInfosList[0].income - getTransactionsInfosList[0].expense | toCurrency }}</div>

          <i class="la la-money top-widget-icon text-primary"></i>
        </div>
      </div>
    </div>
    <div class="col-xs-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 card-container">
      <div class="card">
        <div class="card-body">
          <h6 class="mb-3 font-15 text-muted font-weight-normal">TRANSACTIONS</h6>
          <div
            v-if="!getTransactionsInfosList[0].transactions_number"
            class="h2 mb-0 font-weight-normal text-muted"
          >0</div>
          <div
            v-else
            class="h2 mb-0 font-weight-normal text-muted"
          >{{ getTransactionsInfosList[0].transactions_number }}</div>

          <i class="la la-exchange top-widget-icon text-muted"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("kpis/getTransactionsInfos");
  },
  computed: {
    getTransactionsInfosList() {
      return this.$store.getters["kpis/getTransactionsInfos"];
    }
  }
};
</script>

<style lang="scss" scoped>
.top-widget-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  color: #6a89d7;
}
</style>
