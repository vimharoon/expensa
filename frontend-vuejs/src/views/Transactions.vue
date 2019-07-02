<template>
  <div class="page-content fade-in-up">
    <div class="page-heading">
      <div class="page-breadcrumb">
        <h1 class="page-title">Toutes les transactions</h1>
      </div>
    </div>
    <div>
      <div class="card mt-4">
        <div class="card-cup bg-primary text-white justify-content-between">
          <div class="col-sm-10 col-md-6">
            <input type="text" class="form-control" v-model="searchInput" placeholder="Rechercher" />
          </div>
          <div class="col-sm-2 col-md-6">
            <button
              class="btn btn-danger btn-floating float-right"
              type="button"
              data-toggle="modal"
              data-target="#transactionModalCenter"
              @click="onCreateNewTransaction"
            >
              <i class="la la-plus"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="table-responsive">
                <table class="table table-bordered w-100" id="dt-base">
                  <thead class="thead-light">
                    <tr>
                      <th class="sortable">Catégorie</th>
                      <th class="sortable">Date</th>
                      <th class="sortable">Mode de paiement</th>
                      <th class="sortable">Description</th>
                      <th class="sortable">Montant</th>
                      <th class="sortable">Actions</th>
                      <!-- :class="currentSortDir === 'asc' ? 'desc' : 'asc'"
                      <span class="arrow"></span>-->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="trans in sortedTransactions" :key="trans.transaction_id">
                      <td>
                        <i :class="trans.transaction_category_icon + ' icofont-2x'"></i>
                        {{ trans.transaction_category_name }}
                      </td>
                      <td>{{ trans.transaction_date | formatDate }}</td>
                      <td>{{ trans.transaction_payment_mode | paymentMode }}</td>
                      <td>{{ trans.transaction_description }}</td>
                      <td>
                        <strong
                          :class="trans.transaction_type === 'expense' ? 'text-danger' : 'text-success'"
                        >{{ trans.transaction_amount | toCurrency }}</strong>
                      </td>
                      <td>
                        <div class="d-flex justify-content-around task-actions">
                          <a
                            class="text-muted"
                            data-toggle="modal"
                            data-target="#transactionModalCenter"
                            @click="onEditTransaction(trans)"
                          >
                            <i class="la la-pencil"></i>
                          </a>
                          <a class="text-danger" @click="onDeleteTransaction(trans)">
                            <i class="la la-close ml-2"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- table footer -->
          <div class="row">
            <div class="col-sm-12 col-md-5">
              <div role="status">
                Vous avez
                <strong>{{ sortedTransactions.length }}</strong> transactions
              </div>
            </div>
            <div class="col-sm-12 col-md-7">
              <nav>
                <ul class="pagination justify-content-end">
                  <li class="page-item">
                    <a class="page-link previous">Précédent</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link next">Suivant</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transaction-modal :transactionModalTitle="transactionModalTitle"></transaction-modal>
  </div>
</template>

<script>
import TransactionModal from "@/components/transactions/TransactionModal";
import { EventBus } from "@/eventBus";
import format from "date-fns/format";
import frLocal from "date-fns/locale/fr";

export default {
  components: {
    TransactionModal
  },
  data() {
    return {
      searchInput: "",
      transactionModalTitle: ""
    };
  },
  methods: {
    onCreateNewTransaction() {
      this.transactionModalTitle = "Ajouter une transaction";
      EventBus.$emit("create-transaction", true);
    },
    onEditTransaction(transaction) {
      this.transactionModalTitle = "Modifier une transaction";
      EventBus.$emit("edit-transaction", transaction);
    },
    onDeleteTransaction(transaction) {
      this.$store
        .dispatch("transactions/deleteTransactions", transaction.transaction_id)
        .then(response => {
          this.$store.dispatch("transactions/getAllTransactions");
          this.$awn.success(response.message, {
            icons: { success: "check" }
          });
        });
    }
  },
  mounted() {
    this.$store.dispatch("transactions/getAllTransactions");
  },
  filters: {
    formatDate(value) {
      if (!value) return "";
      return format(value, "DD MMMM YYYY", { locale: frLocal });
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
  },
  computed: {
    sortedTransactions() {
      return this.$store.getters["transactions/getAllTransactions"].filter(
        (transaction, index) => {
          return transaction.transaction_category_name
            .toLowerCase()
            .match(this.searchInput.toLowerCase());
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
th.active .arrow {
  opacity: 1;
}
.task-actions .text-muted,
.task-actions .text-danger {
  display: none;
  cursor: pointer;
  .la {
    font-size: 1.5rem;
  }
}
#dt-base tr:hover .task-actions .text-muted,
#dt-base tr:hover .task-actions .text-danger {
  display: block;
}
.sortable {
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
    &.asc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #2949ef;
    }
    &.desc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #2949ef;
    }
  }
}
</style>

