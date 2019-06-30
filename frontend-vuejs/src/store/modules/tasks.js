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
      console.log(error);
    }
  },
  async createNewTask({ commit }, newTask) {
    try {
      const response = await axios({ url: '/tasks', data: newTask, method: 'POST' });
      const { data } = response;
      await commit('ADD_TASK');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTask({ commit }, task) {
    try {
      const response = await axios({
        url: `/tasks/${task.id}`,
        data: task.taskData,
        method: 'PUT'
      });
      const { data } = response;
      await commit('EDIT_TASK');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateTaskStatus({ commit }, task) {
    try {
      const response = await axios({
        url: `/tasks/${task.task_id}`,
        data: { taskDone: task.task_done },
        method: 'PATCH'
      });
      const { data } = response;
      await commit('CHANGE_TASK_STATUS');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTask({ commit }, taskId) {
    try {
      const response = await axios({ url: `/tasks/${taskId}`, method: 'DELETE' });
      const { data } = response;
      await commit('REMOVE_TASK');
      return data;
    } catch (error) {
      console.log(error);
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
