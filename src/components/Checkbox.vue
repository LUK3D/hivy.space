<template >
   <label for="" :class="`${active && 'text-white'} flex text-sm items-center`">
        <button @click="()=>{
            active = !active;
        }" class="w-5 h-5 rounded-md border-2 border-luk-700">
            <div :class="`transform transition-transform ${active?'scale-100':'scale-0'} w-[90%] h-[90%] bg-luk-700 rounded-md`">

            </div>
        </button>
        <p class="ml-2">{{label}}</p>
    </label>
</template>
<script lang="ts">
import {CheckIcon, ChevronDownIcon} from "@heroicons/vue/24/solid"

export default {
   data:function(){
       return{

        active:false,
           
       }       
   },
   props:{
       label:{
           type:String,
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