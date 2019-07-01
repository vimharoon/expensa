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
                      <th class="sortable">
                        Catégorie
                        <span class="arrow"></span>
                      </th>
                      <th class="sortable">
                        Date
                        <span class="arrow"></span>
                      </th>
                      <th class="sortable">
                        Mode de paiement
                        <span class="arrow"></span>
                      </th>
                      <th class="sortable">
                        Description
                        <span class="arrow"></span>
                      </th>
                      <th class="sortable">
                        Montant
                        <!-- :class="currentSortDir === 'asc' ? 'desc' : 'asc'" -->
                        <span class="arrow"></span>
                      </th>
                      <th class="sortable">
                        Actions
                        <span class="arrow"></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="trans in sortedTransactions" :key="trans.transaction_id">
                      <td>
                        <i class="icofont-food-basket icofont-2x"></i>
                        {{ trans.transaction_category_name }}
                      </td>
                      <td>{{ trans.transaction_date }}</td>
                      <td>{{ trans.transaction_type }}</td>
                      <td>{{ trans.transaction_description }}</td>
                      <td>{{ trans.transaction_amount }} €</td>
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
                  <li class="page-item" @click="prevPage">
                    <a class="page-link previous">Précédent</a>
                  </li>
                  <li class="page-item" @click="nextPage">
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

export default {
  components: {
    TransactionModal
  },
  data() {
    return {
      searchInput: "",
      currentPage: 1,
      rowsPerPage: 10,
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
    },
    nextPage() {
      if (this.currentPage * this.rowsPerPage < this.sortedTransactions.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  mounted() {
    this.$store.dispatch("transactions/getAllTransactions");
  },
  computed: {
    sortedTransactions() {
      return this.$store.getters["transactions/getAllTransactions"].filter(
        transaction => {
          return transaction.transaction_category_name
            .toLowerCase()
            .match(this.searchInput.toLowerCase());
        }
      );
      // .filter(
      //   (row, index) => {
      //     let start = (this.currentPage - 1) * this.rowsPerPage;
      //     let end = this.currentPage * this.rowsPerPage;
      //     if (index >= start && index < end) return true;
      //   }
      // );
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

