<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const router = useRoute();
</script>

<template>
    <div class="h-[1200px]">
        <h1>Detail</h1>
        <h1>ID: {{ router.params.id }}</h1>
        <h1>Title: {{ router.params.title }}</h1>
    </div>
</template>