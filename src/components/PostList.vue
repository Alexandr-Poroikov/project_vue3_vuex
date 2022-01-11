<template>
<ul v-if="posts.length>0">
    <h3>Список постов</h3>
    
    <post-item class="myPost"
    v-for="post in posts"
    :key="post.id" 
    :post="post" 
    @remove="$emit('remove', post)"
    /> 
</ul>
<h2 v-else style="color:red">Список постов пуст</h2>
</template>
<script>
    import PostItem from "@/components/PostItem";
    export default {
        components:{PostItem},
        props: {
            posts:{
                type: Array,
                required: true
            },
        },

    }
</script>

<style scoped>
    .myPost{
        border: 2px solid green;
    }
    h3{
        margin-bottom: 20px;;
    }
</style>
