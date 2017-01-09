<template>
    <div>
        <ul>
            <li class="button" @click="goBack" v-show="page > 1">Prev</li>
            <li class="button" @click="goNext" v-show="page < pages">Next</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['goNext', 'goBack', 'page', 'pages']
    }
</script>