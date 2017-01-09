import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import Blog from './components/Blog.vue'
import './assets/styles.css'

Vue.use(VueResource);
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Blog },
    // { path: '/bar', component: Bar }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
})

