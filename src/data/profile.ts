import { ref } from "vue";
import type { ProfileType } from "../utils/type";

const profiles = ref<ProfileType[]>([
    {
        id: 63568,
        name: 'ពិន ផល្លី-Pin Phally',
        profile: '../../images/profiles/phally.jpg',
    },
    {
        id: 62456,
        name: 'ពេជ្រ ច័ន្ទរស្មី-Pech ChanReakSmey',
        profile: '../../images/profiles/reaksmey.jpg',
    },
    {
        id: 63827,
        name: 'នូ សុវណ្ណារ៉ូត-Nou Sovannarout',
        profile: '../../images/profiles/b-rout.jpg',
    },
    {
        id: 65577,
        name: 'អ៊ឹម ផល-Eom Phal',
        profile: '../../images/profiles/phall.jpg',
    },
    {
        id: 62191,
        name: 'វិន សុខមេង-Vin Sokmeng',
        profile: '../../images/profiles/meng.jpg',
    },
    {
        id: 62191,
        name: 'យ៉ុន មួន សុធារិទ្ធ-Youn Moun Sothearith',
        profile: '../../images/profiles/thearith.jpg',
    },
]);

export default profiles;