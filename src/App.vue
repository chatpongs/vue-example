<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Blog from './components/Blog.vue'

export default {
    components: {
      'blog': Blog
    }
  }
</script>