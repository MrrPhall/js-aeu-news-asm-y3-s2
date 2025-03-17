import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavbarStore = defineStore(
    'navbar',
    ()=>{

        const isWhite = ref<boolean>(true);
        const isHome = ref<boolean>(false);
        const handleNavbar = (e: boolean) =>{
            isWhite.value = e;
        }
        return {
            isWhite,
            isHome,
            handleNavbar,
        }
    }
);