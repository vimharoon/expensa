<template>
  <div id="login-page" class="page-wrapper fade-in-up">
    <div class="auth-wrapper">
      <div class="card auth-content mb-0">
        <div class="card-body py-5">
          <div class="text-center mb-5">
            <h3 class="mb-3 text-primary">Expensa</h3>
            <div class="font-18 text-center">Connectez-vous à votre compte</div>
          </div>
          <form id="login-form" @submit.prevent="onLogin">
            <div class="mb-4">
              <div class="md-form mb-0">
                <input
                  class="md-form-control"
                  type="email"
                  v-model="email"
                  name="email"
                  v-validate="'required|email'"
                >
                <label>Email</label>
                <span
                  v-show="errors.has('email')"
                  class="helper-text"
                  :data-error="errors.first('email')"
                ></span>
              </div>
            </div>
            <div class="mb-4">
              <div class="md-form mb-0">
                <input
                  class="md-form-control"
                  type="password"
                  v-model="password"
                  name="mot de passe"
                  v-validate="'required|min:6|verify_password'"
                >
                <label>Mot de passe</label>
                <span
                  v-show="errors.has('mot de passe')"
                  class="helper-text"
                  :data-error="errors.first('mot de passe')"
                ></span>
              </div>
            </div>
            <div class="flexbox mb-5">
              <label class="ui-switch switch-solid small">
                <input type="checkbox" checked>
                <span class="small"></span>
                Se souvenir de moi
              </label>
              <router-link to="/forgot-password" class="text-primary mdp">Mot de passe oublié?</router-link>
            </div>
            <button class="btn btn-primary btn-rounded btn-block font-18" type="submit">Connexion</button>
          </form>
          <div class="text-center mt-4 font-15">
            <button
              class="btn btn-link"
              @click="switchActiveComponent"
            >Première visite ? Inscrivez vous !</button>
          </div>
          <div class="text-center mt-3 font-13">
            <div class="mb-2 text-muted">2019 © All rights reserved</div>
          </div>
        </div>
      </div>
      <router-link class="btn btn-link home-link" to="index.html">
        <span class="btn-icon">
          <i class="la la-long-arrow-left font-20"></i>Retour à l'Accueil
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./../../eventBus";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    switchActiveComponent() {
      EventBus.$emit("switch-active-comp", "Signup");
    },
    onLogin() {
      const userData = {
        email: this.email,
        password: this.password
      };
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch("auth/login", userData)
            .then(response => {
              this.$router.push("/");
              const { message } = response.data;
              this.$awn.success(message, {
                icons: { success: "check" }
              });
            })
            .catch(error => {
              this.$awn.warning(error.data.message, {
                icons: { warning: "exclamation" }
              });
            });
          return;
        } else {
          this.$awn.warning("Veuillez saisir des informations valides", {
            icons: { warning: "exclamation" }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#login-page {
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
      .text-primary.mdp {
        cursor: pointer;
      }
    }
  }
  .home-link {
    position: absolute;
    left: 5px;
    top: 10px;
  }
}
</style>
