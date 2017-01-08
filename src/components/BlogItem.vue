<template>
    <div>
        <img src="../assets/logo.png"/>
        <h2>{{ title }}</h2>
        <p>{{ excerpt }}</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('login')
    },
    data() {
        return {
            title: 'Hello World',
            excerpt: 'This is the information'
        }
    }
}
</script>