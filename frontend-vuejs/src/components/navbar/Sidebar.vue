<template>
  <div class="page-sidebar custom-scroll" id="sidebar">
    <div class="sidebar-header">
      <a class="sidebar-brand" href="/">Expensa</a>
      <a class="sidebar-brand-mini" href="/">Ex</a>
      <span class="sidebar-points">
        <span class="badge badge-success badge-point mr-2"></span>
        <span class="badge badge-danger badge-point mr-2"></span>
        <span class="badge badge-warning badge-point"></span>
      </span>
    </div>
    <ul class="sidebar-menu">
      <li class="heading">
        <span>DASHBOARDS</span>
      </li>
      <li>
        <router-link to="/">
          <i class="sidebar-item-icon la la-dashboard"></i>
          <span class="nav-label">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/transactions">
          <i class="sidebar-item-icon la la-credit-card"></i>
          <span class="nav-label">Transactions</span>
        </router-link>
      </li>
      <li>
        <router-link to="/tasks">
          <i class="sidebar-item-icon la la-list-alt"></i>
          <span class="nav-label">Tâches</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.la.la-dashboard,
.la.la-credit-card,
.la.la-list-alt {
  font-size: 2rem;
}
</style>
