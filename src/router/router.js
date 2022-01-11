import Main from '@/pages/Main';
import {createRouter, createWebHistory} from 'vue-router';
import PostsPage from '@/pages/PostsPage';
import About from '@/pages/About';
import ThisPost from '@/pages/ThisPost';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Posts',
        component: PostsPage
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Posts/:id',
        component: ThisPost
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;