import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"; // type NavigationGuardNext, type RouteLocationNormalized,
import Main from "../layouts/main.vue";
import Home from "../pages/home/index.vue";
import Category from "../pages/category/index.vue";
import Detail from "../pages/detail/index.vue";
import Search from "../pages/search/index.vue";
import About from "../pages/about/index.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                component: Home,
                name: 'home',
            },
            {
                path: '/category/:id',
                component: Category,
                name: 'category',
            },
            {
                path: '/detail/:id',
                component: Detail,
                name: 'detail',
            },
            {
                path: '/search',
                component: Search,
                name: 'search',
            },
            {
                path: '/about',
                component: About,
                name: 'about',
            },
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return {
            top: 0,
            behavior: 'smooth',
        };
    }
});

// router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext)=>{
    
// });

export default router;
