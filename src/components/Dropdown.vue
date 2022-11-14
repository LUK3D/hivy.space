<template >
     <div class="relative  text-sm w-full flex flex-col" @mouseleave="open= false">
        <button @mouseover="open=true" class="h-9 flex justify-between border px-3 py-1 dark:border-[#28263B] rounded-lg items-center transform active:scale-95">
           
            <div class="flex items-center w-full">
                <slot name="leftIcon">
                </slot>
                <p class="mr-1">{{label}}</p>
                <p class="dark:text-gray-200 text-luk-600">All</p>
            </div>
            <ChevronDownIcon :class="`transition-transform transform ${open && 'rotate-180'}  w-4 h-4 ml-2 text-gray-200`"></ChevronDownIcon>
        </button>
        <ul :class="`${!open && 'scale-0'} transition border-2 dark:border-luk-300 transform origin-top shadow-xl transition-transform p-2 flex flex-col dark:bg-luk-300 bg-white rounded-lg absolute top-9 w-full`">
            <li @click="()=>{
                //@ts-ignore
               selected = item;
            }" v-for="(item, index) in items" :key="index"
            :class="`${(selected == item) && ' bg-luk-600 bg-opacity-10' } flex justify-between items-center hover:bg-luk-600 hover:bg-opacity-10 transform active:scale-95 cursor-pointer p-2 mb-1 rounded-md`">
            {{
            //@ts-ignore
            item.label
            }}
            <CheckIcon  :class="`transform transition-transform ${selected == item?'scale-100':'scale-0'} w-6 h-6 text-luk-600`" ></CheckIcon>
            </li>
            
        </ul>
    </div>
</template>
<script lang="ts">
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/24/solid"

export default {
    data:function(){
        return{
            open:false,
            selected:null,
        }       
    },
    props:{
        label:{
            type:String,
            default:'Select one:'
        },
        items:{
            type:Array,
            default:[
                {label:"No items..."}
            ]
        }
    },
    components:{
        ChevronDownIcon,
        CheckIcon,
    }
}
</script>
<style lang="">
    
</style>