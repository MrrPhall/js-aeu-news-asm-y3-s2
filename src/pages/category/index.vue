<script setup lang="ts">
import { useRoute } from 'vue-router';

    const router = useRoute();
</script>

<template>
    <h1>Category {{ router.params.id }}</h1>
</template>