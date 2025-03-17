<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import items from '../../data/item';
    import { useRoute } from 'vue-router';
    import type { ItemType } from '../../utils/type';
    import { useNavbarStore } from '../../stores/navbar';
    const router = useRoute();
    const selectItem = computed<ItemType | null>(() => {
        return items.value.find(item => item.id === Number(router.params.id)) || null;
    });

    const loading = ref<boolean>(true);

    const handleLoading = () =>{
        setTimeout(() =>{
            loading.value = false;
        }, 3000);
    }

    const navbarStore = useNavbarStore();
    onMounted(()=>{
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
        handleLoading();
    });

</script>

<template>
     <div class="h-screen w-full" v-loading="loading">
        <div class="h-20"></div>
       <div class="mt-2" v-html="selectItem?.detail" v-show="!loading"></div>
     </div>
</template>