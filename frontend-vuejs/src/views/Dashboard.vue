<template>
  <div id="dashbord-page" class="page-content fade-in-up">
    <div class="page-heading">
      <div class="page-breadcrumb">
        <h1 class="page-title">L'état de votre portefeuille</h1>
      </div>
      <Datepicker></Datepicker>
    </div>
    <div>
      <!-- Information cards -->
      <Infocards></Infocards>
      <!-- Expense category chart -->
      <ExpensesPieChart></ExpensesPieChart>
      <!-- solde and income/expense -->
      <div class="row">
        <!--  Income/month chart -->
        <SoldeLineChart></SoldeLineChart>
        <!-- Income / expenses chart -->
        <IncomeBarChart></IncomeBarChart>
      </div>
    </div>
    <!-- Recent Transactions -->
    <RecentTransactions></RecentTransactions>
  </div>
</template>

<script>
import Infocards from "@/components/dashboard/Infocards";
import Datepicker from "@/components/dashboard/Datepicker";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import IncomeBarChart from "@/components/dashboard/charts/IncomeBarChart";
import SoldeLineChart from "@/components/dashboard/charts/SoldeLineChart";
import ExpensesPieChart from "@/components/dashboard/charts/ExpensesPieChart";
export default {
  components: {
    Infocards,
    Datepicker,
    RecentTransactions,
    IncomeBarChart,
    SoldeLineChart,
    ExpensesPieChart
  }
};
</script>
