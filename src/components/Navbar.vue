<script setup lang="ts">
import { Icon } from '@iconify/vue';
import menuItems  from '../data/menu';
import { useNavbarStore } from '../stores/navbar';

    const navbarStore = useNavbarStore();
</script>
<template>
    <nav class="w-full h-20 flex items-center justify-center fixed z-[20000] top-0 transition-all" :class="navbarStore.isWhite ? 'bg-white shadow-sm' : 'bg-transparent shadow-none'">
        <div class="w-[95%] h-full flex items-center justify-between">
            <div>
                <img class="h-16" src="https://business-cambodia.com/static/BC.png" alt="Logo">
            </div>
            <ul class="flex items-center h-full" :class="navbarStore.isWhite ? 'text-gray-500' : 'text-white'">
                <li class="mx-2">
                    <RouterLink :to="{
                        name: 'home'
                    }" exact-active-class="text-red-500">ទំព័រដើម</RouterLink>
                </li>
                <li class="mx-2" v-for="item in menuItems" :key="item.title">
                    <RouterLink :to="{
                        name: 'category',
                        params: {
                            id: item.slug
                        }
                    }" exact-active-class="text-red-500">{{ item.title }}</RouterLink>
                </li>
            </ul>
            <div :class="navbarStore.isWhite ? 'text-gray-500' : 'text-white'">
                <Icon class="text-[30px] cursor-pointer" icon="proicons:search"/>
            </div>
        </div>
    </nav>
</template>