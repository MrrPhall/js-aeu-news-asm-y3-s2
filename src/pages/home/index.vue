<script setup lang="ts">
    import Carousel from '../../components/Carousel.vue';
    import carouselItems from '../../data/carousel';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, A11y, Autoplay } from 'swiper/modules';
    import '../../../node_modules/swiper/swiper.css'
    import '../../../node_modules/swiper/modules/pagination.css'
    import { ref } from 'vue';
    const modules = ref([Pagination, A11y, Autoplay]);
    const onSlideChange = () => {
        console.log('slide change');
    };
</script>

<template>
    <div>
        
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
    </div>
</template>