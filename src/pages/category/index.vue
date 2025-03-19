<script setup lang="ts">
    import { onBeforeRouteUpdate, useRoute, type RouteLocationNormalized } from 'vue-router';
    import { useNavbarStore } from '../../stores/navbar';
    import { computed, onMounted, ref } from 'vue';
    import type { ItemType, MainMenuItemType } from '../../utils/type';
    import items from '../../data/item';
    import Item from '../../components/Item.vue';
import menuItems from '../../data/menu';

    const loading = ref<boolean>(true);
    const handleLoading = () =>{
        loading.value = true;
        setTimeout(()=>{
            loading.value = false;
        }, 2000);
    }
    const router = useRoute();
    const navbarStore = useNavbarStore();
    const categorySlug = ref<string>('');
    const itemFilterByCategory = computed<ItemType[]>(() => {
        return items.value
               ? items.value.filter(item => item.category_slug === categorySlug.value)
               : []
    });

    const category = computed<MainMenuItemType | null>(() =>{
        return menuItems.value.find(item => item.slug === categorySlug.value) || null;
    })

    onBeforeRouteUpdate((to: RouteLocationNormalized, _from: RouteLocationNormalized) => {
        categorySlug.value = to.params.id.toString();
        handleLoading();
    });
   
    onMounted(()=>{
        categorySlug.value = router.params.id.toString();
        navbarStore.handleNavbar(false);
        navbarStore.isHome = true;
        handleLoading();
    });

</script>

<template>
    <div>
        <div class="relative z-[100]">
            <img :src="category?.thumbnail" class="h-[350px] w-full object-cover" alt="Thumbnail">
            <div class="h-full w-full absolute top-0 bg-black opacity-50"></div>
            <div class="h-full w-full absolute top-0 flex justify-start items-center pl-10 text-white text-[25px]">{{ category?.description }}</div>

        </div>
        <div class="h-[200px]" v-if="loading" v-loading="loading"></div>
        <div v-if="!loading" class="w-[95%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <Item
                v-for="item in itemFilterByCategory" :key="item.id"
                :id="item.id"
                :title="item.title"
                :category="item.category"
                :author="item.author"
                :date="item.date"
                :view="item.view"
                :thumbnail="item.thumbnail"
            />
        </div>
        <div v-if="itemFilterByCategory.length === 0" v-show="!loading" class="h-screen w-full flex items-center justify-center text-gray-500 absolute top-0">
            មិនមានទិន្នន័យ
        </div>
    </div>
</template>