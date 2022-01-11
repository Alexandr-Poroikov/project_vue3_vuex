import {createStore} from 'vuex';
import posts from "@/store/posts"

export default createStore({
    state:{
        isAuth: false
    },
    modules:{
        posts
    }
});

