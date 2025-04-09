import { ref } from "vue";
import type { CarouselType } from "../utils/type";

const carouselItems = ref<CarouselType[]>([
    {
        id: 4,
        title: 'រដ្ឋកំពុងសិក្សាគម្រោងពង្រីកផ្លូវជាតិលេខ១ ប្រវែងជាង​ ៥០ Km និងគម្រោងស្ពានថ្មីឆ្លងកាត់ទន្លេមេគង្គ',
        category: 'អចលនទ្រព្យ',
        author: 'Bunthoeurn Koem',
        date: 'MARCH 14 2025',
        thumbnail: 'https://business-cambodia.com/cms/assets/e7d5a5a5-faf3-446a-81f9-7b0bd32bebee'
    },
    {
        id: 3,
        title: 'សោកស្តាយផង! អ្នកប្រើទូរស័ព្ទ iPhone ៣ម៉ូឌែលនេះ នឹងគ្មានវាសនាបានប្រើ iOS 19 ទេ',
        category: 'ហិរញ្ញវត្ថុ',
        author: 'Bunthoeurn Koem',
        date: 'MARCH 14 2025',
        thumbnail: 'https://business-cambodia.com/cms/assets/5e0be91d-a7bf-49ad-a08c-5c36c70f4de3'
    },
    {
        id: 5,
        title: 'ទោះជាក្រុមហ៊ុនអាមេរិកក្តីតែ Starbucks អាចប្រឈមនឹងវិបត្តិ១នេះ ក្រោយការដំឡើងពន្ធរបស់ Trump',
        category: 'ហិរញ្ញវត្ថុ',
        author: 'Bunthoeurn Koem',
        date: 'MARCH 14 2025',
        thumbnail: 'https://business-cambodia.com/cms/assets/7e4e1cb8-541c-49af-8a59-05bb74e8d747'
    },
]);

export default carouselItems;