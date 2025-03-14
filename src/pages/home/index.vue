<script setup lang="ts">
import { useCounterStore } from '../../stores/counter';

    const counterStore = useCounterStore();
</script>

<template>
    <h1 @click="counterStore.increment">Home {{ counterStore.count }}</h1>
    <el-input/>
</template>