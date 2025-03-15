import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Main from "../layouts/main.vue";
import Home from "../pages/home/index.vue";
import Category from "../pages/category/index.vue";
import Detail from "../pages/detail/index.vue";
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
                path: '/detail/:id/:title',
                component: Detail,
                name: 'detail',
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
