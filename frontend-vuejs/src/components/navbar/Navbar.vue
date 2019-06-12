<template>
  <nav class="navbar navbar-expand navbar-light fixed-top header">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link navbar-icon sidebar-toggler" id="sidebar-toggler">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link navbar-icon" data-toggle="modal" data-target="#search-modal">
          <i class="la la-search"></i>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle navbar-icon notifications" data-toggle="dropdown">
          <i class="la la-bell position-relative"></i>
          <span class="notify-signal bg-primary"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right pt-0" style="min-width: 350px">
          <div class="py-4 px-3 text-center text-white mb-3" style="background-color: #2c2f48;">
            <h5 class="m-0">7 New Notifications</h5>
          </div>
          <div class="custom-scroll position-relative mb-3" style="height:320px;">
            <div class="list-group list-group-flush">
              <a class="list-group-item list-group-item-action px-4 py-3" href="#">
                <div class="media align-items-center">
                  <i class="la la-hdd-o text-center font-20 text-primary mr-3" style="width: 40px"></i>
                  <div class="media-body">
                    <div class="flexbox">
                      <h6 class="mb-0 font-weight-bold">Server overloaded 91%</h6>
                      <div class="text-muted font-13">40 min</div>
                    </div>
                    <div class="font-13 text-muted">Lorem ipsum dolor sit amet ut.</div>
                  </div>
                </div>
              </a>
              <a class="list-group-item list-group-item-action px-4 py-3" href="#">
                <div class="media align-items-center">
                  <i
                    class="la la-database text-center font-20 text-primary mr-3"
                    style="width: 40px"
                  ></i>
                  <div class="media-body">
                    <div class="flexbox">
                      <h6 class="mb-0 font-weight-bold">New support request</h6>
                      <div class="text-muted font-13">1 hrs</div>
                    </div>
                    <div class="font-13 text-muted">Lorem ipsum dolor sit amet ut.</div>
                  </div>
                </div>
              </a>
              <a class="list-group-item list-group-item-action px-4 py-3" href="#">
                <div class="media align-items-center">
                  <i class="la la-server text-center font-20 text-primary mr-3" style="width: 40px"></i>
                  <div class="media-body">
                    <div class="flexbox">
                      <h6 class="mb-0 font-weight-bold">System Warning</h6>
                      <div class="text-muted font-13">2 hrs</div>
                    </div>
                    <div class="font-13 text-muted">Lorem ipsum dolor sit amet ut.</div>
                  </div>
                </div>
              </a>
              <a class="list-group-item list-group-item-action px-4 py-3" href="#">
                <div class="media align-items-center">
                  <i
                    class="la la-user-plus text-center font-20 text-primary mr-3"
                    style="width: 40px"
                  ></i>
                  <div class="media-body">
                    <div class="flexbox">
                      <h6 class="mb-0 font-weight-bold">24 new users registered</h6>
                      <div class="text-muted font-13">2 hrs</div>
                    </div>
                    <div class="font-13 text-muted">Lorem ipsum dolor sit amet ut.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="px-3 py-2 text-center">
            <a class="hover-link font-13" href="javascript:;">view all</a>
          </div>
        </div>
      </li>
      <li class="nav-divider"></li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle no-arrow d-inline-flex align-items-center profile"
          data-toggle="dropdown"
        >
          <span class="d-none d-sm-inline-block mr-2">{{ this.$store.state.auth.user.username }}</span>
          <span class="position-relative d-inline-block">
            <img class="rounded-circle" src="https://picsum.photos/100/100" alt="image" width="36">
            <span class="badge-point badge-success avatar-badge"></span>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-right pt-0 pb-4" style="min-width: 280px;">
          <div
            class="p-4 mb-4 media align-items-center text-white"
            style="background-color: #2c2f48;"
          >
            <img
              class="rounded-circle mr-3"
              src="https://picsum.photos/100/100"
              alt="image"
              width="55"
            >
            <div class="media-body">
              <h5 class="mb-1">{{ this.$store.state.auth.user.username }}</h5>
              <div
                class="font-13"
              >{{ this.$store.state.auth.user.is_admin ? 'Administrateur' : 'Utilisateur'}}</div>
            </div>
          </div>
          <router-link to="/profile" class="dropdown-item d-flex align-items-center">
            <i class="la la-user mr-3 font-18 text-muted"></i>Profil
          </router-link>

          <div class="dropdown-divider my-3"></div>
          <div class="mx-4">
            <button class="btn btn-link p-0" @click="onLogout">
              <span class="btn-icon">
                <i class="la la-power-off mr-2 font-18"></i>Déconnexion
              </span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout").then(response => {
        this.$router.push("authentication");
        this.$awn.success("Vous êtes maintenant déconnecté", {
          icons: { success: "check" }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#sidebar-toggler,
.nav-link.navbar-icon,
.profile,
.notifications {
  cursor: pointer;
}
.navbar-expand .navbar-nav .dropdown-menu {
  right: 5px;
}
.la.la-user,
.la.la-power-off,
.la.la-bell,
.la.la-search {
  font-size: 1.8rem;
}
</style>
