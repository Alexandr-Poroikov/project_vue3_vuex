<template>
    <li class="post" >
        <div class="post">
            <div if="post.id">{{post.id}}</div>
            <div class="post__name">
                <div v-if="post.title.length>0"><strong>Title : </strong> {{post.title}}</div>
                <div v-if="post.body.length>0"><strong>Text : </strong> {{post.body}}</div>
            </div>
        </div>
        <div class="post__button">
            <my-button :post="post"
            @click="$router.push(`/Posts/${post.id}`)">Открыть</my-button>
            <my-button 
            @click="$emit('remove', post)">Удаление</my-button>
        </div>
    </li>
</template>

<script>
    export default {

        props: {
            post:{
                type: Object,
                required: true
            },
        },

    }
</script>

<style scoped>
     .post {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px;
        background-color: #fff6ea;
    }
    .post__button{
        display: flex;
    }
</style>