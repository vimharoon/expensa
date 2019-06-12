<template>
  <div id="dashbord-page" class="page-content fade-in-up">
    <div class="page-heading">
      <div class="page-breadcrumb">
        <h1 class="page-title">L'état de votre portefeuille</h1>
      </div>
      <date-picker></date-picker>
    </div>
    <div>
      <!-- Information cards -->
      <info-cards></info-cards>
      <!-- Expense category chart -->
      <expenses-pie-chart></expenses-pie-chart>
      <!-- solde and income/expense -->
      <div class="row">
        <!--  Income/month chart -->
        <solde-line-chart></solde-line-chart>
        <!-- Income / expenses chart -->
        <income-bar-chart></income-bar-chart>
      </div>
    </div>
    <!-- Recent Transactions -->
    <recent-transactions></recent-transactions>
  </div>
</template>

<script>
import InfoCards from "@/components/dashboard/InfoCards";
import DatePicker from "@/components/dashboard/DatePicker";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import IncomeBarChart from "@/components/dashboard/charts/IncomeBarChart";
import SoldeLineChart from "@/components/dashboard/charts/SoldeLineChart";
import ExpensesPieChart from "@/components/dashboard/charts/ExpensesPieChart";
export default {
  components: {
    InfoCards,
    DatePicker,
    RecentTransactions,
    IncomeBarChart,
    SoldeLineChart,
    ExpensesPieChart
  }
};
</script>
