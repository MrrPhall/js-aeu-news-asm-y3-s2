<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useNavbarStore } from '../../stores/navbar';
    import Profile from '../../components/Profile.vue';
    import profiles from '../../data/profile';
    import { useHead } from '@vueuse/head';

    const loading = ref<boolean>(true);
    const handleLoading = () =>{
        loading.value = true;
        setTimeout(()=>{
            loading.value = false;
        }, 2000);
    }

    const navbarStore = useNavbarStore();
    onMounted(()=>{
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
        useHead({
            title: 'Global News - About Us',
            meta: [
                { name: 'description', content: 'This is a description for SEO' }
            ]

        });
        handleLoading();
    });

</script>
<template>
    <div class="min-h-screen w-[95%] mx-auto z-[-1]" v-loading="loading">
        <div v-show="!loading">
            <div class="h-20">
            </div>
            <h1 class="text-center text-[25px] font-bold text-gray-600 mt-5">សមាជិកក្រុម</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                <Profile v-for="(item, index) in profiles" :key="index"
                    :id="item.id"
                    :name="item.name"
                    :profile="item.profile"
                />
            </div>
        </div>
    </div>
</template>