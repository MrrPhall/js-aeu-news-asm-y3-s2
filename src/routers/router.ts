import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Main from "../layouts/main.vue";
import Home from "../pages/home/index.vue";
import Category from "../pages/category/index.vue";
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
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
