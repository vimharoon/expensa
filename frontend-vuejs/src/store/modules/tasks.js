import axios from 'axios';

const state = {
  taskList: []
};

const mutations = {
  GET_TASK_LIST(state, tasks) {
    state.status = 'task received';
    state.taskList = tasks;
  },
  ADD_TASK(state) {
    state.status = 'task added';
  },
  EDIT_TASK(state) {
    state.status = 'task edited';
  },
  REMOVE_TASK(state) {
    state.status = 'task removed';
  },
  CHANGE_TASK_STATUS(state) {
    state.status = 'task status changed';
  }
};

const actions = {
  async getAllTasks({ commit }) {
    try {
      const response = await axios({ url: '/tasks', method: 'GET' });
      const { data } = response;
      await commit('GET_TASK_LIST', data);
    } catch (error) {
      console.log(error.response);
    }
  },
  async createNewTask({ commit }, newTask) {
    try {
      const response = await axios({ url: '/tasks', data: newTask, method: 'POST' });
      const { data } = response;
      await commit('ADD_TASK');
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async updateTask({ commit }, task) {
    try {
      const response = await axios({ url: `/tasks/${task.task_id}`, data: task, method: 'PUT' });
      const { data } = response;
      await commit('EDIT_TASK');
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async updateTaskStatus({ commit }, task) {
    try {
      const response = await axios({ url: `/tasks/${task.task_id}`, data: task, method: 'PATCH' });
      const { data } = response;
      await commit('CHANGE_TASK_STATUS');
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
  async deleteTask({ commit }, taskId) {
    try {
      const response = await axios({ url: `/tasks/${taskId}`, method: 'DELETE' });
      const { data } = response;
      await commit('REMOVE_TASK');
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
