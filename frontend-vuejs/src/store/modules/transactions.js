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
  getAllTransactions({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: '/transactions',
        method: 'GET'
      })
        .then((resp) => {
          const { data } = resp;
          commit('GET_TRANSACTIONS_LIST', data);
          resolve(data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  }
};

const getters = {
  getAllTransactionsFiltred: state => (currentSortDir, currentSort, currentPage, pageSize) => {
    console.log(currentSortDir, currentSort);
    const newTransactionsList = state.transactionsList
      .sort((a, b) => {
        let modifier = 1;
        if (currentSortDir === 'desc') modifier = -1;
        if (a[currentSort] < b[currentSort]) return -1 * modifier;
        if (a[currentSort] > b[currentSort]) return 1 * modifier;
        return 0;
      })
      .filter((row, index) => {
        const start = (currentPage - 1) * pageSize;
        const end = currentPage * pageSize;
        if (index >= start && index < end) return true;
      });
    return newTransactionsList;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
