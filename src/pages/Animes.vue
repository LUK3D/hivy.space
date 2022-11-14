<template >
    <div class="relative w-full h-full dark:bg-luk-200 bg-gray-200 flex flex-col dark:text-luk-700 text-gray-700 overflow-y-auto" id="animePageList">
       
        <div class="w-full min-h-[200px]  flex flex-col justify-between relative">
            <img :src="animeData?.data?.[getRandomInt(0,animeData?.data.length)]?.images?.jpg?.large_image_url" alt="" class="  dark:opacity-50 absolute w-full h-full object-cover">
                <div class="right-2 top-2 absolute">
                    <Button :label=" `Theme: ${darkMode?'Dark':'Light'}`" @click="()=>{
                        darkMode = !darkMode;
                        onThemeChanged && onThemeChanged(darkMode);
                    }"></Button>
                </div>
            
            <div class="w-full  "></div>
            <div class="  flex justify-between items-star md:items-center flex-col md:flex-row bg-gradient-to-t   dark:from-luk-100  w-full h-20 bg-whit  px-2 md:px-10 z-10 pb-10">
                <p class="text-4xl font-bold mb-2 dark:text-gray-200  text-gray-700 bg-white dark:bg-transparent p-2 rounded-md">
                    Hivy Space
                </p>
                <div class="flex bg-white md:bg-transparent dark:bg-transparent px-10 ">
                    <Dropdown label="Sort by -" :items="animeThemes" class="w-50 dark:bg-luk-200 bg-white  rounded-md">
                    </Dropdown>
                    <Button type="primary" label="Add Video" class="ml-2 text-xs w-40 md:w-auto">
                        <template #leftIcon >
                            <PlusIcon class="w-6 h-6"></PlusIcon>
                        </template>
                    </Button>
                </div>
            </div>
        </div>
        <div class="w-full    items-center   px-10 mt-2 hidden md:flex">
           <Checkbox label="Select All" ></Checkbox>
           <p class=" border-r-2 border-luk-500 px-10">Selected: 1</p>
           <p class=" border-luk-500 ml-5 mr-3">Actions:</p>
           <div class="flex items-center">
            <Button label="Animes" class="mr-2">
                <template #leftIcon>
                        <CubeIcon class="w-5 h-5 mr-2"></CubeIcon>
                </template>
            </Button>
            <Button label="Manga" class="mr-2">
                <template #leftIcon>
                        <CubeIcon class="w-5 h-5 mr-2"></CubeIcon>
                </template>
            </Button>
            <Button label="Comic" class="mr-2">
                <template #leftIcon>
                        <CubeIcon class="w-5 h-5 mr-2"></CubeIcon>
                </template>
            </Button>
           </div>
        </div>

        <div class="w-full p-2 md:p-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5 grid-cols-1 sm:grid-cols-2 mt-5">
            <div v-for="(anime, index) in animeData.data" :key="index" class="h-[400px] dark:bg-luk-400 bg-white col-span-1 rounded-lg  flex flex-col">
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
                    <!-- <div v-html="makeStars(anime.score??1)" class="flex w-full items-center justify-between">
                    </div> -->
                    <p class="py-2 text-lg dark:text-gray-300 font-[500] text-sm ">{{anime.title}}</p>
                    <p class=" dark:text-gray-300 font-[500] text-sm">{{anime.title_japanese}}</p>
                    <Button @click="()=>{
                        showDetails = true;
                        selectedAnime = anime;
                        getCharacters(anime.mal_id!);
                    }" label="View Details" class="mt-2 w-full text-luk-600">
                        <template #leftIcon>
                                <EyeIcon class="w-5 h-5 mr-2"></EyeIcon>
                        </template>
                    </Button>
                </div>
            </div>
            

        </div>
            

        <div v-show="showDetails" class="fixed z-10 w-full h-full bg-luk-500 bg-opacity-95 flex flex-col p-10 overflow-y-auto text-gray-400">
            <div class=" w-full grid grid-cols-12 gap-4">
                <div class="col-span-3 py-5">
                    <img :src="selectedAnime.images?.jpg?.large_image_url" alt="">
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
                        <div class="flex pt-2 pl-5">
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

                    <div class="w-full p-5 bg-luk-500 mt-5 rounded-md grid grid-cols-5 gap-2">
                        <div v-for="(character) in selectedAnime.characters?.data" :key="character.character?.name" class="flex flex-col p-4 shadow-lg">
                            <img :src="character.character?.images?.jpg?.image_url" class="rounded-md">
                            <p class="mt-2">{{character.character?.name}} - {{character.role}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button @click="()=>{
                showDetails = false;
            }" type="primary" label="" class="fixed right-2 top-2 w-10 h-10 flex flex-col bg-red-500 border-0">
                <template #leftIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </template>
            </Button>
        </div>

    </div>
</template>

<script lang="ts">

import Dropdown from '../components/Dropdown.vue'
import Button from '../components/Button.vue'
import Checkbox from '../components/Checkbox.vue'
import {ChevronDownIcon, CubeIcon, EyeIcon, PlusIcon, QueueListIcon, StarIcon} from "@heroicons/vue/24/solid"

import  axios from 'axios';

import { IAnime, IAnimeResult } from '../types';



export default {
    data:function(){ 

        return new class {
            darkMode:boolean = false;

            animeThemes:Array<Object> =[
                {label:"Manga"},
                {label:"Anime"},
                {label:"Cartoon"},
                {label:"Comic"},
            ];

            selectedAnime:IAnime = {};
            showDetails:boolean = false;

            animeData:IAnimeResult = {};
        }();
    },
    props:{
        onThemeChanged:{
            type:Function
        }
    },
    methods:{
        makeStars:function(value:number):string{
            let stars = [];

            for (let i = 0; i < Math.floor(value); i++) {
                stars.push(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                    `)
            }

            while (stars.length<10) {
                stars.push(`
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>

                    `);
                    
            }

            return stars.join('');
        },
         getRandomInt:function(min:number, max:number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getAnimeData: function (args:{page?:number}){
            const ctx = this;
           // Make a request for a user with a given ID
            axios.get(`https://api.jikan.moe/v4/${args.page?'manga':'top/manga'}?page=${args.page??1}`)
            .then(function (response) {
                ctx.animeData.data = [...(ctx.animeData.data??[]),...response.data['data']];
                ctx.animeData.pagination = response.data['pagination'];
                // handle success
                // ctx.selectedAnime = ctx.animeData.data[ctx.getRandomInt(0,ctx.animeData.data.length-1)]; 
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });   
        },
        getCharacters: function (id:number){
            const ctx = this;
           // Make a request for a user with a given ID
            axios.get(`https://api.jikan.moe/v4/manga/${id}/characters`)
            .then(function (response) {
                ctx.selectedAnime.characters = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });   
        }
    },
    mounted(){
        const ctx = this;
        ctx.getAnimeData({});
 
        const myDiv = document.getElementById('animePageList')  
        myDiv?.addEventListener('scroll', () => {  
        if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {  
           
            if(ctx.animeData.pagination?.has_next_page){
                ctx.getAnimeData({page:ctx.animeData.pagination.current_page!+1});
            }
        }  
        })
    },
    computed:{
        
        // animeData:function():IAnimeResult{
        //     //@ts-ignore
        //     return animeList;
        // }
    },
    components:{
    ChevronDownIcon,
    Dropdown,
    QueueListIcon,
    Button,
    PlusIcon,
    Checkbox,
    CubeIcon,
    EyeIcon,
    StarIcon
}
   
    
}
</script>
<style lang="">
    
</style>