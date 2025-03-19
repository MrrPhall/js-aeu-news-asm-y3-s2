<script setup lang="ts">
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
</script>
<template>
    <div class="w-full">
        <Navbar/>
        <RouterView/>
        <Footer/>
    </div>
</template>