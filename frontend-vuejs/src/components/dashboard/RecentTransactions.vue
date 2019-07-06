<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-fullheight">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-4">
            <h5 class="box-title mb-0">Transactions récentes</h5>
            <router-link class="text-muted" to="/transactions">Voir tout</router-link>
          </div>
          <table class="table table-borderless cols-align-middle">
            <tbody>
              <div
                v-if="!getLastTransactionsList.length"
                class="text-center text-muted font-weight-strong"
              >
                <p>Aucune transaction n'a été réalisée pour le moment</p>
              </div>
              <tr v-for="transaction in getLastTransactionsList" :key="transaction.transaction_id">
                <td class="text-center text-muted font-weight-strong">
                  <div>{{ transaction.transaction_date | formatDate }}</div>
                </td>
                <td>
                  <i
                    :class="transaction.transaction_type === 'expense' ? 'la la-arrow-down text-warning' : 'la la-arrow-up text-success'"
                  ></i>
                </td>
                <td>
                  <div class="h6 mb-1 font-16">{{ transaction.transaction_category_name }}</div>
                  <div class="text-muted">{{ transaction.transaction_payment_mode | paymentMode }}</div>
                </td>
                <td>
                  <div class="h6 mb-1 font-16">{{ transaction.transaction_description }}</div>
                </td>
                <td class="text-right">
                  <div
                    :class="transaction.transaction_type === 'expense' ? 'h6 mb-1 font-16 text-danger' : 'h6 mb-1 font-16 text-success'"
                  >{{ transaction.transaction_type === 'expense' ? '-' : '+' }}{{ transaction.transaction_amount | toCurrency }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from "date-fns/format";
import frLocal from "date-fns/locale/fr";

export default {
  created() {
    this.$store.dispatch("kpis/getLastTransactions");
  },
  computed: {
    getLastTransactionsList() {
      return this.$store.getters["kpis/getLastTransactionsList"];
    }
  },
  filters: {
    formatDate(value) {
      if (!value) return "";
      return format(value, "DD MMMM", { locale: frLocal });
    },
    paymentMode(value) {
      if (value === "cash") {
        return "Espèces";
      } else if (value === "card") {
        return "Carte Bancaire";
      } else if (value === "transfer") {
        return "Virement";
      }
    }
  }
};
</script>
