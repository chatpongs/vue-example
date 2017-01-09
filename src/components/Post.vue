<template>
    <div>
        This is post page {{$route.params}}
        <!--<img :src="imgUrl" class="img-thumbnail blog-image" />
        <h2>{{ title }}</h2>
        <p>{{ excerpt }}</pre>
        <button @click="read">Read more</button>-->
    </div>
</template>

<script>
    export default {
        props: ['post'],
        // computed: {
        //     imgUrl: function() {
        //         const oldHost = 'https://www.unity3d.in.th/wp-content/uploads';
        //         const awsHost = 'https://webcontent.bittree.io/thinunity3dwww';
        //         return this.attachment.replace(oldHost, awsHost);
        //     }
        // },
        // methods: {
        //     read: function() {
        //         console.log('read more');
        //     }
        // },
        created() {
            console.log(this.$route.params);
        },
        // data() {
        //     return {
        //         title: this.post.title,
        //         excerpt: this.post.excerpt,
        //         attachment: this.post.attachments[0].url
        //     }
        // },

    }
</script>