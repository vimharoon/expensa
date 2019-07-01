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
                    <input type="radio" name="transactiontype" checked />
                    <span>Dépense</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" name="transactiontype" />
                    <span>Revenue</span>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="md-form">
                    <input class="md-form-control" type="date" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="md-form">
                    <input class="md-form-control" type="time" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="md-form">
                    <input class="md-form-control" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="md-form">
                    <input class="md-form-control" type="number" min="0" />
                  </div>
                </div>
              </div>
              <div class="md-form">
                <textarea class="md-form-control"></textarea>
                <label>description</label>
              </div>
              <div class="form-group mb-5">
                <label>Mode de payment :</label>
                <div class="d-flex justify-content-around">
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" name="paymentmode" checked />
                    <span>Cash</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" name="paymentmode" />
                    <span>Carte blue</span>
                  </label>
                  <label class="radio radio-inline radio-primary">
                    <input type="radio" name="paymentmode" />
                    <span>carte de crédit</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light" type="button" data-dismiss="modal">Annuler</button>
            <button class="btn btn-primary" type="button">Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus";

export default {
  props: {
    transactionModalTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      taskId: "",
      taskName: "",
      taskDescription: "",
      createTransaction: false
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
  },
  methods: {}
};
</script>

