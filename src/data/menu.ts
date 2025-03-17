import { ref } from "vue";
import type { MainMenuItemType } from "../utils/type";

const menuItems = ref<MainMenuItemType[]>([
    {
        slug: 'news',
        title: 'ពត៌មានថ្មីៗ',
        description: 'បំផុសសកម្មភាពអាជីវកម្មថ្មីៗទាំងនៅក្នុងស្រុក និងក្រៅស្រុក',
        thumbnail: 'https://business-cambodia.com/cms/assets/8812fd3e-50da-4b00-bd05-66a20b3f8241',
    },
    {
        slug: 'business',
        title: 'ចាប់ផ្ដើមអាជីវកម្ម',
        description: 'នាំមនុស្សស្រមៃឱ្យធំ ចាប់ផ្តើមឱ្យតូច ពង្រីកឱ្យធំ',
        thumbnail: 'https://business-cambodia.com/cms/assets/2a73c151-2cd8-45a3-b2ae-da99988606dd',
    },
    {
        slug: 'real-estate',
        title: 'អចលនទ្រព្យ',
        description: 'បំផុសគំនិតរកស៊ីក្នុងវិស័យអចលនទ្រព្យ និងការវិនិយោគ',
        thumbnail: 'https://business-cambodia.com/cms/assets/dbc6c3fb-3963-4f7a-b76c-7f1fc9c32c78',
    },
    {
        slug: 'leadership',
        title: 'ភាពជាអ្នកដឹកនាំ',
        description: 'បំផុសគំនិតរកស៊ីក្នុងវិស័យអចលនទ្រព្យ និងការវិនិយោគ',
        thumbnail: 'https://business-cambodia.com/cms/assets/84756cab-d307-474f-bd21-8060b0fb1220',
    },
    {
        slug: 'finance',
        title: 'ហិរញ្ញវត្ថុ',
        description: 'នាំប្រជាជនខ្មែរ យល់ពីចំណេះដឹងហិរញ្ញវត្ថុ តាមឱ្យទាន់របត់បច្ចេកវិទ្យា',
        thumbnail: 'https://business-cambodia.com/cms/assets/87b496ef-ebb7-4085-80b5-84d09176fbf7',
    },
    {
        slug: 'pr',
        title: 'PR',
        description: 'ជួយឱ្យសេវាកម្ម ផលិតផល និងយីហោរបស់លោកអ្នក ទៅដល់ដៃអតិថិជនលឿនបំផុត',
        thumbnail: 'https://business-cambodia.com/cms/assets/01d48038-e3d0-4cea-9c57-562439f6ae1b',
    },
]);

export default menuItems;
