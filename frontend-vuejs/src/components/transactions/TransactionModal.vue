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
                      v-validate="'required'"
                      name="type"
                      v-model="transactiontype"
                    />
                    <span>Dépense</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input
                      type="radio"
                      value="income"
                      v-validate="'required'"
                      name="type"
                      v-model="transactiontype"
                    />
                    <span>Revenue</span>
                  </label>
                </div>
                <span
                  v-show="errors.has('type')"
                  class="helper-text text-danger"
                >{{ errors.first('type') }}</span>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="md-form">
                    <input
                      class="md-form-control"
                      name="date"
                      v-validate="'required'"
                      type="date"
                      v-model="transactiondate"
                    />
                    <span
                      v-show="errors.has('date')"
                      class="helper-text"
                      :data-error="errors.first('date')"
                    ></span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="md-form">
                    <input
                      class="md-form-control"
                      name="heure"
                      v-validate="'required'"
                      type="time"
                      v-model="transactiontime"
                    />
                    <span
                      v-show="errors.has('heure')"
                      class="helper-text"
                      :data-error="errors.first('heure')"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="md-form">
                    <select
                      class="md-form-control"
                      name="categorie"
                      v-validate="'required'"
                      v-model="transactioncategory"
                    >
                      <option>Choisir une catégorie</option>
                      <option
                        v-for="category in sortedTransactionOptions"
                        v-bind:value="category.transaction_category_id"
                        :key="category.transaction_category_id"
                      >{{ category.transaction_category_name }}</option>
                    </select>
                  </div>
                  <span
                    v-show="errors.has('categorie')"
                    class="helper-text"
                    :data-error="errors.first('categorie')"
                  ></span>
                </div>
                <div class="col-sm-6">
                  <div class="md-form">
                    <input
                      class="md-form-control"
                      type="text"
                      name="montant"
                      v-validate="'required|regex:[1234567890€]'"
                      @blur="onBlurHandler"
                      @focus="onFocusHandler"
                      placeholder="Entrer le montant"
                      v-model="transactionamount"
                    />
                  </div>
                  <span
                    v-show="errors.has('montant')"
                    class="helper-text"
                    :data-error="errors.first('montant')"
                  ></span>
                </div>
              </div>
              <div class="md-form">
                <textarea
                  class="md-form-control"
                  name="description"
                  v-validate="'required|min:5|max:255'"
                  v-model="transactiondescription"
                ></textarea>
                <label>description</label>
                <span
                  v-show="errors.has('description')"
                  class="helper-text"
                  :data-error="errors.first('description')"
                ></span>
              </div>
              <div class="form-group mb-5">
                <label>Mode de payment :</label>
                <div class="d-flex justify-content-around">
                  <label class="radio radio-inline radio-primary">
                    <input
                      type="radio"
                      value="cash"
                      v-validate="'required'"
                      name="payment"
                      v-model="paymentmode"
                    />
                    <span>En Espèces</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input
                      type="radio"
                      value="card"
                      v-validate="'required'"
                      name="payment"
                      v-model="paymentmode"
                    />
                    <span>Carte Bancaire</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input
                      type="radio"
                      value="transfer"
                      v-validate="'required'"
                      name="payment"
                      v-model="paymentmode"
                    />
                    <span>Virement</span>
                  </label>
                </div>
                <span
                  v-show="errors.has('payment')"
                  class="helper-text text-danger"
                >{{ errors.first('payment') }}</span>
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
      const selectDate = transaction.transaction_date.split("T");
      const selectTime = selectDate[1].split(".");
      this.transactionId = transaction.transaction_id;
      this.paymentmode = transaction.transaction_payment_mode;
      this.transactiontype = transaction.transaction_type;
      this.transactiondate = selectDate[0];
      this.transactiontime = selectTime[0];
      this.transactionamount = transaction.transaction_amount;
      this.transactioncategory = transaction.transaction_category_name;
      this.transactiondescription = transaction.transaction_description;
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
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.createTransaction) {
            this._createTransaction(transactionData);
          } else {
            this._editTransaction(transactionData);
          }
        } else {
          this.$awn.warning("Veuillez saisir des informations valides", {
            icons: { warning: "exclamation" }
          });
        }
      });
    },
    _createTransaction(transactionData) {
      this.$store
        .dispatch("transactions/createNewTransaction", transactionData)
        .then(response => {
          this.$store.dispatch("transactions/getAllTransactions");
          $("#transactionModalCenter").modal("hide");
          this.$awn.success(response.message, {
            icons: { success: "check" }
          });
        });
    },
    _editTransaction(transactionData) {
      const editTransactionData = {
        transactionData: transactionData,
        id: this.transactionId
      };
      this.$store
        .dispatch("transactions/editTransaction", editTransactionData)
        .then(response => {
          console.log(response);
          this.$store.dispatch("transactions/getAllTransactions");
          $("#transactionModalCenter").modal("hide");
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

