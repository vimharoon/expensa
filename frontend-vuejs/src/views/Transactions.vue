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
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="trans in sortedTransactions" :key="trans.transaction_id">
                      <td>{{ trans.transaction_category_name }}</td>
                      <td>{{ trans.transaction_date }}</td>
                      <td>{{ trans.transaction_type }}</td>
                      <td>{{ trans.transaction_description }}</td>
                      <td>{{ trans.transaction_amount }}</td>
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
    <transaction-modal></transaction-modal>
  </div>
</template>

<script>
import TransactionModal from "@/components/transactions/TransactionModal";
import TestData from "@/testData.js";
export default {
  components: {
    TransactionModal
  },
  data() {
    return {
      searchInput: "",
      currentPage: 1,
      rowsPerPage: 10
    };
  },
  methods: {
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
.sortable {
  cursor: pointer;
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

