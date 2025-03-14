<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useMainMenuStore } from '../stores/mainMenu';

    const mainMenuStore = useMainMenuStore();
</script>
<template>
    <nav class="w-full h-20 bg-white shadow-sm flex items-center justify-center">
        <div class="w-[95%] h-full flex items-center justify-between">
            <div>
                <img class="h-16" src="https://business-cambodia.com/static/BC.png" alt="Logo">
            </div>
            <ul class="flex items-center h-full text-gray-600">
                <li class="mx-2">
                    <RouterLink :to="{
                        name: 'home'
                    }" exact-active-class="text-red-500">ទំព័រដើម</RouterLink>
                </li>
                <li class="mx-2" v-for="item in mainMenuStore.menuItems" :key="item.slug">
                    <RouterLink :to="{
                        name: 'category',
                        params: {
                            id: item.slug
                        }
                    }" exact-active-class="text-red-500">{{ item.title }}</RouterLink>
                </li>
            </ul>
            <div class="text-gray-600">
                <Icon class="text-[30px] cursor-pointer" icon="proicons:search"/>
            </div>
        </div>
    </nav>
</template>