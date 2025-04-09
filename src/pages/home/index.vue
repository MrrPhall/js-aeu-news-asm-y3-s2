<script setup lang="ts">
    import Carousel from '../../components/Carousel.vue';
    import Item from '../../components/Item.vue';
    import carouselItems from '../../data/carousel';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, A11y, Autoplay } from 'swiper/modules';
    import '../../../node_modules/swiper/swiper.css'
    import '../../../node_modules/swiper/modules/pagination.css';
    import { onMounted, ref } from 'vue';
    import items from '../../data/item';
    import { useNavbarStore } from '../../stores/navbar';
    import { useHead } from '@vueuse/head';
    const modules = ref([Pagination, A11y, Autoplay]);
    const onSlideChange = () => {
        console.log('slide change');
    };

    const navbarStore = useNavbarStore();
    
    onMounted(()=>{
        navbarStore.handleNavbar(false);
        navbarStore.isHome = true;
        useHead({
            title: 'Global News',
            meta: [
                { name: 'description', content: 'This is a description for SEO' }
            ]

        });
    });


</script>

<template>
    <div>
        <!-- Caoursel Slider -->
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :pagination="{ clickable: true }"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="item in carouselItems" :key="item.id">
                <Carousel 
                    :id="item.id"
                    :title="item.title" 
                    :category="item.category"
                    :author="item.author"
                    :date="item.date"
                    :thumbnail="item.thumbnail"
                />
            </swiper-slide>
        </swiper>
        <!-- Item -->
         <h1 class="ml-[2.5%] mt-5 text-[25px] text-gray-600 font-bold">អត្ថបទថ្មីៗ</h1>
         <div class="w-[95%] mx-auto mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <Item
                v-for="item in items" :key="item.id"
                :id="item.id"
                :title="item.title"
                :category="item.category"
                :author="item.author"
                :date="item.date"
                :view="item.view"
                :thumbnail="item.thumbnail"
            />
         </div>
    </div>
</template>