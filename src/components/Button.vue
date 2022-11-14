<template >
    <button 
     :class="
     `
     transition-transform w-auto transform active:scale-95 h-9  flex items-center border-2 px-3 py-1  rounded-lg items-center
    
     ${type == 'primary'? ' dark:border-luk-500 bg-luk-600 text-gray-100': ' dark:border-luk-500 dark:bg-luk-500 bg-white bg-opacity-80'}
     `
      ">
       <slot name="leftIcon"></slot> <p class="mr-1">{{label}}</p><slot name="rightIcon"></slot>
    </button>
</template>
<script lang="ts">
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/24/solid"

export default {
    data:function(){
        return{
            
        }       
    },
    props:{
        label:{
            type:String,
            default:'Default Text'
        },
        type:{
            type:String,
            default:''
        },
       
    },
    components:{
        ChevronDownIcon,
        CheckIcon,
    }
}
</script>
<style lang="">
    
</style>