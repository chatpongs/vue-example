<template>
    <div>
        <img :src="imgUrl" class="img-thumbnail blog-image" />
        <h2>{{ title }}</h2>
        <p>{{ excerpt }}</pre>
        <p><button @click="readHandler(post.id)">Read more</button></p>
    </div>
</template>

<script>
    export default {
        props: ['post', 'readHandler'],
        computed: {
            imgUrl: function() {
                const oldHost = 'https://www.unity3d.in.th/wp-content/uploads';
                const awsHost = 'https://webcontent.bittree.io/thinunity3dwww';
                return this.attachment.replace(oldHost, awsHost);
            }
        },
        created() {
        },
        data() {
            return {
                title: this.post.title,
                excerpt: this.post.excerpt,
                attachment: this.post.attachments[0].url
            }
        },

    }
</script>