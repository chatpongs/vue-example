<template>
    <div>
        <ul>
            <li class="button" @click="goBack">Prev</li>
            <li class="button" @click="goNext">Next</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['goNext', 'goBack']
    }
</script>