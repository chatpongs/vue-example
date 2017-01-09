<template>
    <div>
        {{$route.params.post.title}}
        <a class="btn btn-primary" @click="$router.go(-1)">back</a>
    </div>
</template>

<script>
    export default {
    }
</script>