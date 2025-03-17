<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { useNavbarStore } from '../../stores/navbar';
    import { onMounted } from 'vue';

    const route = useRoute();
    const navbarStore = useNavbarStore();
    onMounted(()=>{
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
    });
</script>
<template>
    <h1>Search {{ route.query.title }}</h1>
</template>