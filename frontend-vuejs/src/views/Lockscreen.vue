<template>
  <div id="lockscreen-page" class="page-wrapper fade-in-up">
    <div class="auth-wrapper">
      <div>
        <div class="card">
          <div class="text-center">
            <span class="auth-head-icon text-primary">
              <i class="la la-unlock"></i>
            </span>
          </div>
          <div class="card-body pt-1">
            <h4 class="text-center mb-4">
              VOTRE COMPTE EST
              <strong>EN ATTENTE D'ACTIVATION</strong>
            </h4>
            <p class="font-13">Vous allez recevoir un e-mail d'activation.</p>
            <p class="font-13">
              Vous devez cliquer sur le liens figurant dans cette e-mail pour activer
              votre compte et pouvoir vous y connecter.
            </p>
            <p class="font-13">
              <strong>Attention !</strong> ce lien ne sera valable que 12 heures. Au-delà,
              vous devez refaire une demande de lien via ce formulaire.
            </p>
            <form id="lockscreen-form" action="javascript:;">
              <div class="md-form mb-0">
                <input class="md-form-control" type="email" name="email">
                <label>Email</label>
              </div>
              <button class="btn btn-primary btn-rounded btn-block mt-4 font-18" type="submit">
                <span class="btn-icon">
                  <i class="la la-paper-plane"></i>Envoyer
                </span>
              </button>
            </form>
            <div class="text-center mt-4 font-13">
              <div class="mb-2 text-muted">2019 © All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
      <router-link class="btn btn-link home-link" to="/">
        <span class="btn-icon">
          <i class="la la-long-arrow-left font-20"></i>Retour à l'Accueil
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#lockscreen-page {
  height: 100vh;
  .auth-wrapper {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 15px 30px 15px;
    .auth-wrapper .card {
      max-width: 450px;
      flex-basis: 450px;
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
  .home-link {
    position: absolute;
    left: 5px;
    top: 10px;
  }
}
</style>
