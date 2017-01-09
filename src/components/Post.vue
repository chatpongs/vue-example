<template>
    <div>
        {{$route.params.post.title}}
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$route.params);
        },
    }
</script>