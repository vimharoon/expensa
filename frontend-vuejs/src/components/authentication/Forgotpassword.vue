<template>
  <div id="forgot-password-page" class="page-wrapper fade-in-up">
    <div class="auth-wrapper">
      <div>
        <div class="card">
          <div class="text-center">
            <span class="auth-head-icon text-primary">
              <i class="la la-key"></i>
            </span>
          </div>
          <div class="card-body pt-1">
            <h4 class="text-center mb-4">Réinitialiser le mot de passe</h4>
            <p
              class="mb-4 text-center"
            >Entrez votre adresse email ci-dessous et nous vous enverrons les instructions pour réinitialiser votre mot de passe.</p>
            <form id="reset-password-form" action="javascript:;">
              <div class="md-form mb-0">
                <input class="md-form-control" type="email" name="email">
                <label>Email</label>
              </div>
              <button
                class="btn btn-primary btn-rounded btn-block mt-4 font-18"
                @click="sendEmail"
              >Envoyer</button>
            </form>
            <div class="text-center mt-4 font-13">
              <div class="mb-2 text-muted">2019 © All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./../../eventBus";
export default {
  methods: {
    sendEmail() {
      this.$router.push("authentication");
    }
  }
};
</script>

<style lang="scss" scoped>
#forgot-password-page {
  height: 100vh;
  .auth-wrapper {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 15px 30px 15px;
    .auth-wrapper .card {
      max-width: 400px;
      flex-basis: 400px;
      box-shadow: 0 5px 20px #d6dee4;
    }
    .auth-head-icon {
      position: relative;
      height: 60px;
      width: 60px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      background-color: #fff;
      box-shadow: 0 5px 20px #d6dee4;
      border-radius: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }
  }
}
</style>
