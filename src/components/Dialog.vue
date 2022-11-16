<template >
    <div v-show="open" class="fixed z-10 w-full h-full bg-luk-200 bg-opacity-95 flex flex-col md:p-10 overflow-y-auto text-gray-400 justify-center items-center">
             <slot name="content">

             </slot>
             <Button @click="()=>{
                 onClose && onClose(false)
                
             }" type="primary" label="" class="fixed right-2 top-2 w-10 h-10 flex flex-col bg-red-500 border-0">
                 <template #leftIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                 </template>
             </Button>
         </div>
 </template>
 <script lang="ts">
 import Button from './Button.vue'
 import {ChevronDownIcon, StarIcon} from "@heroicons/vue/24/solid"
 
 
 export default {
     props:{ 
         darkMode:{
             type:Boolean,
             default:true
         },
         open:{
             type:Boolean,
             default:true
         },
         selectedAnime:{
             type:Object,
             default:{}
         },
         onClose:{
             type:Function
         }
         
     },
 
     components:{
     ChevronDownIcon,
     Button,
     StarIcon,
 }
 }
 </script>
 <style lang="">
     
 </style>