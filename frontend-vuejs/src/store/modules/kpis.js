import axios from 'axios';

const state = {
  transactionsInfos: [],
  expensesByCategory: [],
  lastTransactions: [],
  incomeExpensesData: [],
  incomeData: []
};

const mutations = {
  GET_TRANSACTIONS_INFOS(state, infoData) {
    state.status = 'data fetched from transactions infos';
    state.transactionsInfos = infoData;
  },
  GET_EXPENSES_BY_CATEGORY(state, expensesData) {
    state.status = 'expenses by category data fetched';
    state.expensesByCategory = expensesData;
  },
  GET_INCOME_AMOUNT_MONTH(state, incomeData) {
    state.status = 'income data fetched';
    state.incomeData = incomeData;
  },
  GET_MONTHLY_INCOME_EXPENSES(state, incomeExpensesData) {
    state.status = 'income data fetched';
    state.incomeExpensesData = incomeExpensesData;
  },
  GET_LAST_10_TRANSACTIONS(state, transactionsData) {
    state.status = 'data fetched for last 10 transactions';
    state.lastTransactions = transactionsData;
  }
};

const actions = {
  async getTransactionsInfos({ commit }) {
    try {
      const response = await axios({ url: '/kpis/transactions-infos', method: 'GET' });
      const { data } = response;
      await commit('GET_TRANSACTIONS_INFOS', data);
    } catch (error) {
      console.log(error);
    }
  },
  async getExpensesByCategory({ commit }) {
    try {
      const response = await axios({ url: '/kpis/amount-by-category', method: 'GET' });
      const { data } = response;
      await commit('GET_EXPENSES_BY_CATEGORY', data);
    } catch (error) {
      console.log(error);
    }
  },
  async getIncomePerMonth({ commit }) {
    try {
      const response = await axios({ url: '/kpis/monthly-balance', method: 'GET' });
      const { data } = response;
      await commit('GET_INCOME_AMOUNT_MONTH', data);
    } catch (error) {
      console.log(error);
    }
  },
  async getMonthlyIncomeExpenses({ commit }) {
    try {
      const response = await axios({ url: '/kpis/monthly-income-expenses', method: 'GET' });
      const { data } = response;
      await commit('GET_MONTHLY_INCOME_EXPENSES', data);
    } catch (error) {
      console.log(error);
    }
  },
  async getLastTransactions({ commit }) {
    try {
      const response = await axios({ url: '/kpis/last-transactions', method: 'GET' });
      const { data } = response;
      await commit('GET_LAST_10_TRANSACTIONS', data);
    } catch (error) {
      console.log(error);
    }
  }
};

const getters = {
  getIncomesPerMonth: state => state.incomeData,
  getExpensesByCategory: state => state.expensesByCategory,
  getTransactionsInfos: state => state.transactionsInfos,
  getIncomeExpensesData: state => state.incomeExpensesData,
  getLastTransactionsList: state => state.lastTransactions
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
