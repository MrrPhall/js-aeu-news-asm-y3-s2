import { ref } from "vue";
import type { CarouselType } from "../utils/type";

const carouselItems = ref<CarouselType[]>([
    {
        id: 1,
        title: 'ប្រា.ក់ខែ៥០០$ ចាយមិនគ្រប់? អ្នកជំនាញ ឲ្យចាយតាមក្បួន១នេះភ្លាម ធានាឈប់ខ្ចីលុ.យគេ ហើយសល់ទ្រព្យទៀត',
        category: 'ហិរញ្ញវត្ថុ',
        author: 'Bunthoeurn Koem',
        date: 'MARCH 14 2025',
        thumbnail: 'https://business-cambodia.com/cms/assets/6764d533-bb1e-4e0d-b195-53ca0289a4dd'
    },
    {
        id: 2,
        title: 'ប្រា.ក់ខែ៥០០$ ចាយមិនគ្រប់? អ្នកជំនាញ ឲ្យចាយតាមក្បួន១នេះភ្លាម ធានាឈប់ខ្ចីលុ.យគេ ហើយសល់ទ្រព្យទៀត',
        category: 'ហិរញ្ញវត្ថុ',
        author: 'Bunthoeurn Koem',
        date: 'MARCH 14 2025',
        thumbnail: 'https://business-cambodia.com/cms/assets/6764d533-bb1e-4e0d-b195-53ca0289a4dd'
    },
]);

export default carouselItems;