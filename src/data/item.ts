import { ref } from "vue";
import type { ItemType } from "../utils/type";

const items = ref<ItemType[]>([
    {
        id: 1,
        title: 'អ្នកឧកញ៉ា សួរ វីរៈ បង្ហាញគម្រោងតំបន់ទេសចរណ៍ថ្មីមួយទៀត ខណៈត្រៀមបើកចុងឆ្នាំនេះ',
        category: 'ពត៌មានថ្មីៗ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 13 2025',
        view: 4174,
        thumbnail: 'https://business-cambodia.com/cms/assets/0d97cfeb-cc92-4dc9-a224-44c3ac67fb79',
        detail: `<div>
            <div class="flex flex-col justify-center lg:px-36 text-black my-3 object-cover bg-center bg-no-repeat bg-cover">
            <div class="text-2xl lg:text-4xl font-semibold article-title px-4 md:px-0">ខេត្ដសំណាង! ក្រុមហ៊ុនចិនបោះទុន​ ២៧៣​ លានដុល្លារសង់រោងចក្រលើដី​​ ២១ ហិកតានៅខេត្ដមួយនេះ</div>
            <div class="flex justify-center sm:justify-start text-xs lg:text-sm font-light text-gray-500"><a class="" href="https://business-cambodia.com/authors/7b05e5df-65a6-48eb-aa0f-420b2417c6f3">Bunthoeun Koem</a><span class="mx-2">&bull;</span>MARCH 2 2025<span class="mx-2">&bull;</span>54.8 K views</div>
            </div>
            </div>
            <div id="article-body" class="grid grid-cols-1 lg:grid-cols-left_expand gap-x-6 px-4 lg:px-36 text-lg md:text-xl font-light">
            <div>
            <div id="type_under-title" class="w-full pb-2 rounded-md">
            <div><a id="under_article_0_0" href="https://bakseyacademy.com/" target="_blank" rel="noopener"><img id="ba-ads" class="my-2 w-full rounded-md" src="https://business-cambodia.com/cms/assets/86b74977-4e3b-4ec1-9249-6af7f5dee4b4" alt="" loading="lazy"></a></div>
            </div>
            <div id="article_thumbnail" class="mb-6"><img src="https://business-cambodia.com/cms/assets/bbacb53a-2f36-4e61-b4e0-9a3cd208f067" srcset="" alt=""></div>
            <div class="body_content pt-2">
            <div id="part_1_container">
            <div id="part-1" class="article_body">
            <p>នៅថ្ងៃទី២ ខែមីនា ឆ្នាំ២០២៤ ក្រុមហ៊ុន​ Nex Healthcare Co., Ltd. ដែលវិនិយោគផលិតស្រោមដៃ (PVC &amp; Rubber) និងឧបករណ៍បរិក្ខារពេទ្យ​ បានបើកការដ្ឋានសាងសង់រោងចក្ររបស់ខ្លួនដែលមានទីតាំងស្ថិតក្នុងតំបន់សេដ្ឋកិច្ចពិសេស ឈីលូ ខេត្តស្វាយរៀង​ លើផ្ទៃដី​ទំហំ​ ២១ ហិកតា ដែលមានទុនវិនិយោគ​ប្រមាណ​ ២៧៣​ លានដុល្លារអាមេរិក​។</p>
            </div>
            </div>
            </div>
            </div>
        </div>`
    },
    {
        id: 2,
        title: 'ខេត្ដសំណាង! ក្រុមហ៊ុនចិនបោះទុន​ ២៧៣​ លានដុល្លារសង់រោងចក្រលើដី​​ ២១ ហិកតានៅខេត្ដមួយនេះ',
        category: 'អចលនទ្រទ្យ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 2 2025',
        view: 1200000,
        thumbnail: 'https://business-cambodia.com/cms/assets/bbacb53a-2f36-4e61-b4e0-9a3cd208f067',
    },
    {
        id: 3,
        title: 'ល្អណាស់! ក្រសួងឧស្សាហកម្ម និងក្រុមហ៊ុន ស៊ីភី ជួបគ្នាដើម្បីបង្កើនការដាក់លក់ផលិតផលខ្មែរក្នុង 7-Eleven',
        category: 'ចាប់ផ្ដើមអាជិវកម្ម',
        author: {
            name: 'ធី ស្រីល័ក្ខ',
            profile: 'https://business-cambodia.com/cms/assets/a0a4c4f4-d307-48e0-8262-0634a9319588',
        },
        date: 'MARCH 13 2025',
        view: 1,
        thumbnail: 'https://business-cambodia.com/cms/assets/2a468faa-ad5d-45e2-b35a-91df6a6ff25a',
    },
    {
        id: 1,
        title: 'អ្នកឧកញ៉ា សួរ វីរៈ បង្ហាញគម្រោងតំបន់ទេសចរណ៍ថ្មីមួយទៀត ខណៈត្រៀមបើកចុងឆ្នាំនេះ',
        category: 'ពត៌មានថ្មីៗ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 13 2025',
        view: 232324,
        thumbnail: 'https://business-cambodia.com/cms/assets/0d97cfeb-cc92-4dc9-a224-44c3ac67fb79',
    },
    {
        id: 1,
        title: 'អ្នកឧកញ៉ា សួរ វីរៈ បង្ហាញគម្រោងតំបន់ទេសចរណ៍ថ្មីមួយទៀត ខណៈត្រៀមបើកចុងឆ្នាំនេះ',
        category: 'ពត៌មានថ្មីៗ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 13 2025',
        view: 68876544342,
        thumbnail: 'https://business-cambodia.com/cms/assets/0d97cfeb-cc92-4dc9-a224-44c3ac67fb79',
    },
    {
        id: 1,
        title: 'អ្នកឧកញ៉ា សួរ វីរៈ បង្ហាញគម្រោងតំបន់ទេសចរណ៍ថ្មីមួយទៀត ខណៈត្រៀមបើកចុងឆ្នាំនេះ',
        category: 'ពត៌មានថ្មីៗ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 13 2025',
        view: 57654,
        thumbnail: 'https://business-cambodia.com/cms/assets/0d97cfeb-cc92-4dc9-a224-44c3ac67fb79',
    },
    {
        id: 1,
        title: 'អ្នកឧកញ៉ា សួរ វីរៈ បង្ហាញគម្រោងតំបន់ទេសចរណ៍ថ្មីមួយទៀត ខណៈត្រៀមបើកចុងឆ្នាំនេះ',
        category: 'ពត៌មានថ្មីៗ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 13 2025',
        view: 643246311,
        thumbnail: 'https://business-cambodia.com/cms/assets/0d97cfeb-cc92-4dc9-a224-44c3ac67fb79',
    },
    {
        id: 1,
        title: 'អ្នកឧកញ៉ា សួរ វីរៈ បង្ហាញគម្រោងតំបន់ទេសចរណ៍ថ្មីមួយទៀត ខណៈត្រៀមបើកចុងឆ្នាំនេះ',
        category: 'ពត៌មានថ្មីៗ',
        author: {
            name: 'Bunthoeun Koem',
            profile: 'https://business-cambodia.com/cms/assets/ece42c55-6cb8-4d51-9551-9d3470c2748a',
        },
        date: 'MARCH 13 2025',
        view: 76534,
        thumbnail: 'https://business-cambodia.com/cms/assets/0d97cfeb-cc92-4dc9-a224-44c3ac67fb79',
    }
]);

export default items;