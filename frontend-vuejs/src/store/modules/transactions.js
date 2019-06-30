import axios from 'axios';

const state = {
  transactionsList: []
};

const mutations = {
  GET_TRANSACTIONS_LIST(state, transactions) {
    state.transactionsList = transactions;
  },
  ADD_TRANSACTIONS_LIST(state) {},
  EDIT_TTRANSACTIONS_LIST(state) {},
  REMOVE_TRANSACTIONS_LIST(state) {}
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
