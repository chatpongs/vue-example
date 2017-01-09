<template>
  <div>
    <router-view :setdata="setPosts"></router-view>
  </div>
</template>

<script>
import Blog from './components/Blog.vue'

export default {
    components: {
      'blog': Blog
    },
    methods: {
      setPosts: function(posts){
        this.posts = posts;
      }
    },
    data() {
      return {
        posts: []
      }
    }
  }
</script>