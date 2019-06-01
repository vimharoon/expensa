<template>
  <div class="page-wrapper">
    <router-view name="auth"/>
    <div v-if="isLoggedIn" class="content-wrapper">
      <Sidebar></Sidebar>
      <!-- CONTENT -->
      <div class="content-area">
        <Navbar></Navbar>
        <router-view/>
        <!-- FOOTER -->
        <footer class="page-footer flexbox">
          <div class="text-muted">
            2019 ©
            <strong>Expensa</strong>. All rights reserved
          </div>
        </footer>
      </div>
    </div>
    <Searchform></Searchform>
    <div class="sidenav-backdrop backdrop"></div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";
import Searchform from "@/components/dashboard/Searchform";
export default {
  components: {
    Navbar,
    Sidebar,
    Searchform
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    }
  },
  created() {
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch("auth/logout");
        }
        throw err;
      });
    });
  }
};
</script>

<style lang="scss">
body {
  background-color: #f2f3fa;
}
</style>

