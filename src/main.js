import Vue from 'vue'
import VueResource from 'vue-resource'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import './assets/styles.css'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})