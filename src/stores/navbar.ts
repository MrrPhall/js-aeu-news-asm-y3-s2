import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavbarStore = defineStore(
    'navbar',
    ()=>{

        const isWhite = ref<boolean>(true);
        const handleNavbar = (e: boolean) =>{
            isWhite.value = e;
        }
        return {
            isWhite,
            handleNavbar,
        }
    }
);