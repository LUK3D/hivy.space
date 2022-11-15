<template >
   <div v-show="showDetails" class="fixed z-10 w-full h-full bg-luk-500 bg-opacity-95 flex flex-col md:p-10 overflow-y-auto text-gray-400">
            <div class=" w-full grid grid-cols-1 md:grid-cols-12 md:gap-4">
                <div class="col-span-3 py-5 w-full">
                    <img :src="selectedAnime.images?.jpg?.large_image_url" class="w-full">
                </div>
                <div class="col-span-9 flex flex-col bg-luk-500 p-5 rounded-md shadow-2xl">
                    <p class="text-4xl text-white">{{selectedAnime.title}}</p>
                    <div class="flex items-center">
                       <div class="flex relative justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20 text-yellow-500">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            <p class="absolute text-white font-bold mt-2">{{selectedAnime.score}}</p>
                        </div>
                        <div class="flex flex-wrap pt-2 pl-5">
                            <p class="font-bold">Genre:</p>
                            <p class="mx-1" v-for="(theme, index) in selectedAnime.themes" :key="index">{{theme.name}}</p>
                        </div>
                    </div>
                    <div class="flex pt-2 pl-5">
                            <p class="font-bold">Status:</p>
                        <p class="ml-1">{{selectedAnime.status}}</p>
                    </div>
                    <div class="flex pt-2 pl-5 flex-col">
                        <p class="font-bold">Author, Type & Producer:</p>
                        <div class="flex pt-2">
                            <div class="flex flex-col items-center justify-center mr-2" v-for="(authors, i) in selectedAnime.authors" :key="i">
                                <div class="flex flex-col items-center justify-center w-20 h-20 bg-luk-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <p class="ml-1 mt-2">{{authors.name}}</p>
                            </div>
                        </div>
                    </div>
                    <p class="pl-5 mt-4 text-white font-bold mb-2">Synopsis</p>
                    <p class="text-sm text-gray-200 mt-2 pl-5 tracking-widest font-light" v-for="(paragraph, e) in (selectedAnime.synopsis?.split('.'))" :key="e">
                        {{paragraph}}
                    </p>

                    <div class="w-full p-5 bg-luk-500 mt-5 rounded-md grid md:grid-cols-2 lg:grid-cols-5 gap-2">
                        <div v-for="(character) in selectedAnime.characters?.data" :key="character.character?.name" class="flex flex-col p-4 shadow-lg">
                            <img :src="character.character?.images?.jpg?.image_url" class="rounded-md">
                            <p class="mt-2">{{character.character?.name}} - {{character.role}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button @click="()=>{
                onCloseAnimeDetails && onCloseAnimeDetails(false)
               
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
import Button from '../components/Button.vue'
import {ChevronDownIcon, StarIcon} from "@heroicons/vue/24/solid"


export default {
    props:{ 
        darkMode:{
            type:Boolean,
            default:true
        },
        showDetails:{
            type:Boolean,
            default:true
        },
        selectedAnime:{
            type:Object,
            default:{}
        },
        onCloseAnimeDetails:{
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