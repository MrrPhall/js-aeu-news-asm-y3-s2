<script setup lang="ts">
    import type { ProfileType } from '../utils/type';
    import { Icon } from '@iconify/vue/dist/iconify.js';

    const props = defineProps<ProfileType>()
</script>
<template>
    <div class="rounded-2xl shadow-md flex items-center justify-center flex-col transition-all ease-out duration-200 bg-white border-[0.5px] border-gray-200">
         <el-image
            class="h-[120px] w-[120px] rounded-full border-[5px] border-blue-400 object-cover shadow-md mt-4"
            :src="props.profile"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[props.profile]"
         />
        <h1 class="text-[20px] font-bold text-blue-500 mt-2">{{ props.name }}</h1>
        <h1 class="text-gray-500 text-[13px]">{{ props.id }}</h1>
        <div class="flex items-center gap-2 mt-3 mb-5">
            <RouterLink :to="{
                name: 'home'
            }" class="h-[30px] w-[30px] rounded-full flex items-center justify-center border-[1px] border-gray-300 shadow-lg text-pink-500">
                <Icon class="text-[18px]" icon="hugeicons:instagram"/>
            </RouterLink>
            <RouterLink :to="{
                name: 'home'
            }" class="h-[30px] w-[30px] rounded-full flex items-center justify-center border-[1px] border-gray-300 shadow-lg text-blue-500">
                <Icon class="text-[18px]" icon="gravity-ui:logo-facebook"/>
            </RouterLink>
            <RouterLink :to="{
                name: 'home'
            }" class="h-[30px] w-[30px] rounded-full flex items-center justify-center border-[1px] border-gray-300 shadow-lg text-green-400">
                <Icon class="text-[18px]" icon="line-md:phone-call-loop"/>
            </RouterLink>
            <RouterLink :to="{
                name: 'home'
            }" class="h-[30px] w-[30px] rounded-full flex items-center justify-center border-[1px] border-gray-300 shadow-lg text-blue-400">
                <Icon class="text-[18px]" icon="line-md:telegram"/>
            </RouterLink>
        </div>
    </div>
</template>