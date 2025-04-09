<script setup lang="ts">

import router from '../routers/router';
import type { CarouselType } from '../utils/type';

    const route = router;
    const props = defineProps<CarouselType>();

    const handleNavigation = (e: number) =>{
        route.push({
            name: 'detail',
            params: {
                id: e,
            }
        });
    }
    
</script>
<template>
    <div class="h-screen w-full relative">
        <img class="w-full h-full object-cover" :src="props.thumbnail" alt="Carousel">
        <div class="bg-black h-full w-full absolute top-0 left-0 z-10 opacity-50"></div>
        <div class="h-full w-full absolute top-0 left-0 flex justify-between z-20">
            <div class="w-[80%] md:w-[50%] h-full flex justify-center flex-col ml-[2.5%]">
                <h1 class="text-white sm:text-[20px] md:text-[50px] font-bold">{{ props.title }}</h1>
                <div class="flex items-center gap-2 text-white text-[12px] md:text-[15px]">
                    <span>{{ props.author }}</span>
                    <span>•</span>
                    <span>{{ props.category }}</span>
                    <span>•</span>
                    <span>{{ props.date }}</span>
                </div>
                <div class="flex items-center gap-2 mt-4">
                    <button @click="handleNavigation(props.id)" class="h-[50px] bg-white text-gray-600 px-10 border-[1px] border-white transition-all duration-700 hover:bg-transparent hover:text-white cursor-pointer">បន្តការអាន</button>
                    <button class="h-[50px] bg-gray-400 text-gray-600 px-10 border-[1px] border-white transition-all duration-700 hover:bg-red-500 hover:text-white">អំពីអ្នកនិពន្ធ</button>
                </div>
            </div>
        </div>
    </div>
</template>