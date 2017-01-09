<template>
    <div>
        <blogitem v-for="(item, index) in items" :post="item" :readHandler="showPost" :index="index"></blogitem>
        <paginator :goBack="goBack" :goNext="goNext" :page="page" :pages="pages"></paginator>
    </div>
</template>

<script>
    import BlogItem from './BlogItem.vue'
    import Paginator from './Paginator.vue'
    export default {
        components: {
            'blogitem': BlogItem,
            'paginator': Paginator
        },
        methods: {
            goBack: function () {
                this.page--;
                this.items = [];
                this.getPosts();
            },
            goNext: function () {
                this.page++;
                this.items = [];
                this.getPosts();
            },
            showPost: function(index) {
                this.$router.push({name: 'post', params: {post: this.items[index]}});
            },
            getPosts: function(){
                this.$http({ 
                    url: 'https://www.unity3d.in.th/api/get_posts/?page=' + this.page, 
                    method: 'GET' 
                }).then(function (response) {
                    let posts = response.data.posts;
                    posts.map((post) => {
                        this.items.push(post);
                    })
                    this.pages = response.data.pages;
                });
                this.$parent.posts = this.items;
            },
        },
        created() {
            this.items = this.$parent.posts;
            
            if(this.items == 0){
                this.getPosts();
            }
        },
        data() {
            return {
                page: 1,
                pages: 0,
                items: []
            }
        }
    }
</script>