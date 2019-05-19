<template>
  <div id="signup-page" class="page-wrapper fade-in-up">
    <div class="auth-wrapper">
      <div class="card auth-content mb-0">
        <div class="card-body py-5">
          <div class="text-center mb-5">
            <h3 class="mb-3 text-primary">Expensa</h3>
            <div class="font-18 text-center">Créer un compte</div>
          </div>
          <form id="register-form" action="javascript:;">
            <div class="mb-4">
              <div class="md-form mb-0">
                <input class="md-form-control" type="text" name="username">
                <label>Username</label>
              </div>
            </div>
            <div class="mb-4">
              <div class="md-form mb-0">
                <input class="md-form-control" type="email" name="email">
                <label>Email</label>
              </div>
            </div>
            <div class="mb-4">
              <div class="md-form mb-0">
                <input class="md-form-control" id="password" type="password" name="password">
                <label>Password</label>
              </div>
            </div>
            <div class="mb-5">
              <div class="md-form mb-0">
                <input class="md-form-control" type="password" name="password_confirmation">
                <label>Confirm Password</label>
              </div>
            </div>
            <div class="flexbox mb-5">
              <label class="checkbox checkbox-primary mt-2">
                <input type="checkbox" checked>
                <span>I accept the terms</span>
              </label>
              <button
                class="btn btn-primary btn-rounded font-16"
                style="min-width: 100px"
                type="submit"
              >S'inscrire</button>
            </div>
          </form>
          <div class="text-center mt-4 font-15">
            <button class="btn btn-link" @click="switchActiveComponent">Déjà membre? se connecter</button>
          </div>
          <div class="text-center mt-3 font-13">
            <div class="mb-2 text-muted">2019 © All rights reserved</div>
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
    switchActiveComponent() {
      EventBus.$emit("switch-active-comp", "Login");
    }
  }
};
</script>

<style lang="scss" scoped>
#signup-page {
  height: 100vh;
  .auth-wrapper {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 15px 30px 15px;
    .auth-content {
      max-width: 400px;
      flex-basis: 400px;
      box-shadow: 0 5px 20px #d6dee4;
    }
  }
}
</style>
