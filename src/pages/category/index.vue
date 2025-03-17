<script setup lang="ts">
    import { useRoute } from 'vue-router';
import { useNavbarStore } from '../../stores/navbar';
import { onMounted, ref } from 'vue';

    const loading = ref<boolean>(true);
    const handleLoading = () =>{
        setTimeout(()=>{
            loading.value = false;
        }, 2000);
    }
    const router = useRoute();
    const navbarStore = useNavbarStore();


    onMounted(()=>{
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
        handleLoading();
    });

</script>

<template>
    <div class="bg-red-400" v-loading="loading">
        <h1>Category {{ router.params.id }}</h1>
    </div>
</template>