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
            <input type="text" class="form-control" placeholder="Rechercher">
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
                    <tr v-for="trans in sortedTransactions" :key="trans.id">
                      <td>{{ trans.category }}</td>
                      <td>{{ trans.date }}</td>
                      <td>{{ trans.paymentmode }}</td>
                      <td>{{ trans.description }}</td>
                      <td>{{ trans.amount }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- table footer -->
          <div class="row">
            <div class="col-sm-12 col-md-5">
              <div
                role="status"
              >1 à 10 sur {{ transactions.length }} transactions | debug: sort={{ currentSort }}, dir={{ currentSortDir }}, page={{ currentPage }}</div>
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
    <new-transaction-modal></new-transaction-modal>
  </div>
</template>

<script>
import NewTransactionModal from "@/components/transactions/NewTransactionModal";
import TestData from "@/testData.js";
export default {
  components: {
    NewTransactionModal
  },
  data() {
    // const sortOrders = {};
    // this.columns.forEach(key => {
    //   sortOrders[key] = 1;
    // });
    return {
      // sortKey: "",
      // sortOrders: sortOrders,
      transactions: TestData,
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
  computed: {
    sortedTransactions() {
      return this.transactions
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === "desc") modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          const start = (this.currentPage - 1) * this.pageSize;
          const end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
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

