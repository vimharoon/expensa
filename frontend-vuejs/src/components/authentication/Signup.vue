<template>
  <div id="signup-page" class="page-wrapper fade-in-up">
    <div class="auth-wrapper">
      <div class="card auth-content mb-0">
        <div class="card-body py-5">
          <div class="text-center mb-5">
            <h3 class="mb-3 text-primary">Expensa</h3>
            <div class="font-18 text-center">Créer un compte</div>
          </div>
          <form id="register-form" @submit.prevent="onRegisterNewUser">
            <div class="mb-4">
              <div class="md-form mb-0">
                <input
                  class="md-form-control"
                  type="text"
                  v-model="username"
                  name="nom d'utilisateur"
                  v-validate="'required|min:3|max:20|alpha_num'"
                />
                <label>Nom d'utilisateur</label>
                <span
                  v-show="errors.has('nom d\'utilisateur')"
                  class="helper-text"
                  :data-error="errors.first('nom d\'utilisateur')"
                ></span>
              </div>
            </div>
            <div class="mb-4">
              <div class="md-form mb-0">
                <input
                  class="md-form-control"
                  type="email"
                  v-model="email"
                  name="email"
                  v-validate="'required|email'"
                />
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
                  ref="mot de passe"
                />
                <label>Mot de passe</label>
                <span
                  v-show="errors.has('mot de passe')"
                  class="helper-text"
                  :data-error="errors.first('mot de passe')"
                ></span>
              </div>
            </div>
            <div class="mb-5">
              <div class="md-form mb-0">
                <input
                  class="md-form-control"
                  type="password"
                  name="confirmer mot de passe"
                  v-validate="'required|confirmed:mot de passe'"
                  data-vv-as="confirmer mot de passe"
                />
                <label>Confirmer mot de passe</label>
                <span
                  v-show="errors.has('confirmer mot de passe')"
                  class="helper-text"
                  :data-error="errors.first('confirmer mot de passe')"
                ></span>
              </div>
            </div>
            <div class="flexbox mb-5">
              <label class="checkbox checkbox-primary mt-2">
                <input type="checkbox" checked />
                <span class="small">J'accepte les conditions d'utilisation</span>
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
      <a class="btn btn-link home-link" href="https://expensa.haroonmohammad.com">
        <span class="btn-icon">
          <i class="la la-long-arrow-left font-20"></i>Retour à l'Accueil
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./../../eventBus";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    switchActiveComponent() {
      EventBus.$emit("switch-active-comp", "Login");
    },
    onRegisterNewUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store
            .dispatch("auth/register", userData)
            .then(response => {
              this.switchActiveComponent();
              this.$awn.success(response.data.message, {
                icons: { success: "check" }
              });
            })
            .catch(error => {
              this.$awn.warning(error.data.message, {
                icons: { alert: "exclamation" }
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
  .home-link {
    position: absolute;
    left: 5px;
    top: 10px;
  }
}
</style>
