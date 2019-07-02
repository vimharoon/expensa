<template>
  <div>
    <div
      class="modal fade"
      id="transactionModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="transactionModalCenter"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="transactionModalCenter">{{ transactionModalTitle }}</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <div class="d-flex justify-content-around">
                  <label class="radio radio-inline radio-primary">
                    <input
                      type="radio"
                      value="expense"
                      name="transactiontype"
                      v-model="transactiontype"
                    />
                    <span>Dépense</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input
                      type="radio"
                      value="income"
                      name="transactiontype"
                      v-model="transactiontype"
                    />
                    <span>Revenue</span>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="md-form">
                    <input class="md-form-control" type="date" v-model="transactiondate" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="md-form">
                    <input class="md-form-control" type="time" v-model="transactiontime" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="md-form">
                    <select class="md-form-control" v-model="transactioncategory">
                      <option value>Choisir une catégorie</option>
                      <option
                        v-for="category in sortedTransactionOptions"
                        v-bind:value="category.transaction_category_id"
                        :key="category.transaction_category_id"
                      >{{ category.transaction_category_name }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="md-form">
                    <input
                      class="md-form-control"
                      type="text"
                      @blur="onBlurHandler"
                      @focus="onFocusHandler"
                      placeholder="Entrer le montant"
                      v-model="transactionamount"
                    />
                  </div>
                </div>
              </div>
              <div class="md-form">
                <textarea class="md-form-control" v-model="transactiondescription"></textarea>
                <label>description</label>
              </div>
              <div class="form-group mb-5">
                <label>Mode de payment :</label>
                <div class="d-flex justify-content-around">
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" value="cash" name="paymentmode" v-model="paymentmode" />
                    <span>En Espèces</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" value="card" name="paymentmode" v-model="paymentmode" />
                    <span>Carte Bancaire</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" value="transfer" name="paymentmode" v-model="paymentmode" />
                    <span>Virement</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light" type="button" data-dismiss="modal">Annuler</button>
            <button class="btn btn-primary" @click="submitTransaction" type="button">Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus";
import format from "date-fns/format";

export default {
  props: {
    transactionModalTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      paymentmode: "",
      transactionId: "",
      transactiontype: "",
      transactiondate: "",
      transactiontime: "",
      isInputActive: false,
      transactionamount: "",
      transactioncategory: "",
      transactiondescription: "",
      createTransaction: false,
      transactionCategoryOption: []
    };
  },
  mounted() {
    EventBus.$on("create-transaction", create => {
      this.createTransaction = create;
    });
    EventBus.$on("edit-transaction", transaction => {
      console.log(transaction);
      this.createTransaction = false;
    });
    this.$store
      .dispatch("transactions/getAllTransactionsCategory")
      .then(transactionCategory => {
        this.transactionCategoryOption = transactionCategory;
      });
  },
  methods: {
    submitTransaction() {
      const transactionAmount = this.transactionamount.split("€");
      const transactionData = {
        transactionPaymentMode: this.paymentmode,
        transactionType: this.transactiontype,
        transactionDate: format(
          this.transactiondate + " " + this.transactiontime
        ),
        transactionAmount: transactionAmount[0].trim(),
        transactionDescription: this.transactiondescription,
        transaction_category_id: this.transactioncategory
      };
      console.log(transactionData);
      this.$store
        .dispatch("transactions/createNewTransaction", transactionData)
        .then(response => {
          console.log(response);
          this.$store.dispatch("transactions/getAllTransactions");
          this.$awn.success(response.message, {
            icons: { success: "check" }
          });
        });
    },
    onBlurHandler() {
      this.transactionamount = this.format(this.transactionamount);
    },
    onFocusHandler() {
      this.transactionamount = accounting.unformat(this.transactionamount);
    },
    format(value) {
      return accounting.formatMoney(value, { symbol: "€", format: "%v %s" });
    }
  },
  computed: {
    sortedTransactionOptions() {
      return this.transactionCategoryOption.filter((transaction, index) => {
        return transaction.transaction_category_type
          .toLowerCase()
          .match(this.transactiontype.toLowerCase());
      });
    }
  }
};
</script>

