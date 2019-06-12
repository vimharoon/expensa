import axios from 'axios';

const state = {
  taskList: []
};

const mutations = {
  GET_TASK_LIST(state, tasks) {
    state.taskList = tasks;
  }
};

const actions = {
  getAllTasks({ commit }) {
    return new Promise((resolve, reject) => {
      axios({
        url: '/tasks',
        method: 'GET'
      })
        .then((resp) => {
          const { data } = resp;
          commit('GET_TASK_LIST', data);
          resolve(data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  }
};

const getters = {
  getAllTaskList: state => state.taskList
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
