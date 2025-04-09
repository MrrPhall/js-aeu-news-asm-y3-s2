<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import menuItems from '../data/menu';
import logo from '../../public/images/logo/logo.png';

</script>

<template>
    <footer class="w-full flex items-center justify-center flex-col mt-5 bg-[#0a1b3d]">
        <div class="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white my-10">
            <div class="flex justify-start flex-col">
                <h1 class="text-[18px] font-bold text-center md:text-left">ស្វែងយល់អំពីពួកយើង</h1>
                <h3 class="text-[16px] font-bold mt-[40px]">
                    <RouterLink :to="{
                        name: 'about'
                    }" class="flex items-center">
                       <Icon class="text-[23px] animate-bounce" icon="fluent:hand-draw-20-regular"/> អំពីពួកយើង
                    </RouterLink>
                </h3>
                <div class="flex items-center gap-2 mt-3">
                    <RouterLink :to="{
                        name: 'home'
                    }">
                        <Icon class="text-[30px]" icon="proicons:youtube"/>
                    </RouterLink>
                    <RouterLink :to="{
                        name: 'home'
                    }">
                        <Icon class="text-[30px]" icon="gravity-ui:logo-facebook"/>
                    </RouterLink>
                    <RouterLink :to="{
                        name: 'home'
                    }">
                        <Icon class="text-[30px]" icon="hugeicons:tiktok"/>
                    </RouterLink>
                    <RouterLink :to="{
                        name: 'home'
                    }">
                        <Icon class="text-[30px]" icon="stash:telegram"/>
                    </RouterLink>
                </div>
                <RouterLink class="mt-3" :to="{
                        name: 'home'
                    }">
                        about.pncm@info.com.kh
                    </RouterLink>
            </div>
            <div class="flex justify-center flex-col items-center">
                <h1 class="text-[18px] font-bold text-center">អត្ថបទផ្សេងៗ</h1>
                <div class="grid grid-cols-2 gap-2 mt-[40px]">
                    <RouterLink v-for="item in menuItems" :key="item.slug" :to="{
                        name: 'category',
                        params: {
                            id: item.slug
                        }
                    }">
                        {{ item.title }}
                    </RouterLink>
                </div>
                <div class="p-2 flex items-center justify-center rounded-2xl mt-5">
                    <img class="w-[150px]" :src="logo">
                </div>
                <h1 class="font-bold">Assigment Javascript</h1>
                <h1 class="text-[13px] mt-2">បំផុសគំនិតរកស៊ី នាំមនុស្សឱ្យហ៊ានចេញរកស៊ីតាមក្ដីស្រមៃ</h1>
            </div>
            <div class="flex justify-start flex-col items-center md:items-end">
                <h1 class="text-[18px] font-bold">ទំនាក់ទំនងមកពួកយើង</h1>
                <h3 class="text-[16px] mt-[40px]">
                    <RouterLink :to="{
                        name: 'home'
                    }">
                        097 2444 595/096 8253 340
                    </RouterLink>
                </h3>
                <RouterLink class="text-right mt-5 text-[14px]" :to="{
                        name: 'home'
                    }">
                        Building 422 St. 271, Phum 1, <br/>Stung Mean
                        Chey Khan MeanChey, Phnom Penh
                    </RouterLink>
            </div>
        </div>
        <div class="flex items-center justify-center gap-2 w-full text-white text-[14px] mb-3">រក្សាសិទ្ធិដោយ Global News <Icon icon="solar:copyright-linear"/> 2025</div>
    </footer>
</template>