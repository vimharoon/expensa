import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import auth from './modules/auth';
import tasks from './modules/tasks';
import transactions from './modules/transactions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    tasks,
    transactions
  },
  strict: false
});
