<template>
    <div class="id">id = {{$route.params.id}}</div>
    <h1 class="title">{{ post.title }}</h1>
    <p class="text">{{ post.body }}</p>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                post: '',
            }
        },
        methods:{
            async fetchRequest(){
                try{
                    if(this.$route.params.id){
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                    this.post = response.data
                    }
                }catch(e){
                    alert('ошибка')
                }
            }
        },
        mounted(){
            this.fetchRequest()
        }
    }
</script>

<style scooped>
    .id{
        font-weight: 700;
        color: rgb(118, 63, 54);
        font-size: 18px;
    }
    .title{
        text-align: center;
        margin-bottom: 20px;
    }
    .text{
        font-size: 20px;
    }


</style>