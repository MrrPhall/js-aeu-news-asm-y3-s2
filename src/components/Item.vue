<script setup lang="ts">
    import type { ItemType } from '../utils/type';
    import { viewFormater } from '../utils/view';

    const props = defineProps<ItemType>();

</script>

<template>
    <RouterLink :to="{
        name: 'detail',
        params: {
            id: props.id,
        }
    }" class="bg-white shadow-md rounded-2xl">
        <div class="w-full md:h-[180px] group overflow-hidden rounded-lg">
            <img class="h-full w-full transition-all ease-in-out duration-300 object-cover group-hover:scale-[115%]" :src="props.thumbnail" alt="Thumbnail">
        </div>
        <button class="bg-gray-200 px-3 rounded-sm text-[12px] text-gray-600 mt-4 mx-3">#{{ props.category }}</button>
        <h2 class="line-clamp-2 font-bold text-gray-600 mt-4 mx-3 text-[18px]">{{ props.title }}</h2>
        <div class="flex items-center my-4 mx-3 gap-2">
            <img class="h-[50px] w-[50px] rounded-full object-cover" :src="props.author.profile" alt="Profile">
            <div>
                <h3 class="text-gray-600 font-bold">{{ props.author.name }}</h3>
                <h4 class="text-gray-400 text-[12px]">{{ props.date }}</h4>
                <h4 class="text-gray-400 text-[12px]">{{ viewFormater(props.view) }} View<span v-if="props.view > 1">s</span></h4>
            </div>
        </div>
    </RouterLink>
</template>