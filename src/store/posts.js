import axios from 'axios';
export default{
    state(){
        return{
            posts: [],
            dialogVisible: false,
            ispostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            options: [
                {value: 'title', name: 'по Имени'},
                {value: 'body', name: 'по Фамилии'},
            ],
            page: 1,
            limit: 10,
        }
    },
    getters:{
        selectedPosts(state){
            return [...state.posts].sort((post1,post2)=>{
                if(post1[state.selectedSort] !='' && post2[state.selectedSort]!=''){
                    return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
                }     
            })
        },
        searchAndSelect(state, getters){
            return getters.selectedPosts.filter(post=>{
                return post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            })
        }
    },
    mutations:{
        posts(state, posts){
            state.posts = posts
        },
        setDialogVisible(state, bool){
            state.dialogVisible = bool
        },
        ispostsLoading(state, bool){
            state.ispostsLoading = bool
        },
        setSelectedSort(state, selectedSort){
             state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery){
             state.searchQuery = searchQuery
        },
        page(state, page){
             state.page = page
        },
        limit(state, limit){
            state.limit = limit
        },

        createPost(state, post){
            state.posts.unshift(post);
            state.dialogVisible = false;

        },
        removePost(state,post){
            state.posts = state.posts.filter(us=> us.id !== post.id)
        },
        showDialog(state){
            state.dialogVisible = true;
        },
    },
    actions:{
        async fetchPosts({state,commit}){
            try{
                commit('ispostsLoading', false);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('posts', response.data)
            }catch(e){
                console.log(e)
            }finally{
                commit('ispostsLoading', true)
            }
        },
        async loadMorePost({state,commit}){
            try{
                commit('page', state.page+1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('posts', [...state.posts, ...response.data])
            }catch(e){
                console.log(e)
            }
        },
    }
  }