<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
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
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";
import Searchform from "@/components/dashboard/Searchform";
export default {
  components: {
    Navbar,
    Sidebar,
    Searchform
  }
};
</script>
