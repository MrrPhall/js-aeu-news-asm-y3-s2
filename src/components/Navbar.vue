<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import menuItems  from '../data/menu';
    import { useNavbarStore } from '../stores/navbar';
    import { ref } from 'vue';
    import router from '../routers/router';
    import logo from '../../public/images/logo/logo.png';

    const navbarStore = useNavbarStore();
    window.addEventListener('scroll', ()=>{
        if(navbarStore.isHome === true){
            if(window.pageYOffset > 80) {
                navbarStore.handleNavbar(true);
            }else{
                navbarStore.handleNavbar(false);
            }
        }else{
            navbarStore.handleNavbar(true);
        }
    });

    window.addEventListener('resize', ()=>{
        menuOpen.value = false;
    });

    const menuOpen = ref<boolean>(false);
    const searchOpen = ref<boolean>(false);
    const search = ref<string>('');

    const handleSearch = () =>{
        if(search.value !== ''){
            searchOpen.value = false;
            router.push({
                name: 'search',
                query: {
                    title: search.value,
                }
            })
        }
    }

</script>
<template>
    <div>
        <nav class="w-full h-16 sm:h-16 md:h-20 flex items-center justify-center fixed z-[150] top-0 transition-all" :class="navbarStore.isWhite ? 'bg-[#0a1b3d] shadow-sm' : 'bg-transparent shadow-none'">
            <div class="w-[95%] h-full flex items-center justify-between">
                <div>
                    <RouterLink :to="{
                        name: 'home'
                    }">
                        <img class="h-10 sm:h-10 md:h-16" :src="logo" alt="Logo">
                    </RouterLink>
                </div>
                <ul class="items-center h-full hidden sm:hidden md:flex" :class="navbarStore.isWhite ? 'text-white' : 'text-white'">
                    <li class="mx-2">
                        <RouterLink :to="{
                            name: 'home'
                        }" exact-active-class="text-red-500">ទំព័រដើម</RouterLink>
                    </li>
                    <li class="mx-2" v-for="item in menuItems" :key="item.title">
                        <RouterLink :to="{
                            name: 'category',
                            params: {
                                id: item.slug
                            }
                        }" exact-active-class="text-red-500">{{ item.title }}</RouterLink>
                    </li>
                </ul>
                <div class="flex items-center gap-2" :class="navbarStore.isWhite ? 'text-white' : 'text-white'">
                    <Icon @click="menuOpen = true" icon="fluent:list-rtl-20-filled" class="text-[30px] cursor-pointer md:hidden"/>
                    <Icon @click="searchOpen = true" class="text-[30px] cursor-pointer" icon="proicons:search"/>
                </div>
            </div>
        </nav>
        <el-dialog 
            title="ស្វែងរក"
            v-model="searchOpen"
            align="center"
            align-center
            draggable
        >
            <el-form @submit.prevent="handleSearch" class="pb-10 pt-5">
                <el-input v-model="search" placeholder="ស្វែងរក" clearable>
                    <template #suffix>
                        <Icon icon="proicons:search"/>
                    </template>
                </el-input>
            </el-form>
        </el-dialog>

        <el-dialog
            align="center"
            v-model="menuOpen"
            fullscreen
            style="background-color: rgba(0, 0, 0, 0.5);"
            align-center
            
        >
          <ul class="flex items-center justify-center flex-col gap-2 text-[25px] text-white">
            <li @click="menuOpen = false" class="mx-2">
                <RouterLink :to="{
                    name: 'home'
                }" exact-active-class="text-red-500">ទំព័រដើម</RouterLink>
            </li>
            <li @click="menuOpen = false" class="mx-2" v-for="item in menuItems" :key="item.title">
                <RouterLink :to="{
                    name: 'category',
                    params: {
                        id: item.slug
                    }
                }" exact-active-class="text-red-500">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </el-dialog>
    </div>
   
</template>