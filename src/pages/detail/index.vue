<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import items from '../../data/item';
    import { useRoute } from 'vue-router';
    import type { ItemType } from '../../utils/type';
    import { useNavbarStore } from '../../stores/navbar';
    import { viewFormater } from '../../utils/view';
    const router = useRoute();
    const selectItem = computed<ItemType | null>(() => {
        return items.value.find(item => item.id === Number(router.params.id)) || null;
    });

    const loading = ref<boolean>(true);

    const handleLoading = () =>{
        setTimeout(() =>{
            loading.value = false;
        }, 2000);
    }

    const navbarStore = useNavbarStore();
    onMounted(()=>{
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
        handleLoading();
    });

</script>

<template>
     <div class="h-screen w-[95%] mx-auto z-[-1]" v-loading="loading">
        <div class="h-20"></div>
        <div class="w-full flex items-start justify-between mt-2" v-show="!loading">
            <div class="w-full sm:w-full md:w-[60%]">
                <button class="text-red-500 bg-gray-200 px-4 py-1 rounded-sm border">{{ selectItem?.category }}</button>
                <h1 class="text-[35px] font-bold text-gray-700 mt-2">{{ selectItem?.title }}</h1>
                <div class="flex items-center gap-2 text-gray-500 text-[12px] md:text-[15px]">
                    <span>{{ selectItem?.author.name }}</span>
                    <span>•</span>
                    <span>{{ selectItem?.date }}</span>
                    <span>•</span>
                    <span>{{ viewFormater(Number(selectItem?.view)) }} View{{ Number(selectItem?.view) > 1 ? 's': null }} </span>
                </div>
                <img :src="selectItem?.thumbnail" alt="Thumbnail" class="w-full mt-2">
                <div v-html="selectItem?.detail"></div>
            </div>
        </div>
     </div>
</template>