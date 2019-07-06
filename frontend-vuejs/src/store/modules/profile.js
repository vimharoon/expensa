import axios from 'axios';

const state = {};

const mutations = {
  DELETE_USER(state) {
    state.status = 'user deleted';
  }
};

const actions = {
  async deleteUser({ commit }, userId) {
    try {
      const response = await axios({ url: `/users/${userId}`, method: 'DELETE' });
      const { data } = response;
      await commit('DELETE_USER');
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
