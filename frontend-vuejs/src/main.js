import Vue from 'vue';
import axios from 'axios';
import VueApexCharts from 'vue-apexcharts';
import VueAWN from 'vue-awesome-notifications';
import VeeValidate, { Validator } from 'vee-validate';
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
import fr from 'vee-validate/dist/locale/fr';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vue-awesome-notifications/dist/styles/style.css';
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Vue.prototype.$http = axios;
const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const datepickerOptions = {
  sundayFirst: false,
  dateLabelFormat: 'dddd, MMMM D, YYYY',
  days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  daysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  colors: {
    selected: '#2949ef',
    inRange: '#26c6da',
    selectedText: '#fff',
    text: '#565a5c',
    inRangeBorder: '#2949ef',
    disabled: '#fff',
    hoveredInRange: '#6980f4'
  },
  texts: {
    apply: 'Valider',
    cancel: 'Annuler'
  }
};

Vue.use(VueApexCharts);
Vue.use(VeeValidate, { classes: true });
Validator.localize('fr', fr);
Vue.component('apexchart', VueApexCharts);
Vue.use(AirbnbStyleDatepicker, datepickerOptions);
Vue.use(VueAWN, { position: 'top-right', maxNotifications: 4 });

Vue.filter('toCurrency', (value) => {
  if (typeof value !== 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});

VeeValidate.Validator.extend('verify_password', {
  getMessage: field => 'Le mot de passe doit contenir au moins: 1 lettre majuscule, 1 lettre minuscule et 1 chiffre.',
  validate: (value) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})');
    return strongRegex.test(value);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
