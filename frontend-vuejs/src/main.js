import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css';

Vue.config.productionTip = false;

const datepickerOptions = {
  sundayFirst: false,
  dateLabelFormat: 'dddd, MMMM D, YYYY',
  days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  daysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  monthNames: [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
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
Vue.use(AirbnbStyleDatepicker, datepickerOptions);

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
