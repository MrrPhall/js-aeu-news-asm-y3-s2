<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, A11y, Autoplay } from 'swiper/modules';
    import '../../../node_modules/swiper/swiper.css'
    import '../../../node_modules/swiper/modules/pagination.css';
    import items from '../../data/item';
    import { useRoute } from 'vue-router';
    import type { ItemType } from '../../utils/type';
    import { useNavbarStore } from '../../stores/navbar';
    import { viewFormater } from '../../utils/view';
    import { useHead } from '@vueuse/head';
    import Item from '../../components/Item.vue';
    const router = useRoute();
    const selectItem = computed<ItemType | null>(() => {
        const data = items.value.find(item => item.id === Number(router.params.id)) || null;
        useHead({
            title: 'Global News - ' + data?.title,
            meta: [
                { name: 'description', content: 'This is a description for SEO' }
            ]

        });
        return data;
    });

    const modules = ref([Pagination, A11y, Autoplay]);
    const onSlideChange = () => {
        console.log('slide change');
    };

    const relatedItem = computed<ItemType[]>(()=>{
        const data = items.value.filter((item) => item.category_slug === selectItem.value?.category_slug && item.id !== selectItem.value?.id);
        return data;
    });

    const loading = ref<boolean>(true);

    const handleLoading = () =>{
        setTimeout(() =>{
            loading.value = false;
        }, 2000);
    }

    const navbarStore = useNavbarStore();
    onMounted(()=>{
        navbarStore.handleNavbar(true);
        navbarStore.isHome = false;
        handleLoading();
    });

</script>

<template>
     <div class="min-h-screen w-[95%] mx-auto z-[-1]" v-loading="loading">
        <div class="h-20"></div>
        <div class="w-full flex items-start justify-between mt-2 gap-6" v-show="!loading">
            <div class="w-full sm:w-full md:w-[60%]">
                <button class="text-red-500 bg-gray-200 px-4 py-1 rounded-sm border">{{ selectItem?.category }}</button>
                <h1 class="text-[35px] font-bold text-gray-700 mt-2">{{ selectItem?.title }}</h1>
                <div class="flex items-center gap-2 text-gray-500 text-[12px] md:text-[15px]">
                    <span>{{ selectItem?.author.name }}</span>
                    <span>•</span>
                    <span>{{ selectItem?.date }}</span>
                    <span>•</span>
                    <span>{{ viewFormater(Number(selectItem?.view)) }} View{{ Number(selectItem?.view) > 1 ? 's': null }} </span>
                </div>
                <img :src="selectItem?.thumbnail" alt="Thumbnail" class="w-full mt-2">
                <div v-html="selectItem?.detail"></div>
            </div>
            <div class="w-[40%] hidden md:block">
                <img src="https://business-cambodia.com/cms/assets/41d88699-1ea7-42e7-987a-9c197b4ccbd2" alt="">
            </div>
        </div>
        <!-- Related Item -->
        <div class="w-full mt-5">
            <h1 class="text-[23px] font-medium text-gray-700">ព័ត៌មានពាក់ព័ន្ធផ្សេងៗទៀត</h1>
            <div class="w-full my-4">
                <swiper
                    :modules="modules"
                    :slides-per-view="3"
                    :space-between="30"
                    :pagination="{clickable: true}"
                    :loop="false"
                    @slideChange="onSlideChange"
                    :class="{ 'no-shadow': !selectItem?.noShadow }"
                >
                    <swiper-slide v-for="item in relatedItem" :key="item.id">
                        <div class="shadow-md rounded-2xl bg-white">
                            <Item
                                :id="item.id"
                                :title="item.title"
                                :category="item.category"
                                :author="item.author"
                                :date="item.date"
                                :view="item.view"
                                :thumbnail="item.thumbnail"
                                :no-shadow="true"
                            />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
     </div>
</template>

<style>
    .swiper-pagination-bullet {
        height: 3px !important;
        width: 50px !important;
        border-radius: 0px !important;
        background-color: red !important;
        position: relative !important;
        bottom: -10px !important;
    }
</style>