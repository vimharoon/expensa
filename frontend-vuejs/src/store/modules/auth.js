import axios from 'axios';

const state = {
  token: localStorage.getItem('user-token') || '',
  user: '' || JSON.parse(localStorage.getItem('user-data'))
};

const mutations = {
  AUTH_SUCCESS(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  LOGOUT(state) {
    state.status = '';
    state.token = '';
  }
};

const actions = {
  login({ commit }, userAuth) {
    return new Promise((resolve, reject) => {
      axios({
        url: '/api/v1/auth/authenticate',
        data: userAuth,
        method: 'POST'
      })
        .then((resp) => {
          console.log(resp);
          const { token, user } = resp.data;
          localStorage.setItem('user-token', token);
          localStorage.setItem('user-data', JSON.stringify(user));
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          commit('AUTH_SUCCESS', { token, user });
          resolve(resp);
        })
        .catch((err) => {
          localStorage.removeItem('user-token');
          reject(err);
        });
    });
  },
  register({ commit }, userAuth) {
    return new Promise((resolve, reject) => {
      axios({
        url: '/api/v1/auth/register',
        data: userAuth,
        method: 'POST'
      })
        .then((resp) => {
          const { token, user } = resp.data;
          localStorage.setItem('user-token', token);
          localStorage.setItem('user-data', JSON.stringify(user));
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          commit('auth_success', { token, user });
          resolve(resp);
        })
        .catch((err) => {
          localStorage.removeItem('user-token');
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('LOGOUT');
      localStorage.clear();
      delete axios.defaults.headers.common.Authorization;
      resolve();
    });
  }
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
