import { ref } from "vue";

interface Author {
    name: string,
    profile: string,
}

interface ItemType {
    id: number,
    title: string,
    category: string,
    author: Author,
    date: string,
    view: number,
    thumbnail: string,
}

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