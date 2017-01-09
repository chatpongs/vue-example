<template>
    <div>
        <blogitem v-for="item in items" :post="item"></blogitem>
        <paginator :goBack="goBack" :goNext="goNext"></paginator>
    </div>
</template>

<script>
    import BlogItem from './BlogItem.vue'
    import Paginator from './Paginator.vue'
    export default {
        props: ['post'],
        components: {
            'blogitem': BlogItem,
            'paginator': Paginator
        },
        methods: {
            goBack: function () {
                console.log('go back');
            },
            goNext: function () {
                this.page++;
                this.items = [];
                this.$http({ url: 'https://www.unity3d.in.th/api/get_posts/?page=' + this.page, method: 'GET' }).then
                    (function (response) {
                        let posts = response.data.posts;
                        posts.map((post) => {
                            this.items.push(post);
                        })
                    });
            }
        },
        created() {
            this.$http({ url: 'https://www.unity3d.in.th/api/get_posts/?page=1', method: 'GET' }).then
                (function (response) {
                    let posts = response.data.posts;
                    posts.map((post) => {
                        this.items.push(post);
                    })
                });
        },
        data() {
            return {
                page: 1,
                items: []
            }
        }
    }
</script>