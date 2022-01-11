<template>
    <form class="myForm" @submit.prevent>
        <div>Создание {{myMain}}</div>
        <my-input
        class = "myForm__title"
         type="text" 
         placeholder="Имя" 
         v-model="post.title" />
        <my-input  
        type="text" 
        placeholder="Фамилия"
        v-model="post.body" />
        <div>
            <my-button type="button"
            @click="createPost">Создать</my-button>
        </div>
    </form>
    
</template>

<script>
    export default {
        props:{
            myMain: String,
            posts: {
                type:Array,
                required: true
            }
        },
        data(){
            return{
                post: {
                    title: '',
                    body: '',
                },           
            }
        },
        methods: {
            createPost(){
                if(this.post.title != ''){
                    this.post.myid = Date.now();
                    this.$emit('create', this.post);
                    this.post= {  
                        title: '',
                        body: ''
                    }
                }else{
                    let titleInput = document.querySelector('.myForm__title');
                    titleInput.style.borderColor = 'red'
                }
            }
        }
        
    }
</script>


<style scoped>
    .myForm{
        display: flex;
        flex-direction: column;
    }

</style>