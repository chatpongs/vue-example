<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <button type="button" class="btn btn-default" aria-label="Left Align">
      <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
    </button>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <blogitem v-for="item in items" :post="item"></blogitem>
    <paginator :goBack="goBack" :goNext="goNext"></paginator>
  </div>
</template>

<script>
import BlogItem from './components/BlogItem.vue'
import Paginator from './components/Paginator.vue'

export default {
    name: 'app',
    components: {
      'blogitem': BlogItem,
      'paginator': Paginator
    },
    methods: {
      goBack: function(){
        console.log('go back');
      },
      goNext: function(){
        this.page++;
        this.items = [];
        this.$http({url: 'https://www.unity3d.in.th/api/get_posts/?page=' + this.page, method: 'GET'}).then
        (function (response) {
          let posts = response.data.posts;
          posts.map((post)=>{
            this.items.push(post);
          })
        });
      }
    },
    created() {
      this.$http({url: 'https://www.unity3d.in.th/api/get_posts/?page=1', method: 'GET'}).then
      (function (response) {
        let posts = response.data.posts;
        posts.map((post)=>{
          this.items.push(post);
        })
      });
    },
    data() {
      return {
        msg: 'Welcome to Chatpong\'s Vue.js App',
        page: 1,
        items: []
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>