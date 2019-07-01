import axios from 'axios';

const state = {
  transactionsList: [],
  transactionCategoryList: []
};

const mutations = {
  GET_TRANSACTIONS_LIST(state, transactions) {
    state.status = 'transactions received';
    state.transactionsList = transactions;
  },
  GET_TRANSACTIONS_CATEGORY_LIST(state, transactionCategory) {
    state.status = 'transactions category received';
    state.transactionCategoryList = transactionCategory;
  },
  ADD_TRANSACTION(state) {
    state.status = 'transactions created';
  },
  EDIT_TTRANSACTION(state) {
    state.status = 'transactions edited';
  },
  REMOVE_TRANSACTION(state) {
    state.status = 'transactions deleted';
  }
};

const actions = {
  async getAllTransactions({ commit }) {
    try {
      const response = await axios({ url: '/transactions', method: 'GET' });
      const { data } = response;
      await commit('GET_TRANSACTIONS_LIST', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getAllTransactionsCategory({ commit }) {
    try {
      const response = await axios({ url: '/transactions/category', method: 'GET' });
      const { data } = response;
      await commit('GET_TRANSACTIONS_CATEGORY_LIST', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async createNewTransaction({ commit }, transaction) {
    try {
      const response = await axios({ url: '/transactions', data: transaction, method: 'POST' });
      const { data } = response;
      await commit('ADD_TRANSACTION');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async editTransaction({ commit }, transaction) {
    try {
      const response = await axios({
        url: `/transactions/${transaction.transaction_id}`,
        data: transaction,
        method: 'PUT'
      });
      const { data } = response;
      await commit('EDIT_TTRANSACTION');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTransactions({ commit }, transactionId) {
    try {
      const response = await axios({
        url: `/transactions/${transactionId}`,
        method: 'DELETE'
      });
      const { data } = response;
      await commit('REMOVE_TRANSACTION');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const getters = {
  getAllTransactions: state => state.transactionsList
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
