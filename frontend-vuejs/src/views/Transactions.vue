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
            <input type="text" class="form-control" placeholder="Rechercher" />
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
                      <th @click="sort('category')" class="sortable">
                        Catégorie
                        <span
                          class="arrow"
                          :class="currentSortDir === 'asc' ? 'desc' : 'asc'"
                        ></span>
                      </th>
                      <th @click="sort('date')" class="sortable">
                        Date
                        <span class="arrow" :class="currentSortDir === 'asc' ? 'desc' : 'asc'"></span>
                      </th>
                      <th @click="sort('paymentmode')" class="sortable">
                        Mode de paiement
                        <span
                          class="arrow"
                          :class="currentSortDir === 'asc' ? 'desc' : 'asc'"
                        ></span>
                      </th>
                      <th @click="sort('description')" class="sortable">
                        Description
                        <span
                          class="arrow"
                          :class="currentSortDir === 'asc' ? 'desc' : 'asc'"
                        ></span>
                      </th>
                      <th @click="sort('amount')" class="sortable">
                        Montant
                        <span
                          class="arrow"
                          :class="currentSortDir === 'asc' ? 'desc' : 'asc'"
                        ></span>
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
              <!-- sortedTransactions.length -->
              <div
                role="status"
              >1 à 10 sur 20 transactions | debug: sort={{ currentSort }}, dir={{ currentSortDir }}, page={{ currentPage }}</div>
            </div>
            <div class="col-sm-12 col-md-7">
              <nav>
                <ul class="pagination justify-content-end">
                  <li class="page-item" @click="prevPage">
                    <a class="page-link previous">Previous</a>
                  </li>
                  <li class="page-item" @click="nextPage">
                    <a class="page-link next">Next</a>
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
    // const sortOrders = {};
    // this.columns.forEach(key => {
    //   sortOrders[key] = 1;
    // });
    return {
      // sortKey: "",
      // sortOrders: sortOrders,
      currentSort: "date",
      currentSortDir: "asc",
      pageSize: 10,
      currentPage: 1
    };
  },
  methods: {
    sort(sName) {
      if (sName === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = sName;
    },
    nextPage: function() {
      if (this.currentPage * this.pageSize < this.transactions.length)
        this.currentPage++;
    },
    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },
  mounted() {
    this.$store.dispatch("transactions/getAllTransactions");
  },
  computed: {
    sortedTransactions() {
      return this.$store.getters["transactions/getAllTransactionsFiltred"](
        this.currentSortDir,
        this.currentSort,
        this.currentPage,
        this.pageSize
      );
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

