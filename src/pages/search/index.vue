<script setup lang="ts">
    import { onBeforeRouteUpdate, useRoute, type RouteLocationNormalized } from 'vue-router';
    import { useNavbarStore } from '../../stores/navbar';
    import { computed, onMounted, ref } from 'vue';
    import type { ItemType } from '../../utils/type';
    import items from '../../data/item';
    import Item from '../../components/Item.vue';

    const route = useRoute();
    const navbarStore = useNavbarStore();

    const search = ref<any>('');
    const newsItems = computed<ItemType[] | []>(() => {
        return items.value
               ? items.value.filter(item => item.title.toLowerCase().includes(search.value.toLocaleLowerCase())) 
               : [];
    });
    
    const loading = ref(true);
    const handleLoading = () =>{
        loading.value = true;
        setTimeout(()=>{
            loading.value = false;
        }, 2000);
    }

    onMounted(()=>{
        search.value = route.query.title;
        handleLoading();
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
    });

    onBeforeRouteUpdate((to: RouteLocationNormalized, _from: RouteLocationNormalized) =>{
        search.value = to.query.title;
        handleLoading();
    });
</script>
<template>
    <div v-loading="loading" class="min-h-screen z-[-1]">
        <div class="h-20" v-if="newsItems.length > 0">

        </div>

        <div v-if="!loading" class="w-[95%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <Item
                v-for="item in newsItems" :key="item.id"
                :id="item.id"
                :title="item.title"
                :category="item.category"
                :author="item.author"
                :date="item.date"
                :view="item.view"
                :thumbnail="item.thumbnail"
            />
        </div>
        <div v-if="newsItems.length === 0" v-show="!loading" class="h-screen w-full flex items-center justify-center text-gray-500 absolute top-0">
            មិនមានទិន្នន័យ
        </div>
    </div>
</template>