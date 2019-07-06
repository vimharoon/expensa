import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import kpis from './modules/kpis';
import auth from './modules/auth';
import tasks from './modules/tasks';
import profile from './modules/profile';
import transactions from './modules/transactions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    kpis,
    auth,
    tasks,
    profile,
    transactions
  },
  strict: debug
});
