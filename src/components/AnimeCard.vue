<template >
       <div  class="h-[400px] dark:bg-luk-400 bg-white col-span-1 rounded-lg  flex flex-col">
                <div class="w-full flex items-center justify-between px-5 py-2">
                    <Checkbox ></Checkbox>
                    <div class="flex items-center text-sm">
                        <p>Views: 10k</p>
                        <EyeIcon class="w-5 h-5 ml-2"></EyeIcon>
                    </div>
                </div>
               

                <img class=" mt-2 h-full object-cover overflow-hidden " :src="anime.images?.jpg?.image_url" alt="">
                <div class="w-full py-1 mt-2 border-t-2 dark:border-luk-500 px-5 py-2 flex flex-col">
                    <div class="flex items-center justify-between border-b pb-2 dark:border-luk-500">
                        <div class="flex ">
                            <p class="text-xs">Review 🥰💖 {{anime.scored_by}}</p>
                        </div>
                        <div class="flex items-center">
                            <StarIcon class="w-5 h-5 text-yellow-500"></StarIcon>
                            <p class="text-xs">{{anime.score}}</p>
                        </div>
                        <div class="flex items-center">
                            <p class="text-xs">{{anime.type}}</p>
                        </div>
                    </div>
               
                    <p class="py-2 text-lg dark:text-gray-300 font-[500] text-sm ">{{anime.title}}</p>
                    <p class=" dark:text-gray-300 font-[500] text-sm">{{anime.title_japanese}}</p>
                    <Button @click="()=>{
                        onShowDetails && onShowDetails(anime)
                       
                    }" label="View Details" class="mt-2 w-full text-luk-600">
                        <template #leftIcon>
                                <EyeIcon class="w-5 h-5 mr-2"></EyeIcon>
                        </template>
                    </Button>
                </div>
            </div>
            
</template>
<script lang="ts">
import Button from '../components/Button.vue'
import Checkbox from '../components/Checkbox.vue'
import { EyeIcon,  StarIcon} from "@heroicons/vue/24/solid"

export default {
     props:{
        onShowDetails:{
            type:Function,
        },
        anime:{
            type:Object,
            default:{

            }
        }
     },
     components:{
        EyeIcon,
        StarIcon,
        Checkbox,
    Button,
}
}
</script>
<style lang="">
    
</style>