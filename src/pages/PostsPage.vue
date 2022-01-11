<template>
    <div class="container">
<!-- блок с постами -->
        <h1>Страница с постами (кол-во: {{searchAndSelect.length}}) </h1>
        <!-- <my-button @click="setDialogVisible">Создать пользователя</my-button> -->
        
        <div class="wrap">

            <div class="selectAndSearch" >
                <my-search 
                :model-value = "searchQuery"
                @update:model-value = "setSearchQuery" />
                <my-select
                v-focus
                :model-value = "selectedSort"
                @update:model-value = "setSelectedSort"
                :options="options"
                />
            </div>

            <my-dialog>
                <post-form myMain="Человека"
                @create="createPost" 
                :posts="posts"/>
            </my-dialog>
        
            <post-list v-if="ispostsLoading"
            :posts="searchAndSelect"
            @remove="removePost" />



            <div class="loading" v-else>Идет загрузка ...</div>
            
            <div class="observer-block" ref="observer"></div>
        </div>

    </div>
</template>

<script>
    import PostForm from "@/components/PostForm";
    import PostList from "@/components/PostList";

    import {mapGetters, mapState, mapActions, mapMutations} from "vuex"
    export default{
        components:{
            PostForm, PostList
        },
        methods: {
            ...mapActions(['fetchPosts','loadMorePost']),
            ...mapMutations(['createPost', 'removePost', 'showDialog', 'setSearchQuery','setSelectedSort','setDialogVisible']),
        },
        mounted(){
            this.fetchPosts();
            
            const options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            const callback = (entries, observer) => {
                if(entries[0].isIntersecting){
                    console.log('ПЕРЕСЕЧЕН')
                    this.loadMorePost()
                }
                
            };
            const observer = new IntersectionObserver(callback, options);
                observer.observe(this.$refs.observer)
        },
        
        computed:{
            ...mapGetters(['selectedPosts', 'searchAndSelect']),
            ...mapState({
                posts: state => state.posts.posts,
                dialogVisible: state => state.posts.dialogVisible,
                ispostsLoading: state => state.posts.ispostsLoading,
                selectedSort: state => state.posts.selectedSort,
                searchQuery: state => state.posts.searchQuery,
                page: state => state.posts.page,
                limit: state => state.posts.limit,
                options: state=> state.posts.options
            })
        },

    }
</script>

<style scooped>
    .container{
        text-align: center;
        min-height: 100vh;
    }
    .wrap{
        position:relative;
        padding-bottom: 30px;
    }   
 /* ----counter---- */
    .count{
        cursor: pointer;
    }
    .close{
        padding:3px 6px;
        border: 1px solid black;
        background: #ffe5e5;
        cursor: pointer;
    }
    .likes{
        display: inline-block;
        padding: 6px;
        margin-left: auto;
        border: double;
        border-color:green
    }
    .selectAndSearch{
        display: flex;
        justify-content: flex-end;
    }
/* ----posts---- */
    .loading{
        text-shadow: 1px 1px 1px  green;
        letter-spacing: 3px;
        font-size: 18px;
    }
    .observer-block{
        height: 20px;
        opacity: 0;

    }
</style>
