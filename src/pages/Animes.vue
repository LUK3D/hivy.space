
<script lang="ts" setup>
import { onMounted, watch } from "vue"
import { googleOneTap,decodeCredential,googleLogout   } from "vue3-google-login"





</script>
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

        
        <div class="w-full flex flex-col-reverse lg:flex-row">
            <div class="w-full p-2 md:p-10 grid md:grid-cols-3 lg:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2 ">
                <AnimeCard v-for="(anime, index) in animeData.data" :key="index" :anime="anime" :onShowDetails="()=>{
                            showDetails = true;
                            selectedAnime = anime;
                            getCharacters(anime.mal_id!);
                }"></AnimeCard>

            </div>
            <div class="w-full pl-2 md:p-0 pt-8 md:pt-0 lg:w-2/6 flex md:flex-row lg:flex-col flex-col pr-2">
                <div class="md:mx-2 lg:mx-0 p-5 md:mb-2 flex flex-col w-full bg-white dark:bg-luk-400 rounded-lg justify-center items-center text-center ">
                    
                    <div class="dark:text-white text-luk-500">
                        <svg  height="62" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="62" data-view-component="true" class=" fill-current mb-2">
                            <path  fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </div>
                    <p>This is an open source project.
                        You can find the source code on <a class="text-luk-600" target="_blank" href="https://www.github.com/luk3d/hivy.space">Github</a>
                    </p>

                </div>
                <div class="md:m-2 lg:m-0 p-5 flex flex-col w-full bg-white dark:bg-luk-400 rounded-lg justify-center items-center text-center ">
                  <div v-if="!loggedUser.email_verified" class="w-full flex flex-col justify-center items-center">
                    <p class="text-3xl">Login</p>
                    <p class="my-2 text-sm">To unlock all the awesome feature form the community</p>
                        <GoogleLogin   :callback="onLoginCallback" prompt auto-login  />
                    <p class="my-5 text-xs ">To unlock all the awesome feature form the community</p>

                  </div>
                  <div v-else class="w-full flex flex-col justify-center items-center">
                    <div>
                        <img :src="loggedUser.picture" alt="" class="rounded-full w-40 h-40 object-cover">
                    </div>
                    <p class="text-3xl my-2">@{{loggedUser.username??loggedUser.name}}</p>
                    <p class="my-2 text-sm">Welcome to hivy space!</p>
                    <p class="my-2 text-sm w-full p-2 bg-gray-200 dark:bg-luk-200 rounded-md">{{loggedUser.tagline}}</p>
                       
                    <Button type="primary" @click="()=>{
                        googleLogout();
                        loggedUser = {};
                        createUserStep = 0;
                    }" label="Logout" ></Button>

                  </div>

                </div>
            </div>
        </div>


        <AnimeDetails :showDetails="showDetails" :selectedAnime="selectedAnime" :darkMode="darkMode" :onCloseAnimeDetails="()=>{
            showDetails = false;
        }"></AnimeDetails>
        

        <Dialog :open="showWelcome" :onClose="()=>{
            showWelcome = !showWelcome;
        }">
            <template #content>
                <div class="w-full md:w-3/4 lg:w-2/4 h-[90vh] bg-luk-500  rounded-lg p-5 flex flex-col justify-items text-center">

                <div v-if="createUserStep == 0"  class="w-full h-[90%] flex flex-col">
                    <div class="w-full py-2 border-b pb-5 border-luk-200">
                        <p class=" lowercase text-2xl">Hello {{loggedUser.name?.normalize()}} welcome to Hivy Space!</p>
                        <p class=" lowercase text-sn">You are about to start a new Experience.</p>
                        <p class=" lowercase  ">To keep up with other users, selec a picture for your avatar 😁</p>
                    </div>
                    <div  class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-4 h-full  overflow-y-auto overflow-x-hidden">
                        <button @click="()=>{
                            loggedUser.picture = avatarImage;
                        }" v-for="(avatarImage, index) in animeAvatars" :key="index" class="transform transition-transform hover:scale-125 hover:z-10 col-span-1 h-32 bg-luk-300 rounded-lg overflow-hidden">
                            <img class="w-full h-full object-cover" :src="avatarImage" alt="">
                        </button>
                        
                        
                    </div>
                
                </div>

                <div v-if="createUserStep == 1" class="w-full h-full flex flex-col">
                    <div class="w-full py-2 border-b pb-5 border-luk-200">
                        <p class="  text-sn">We care about your privacy. <br> Give yourself a cool username so peaple can know ho they are talking with.</p>
                        <p class=" text-sm  ">This name will be used as your handle on Hivy Space</p>
                    </div>

                    <div class="w-full h-full flex flex-col justify-center items-center">

                        <div class="p-1 bg-luk-400 rounded-lg w-3/4 flex items-center">
                          <p class="text-2xl text-luk-600">@</p>  <input v-model="loggedUser.username" type="text" placeholder="Enter your Username" class="font-bold w-full bg-transparent outline-none pl-0 p-2">
                        </div>
                        <p class="mb-4 mt-10 text-sm">Define your self in one line 😎</p>
                        <div class=" relative p-5 bg-luk-400 rounded-lg w-3/4 flex items-center ">
                            <textarea maxlength="150" resize="none" v-model="loggedUser.tagline" type="text" placeholder="Enter your tagline" class="  w-full bg-transparent outline-none pl-0 ">
                            </textarea>
                            <p class="absolute bottom-2 right-5 text-xs">{{(loggedUser.tagline??'').length}} of 150</p>
                        </div>

                        <!-- <Button class="w-2/5 mt-10 py-1 bg-opacity-50  py-5 border-2 dark:border-luk-600 border-luk-600" type="primary" label="Apply">
                            <template #leftIcon>
                                    <CheckIcon class="w-6 h-6"></CheckIcon>
                            </template>
                        </Button> -->
                    </div>
                </div>
                

                 <div class="flex w-full pt-5 justify-between">
                  <div>
                    <Button @click="()=>{createUserStep--;}" type="primary" label="Back">
                        <template #rightIcon>
                                <ArrowRightCircleIcon class="w-6 h-6 transform rotate-180"></ArrowRightCircleIcon>
                        </template>
                    </Button>
                  </div>
                   <div>
                    <Button @click="()=>{createUserStep++;
                    if(createUserStep>= maxSteps){
                        showWelcome = false;
                    }
                    }" type="primary" label="Next">
                        <template #rightIcon>
                                <ArrowRightCircleIcon class="w-6 h-6"></ArrowRightCircleIcon>
                        </template>
                    </Button>
                   </div>
                 </div>
                </div>
            </template>
        </Dialog>
            

        

    </div>
</template>

<script lang="ts">

import Dropdown from '../components/Dropdown.vue'
import Dialog from '../components/Dialog.vue'
import Button from '../components/Button.vue'
import Checkbox from '../components/Checkbox.vue'
import {ChevronDownIcon, CubeIcon, EyeIcon, PlusIcon, QueueListIcon, StarIcon, ArrowRightCircleIcon, CheckIcon} from "@heroicons/vue/24/solid"

import  axios from 'axios';

import { IAnime, IAnimeResult, IUser } from '../types';
import AnimeDetails from '../components/AnimeDetails.vue';
import AnimeCard from '../components/AnimeCard.vue';
import { inject } from 'vue';



export default {
    data:function(){ 

        return new class {
            createUserStep:number = 0;
            maxSteps = 2;
            showWelcome:boolean = false;
            loggedUser:IUser = {};
            darkMode:boolean = true;
            animeThemes:Array<Object> =[
                {label:"Manga"},
                {label:"Anime"},
                {label:"Cartoon"},
                {label:"Comic"},
            ];

            animeAvatars:Array<string>=[
                'https://avatarfiles.alphacoders.com/108/thumb-108886.gif',
                'https://avatarfiles.alphacoders.com/715/thumb-71560.jpg',
                'https://avatarfiles.alphacoders.com/752/thumb-75205.png',
                'https://avatarfiles.alphacoders.com/260/thumb-260.jpg',
                'https://avatarfiles.alphacoders.com/893/thumb-89303.gif',
                'https://avatarfiles.alphacoders.com/896/thumb-89615.png',
                'https://avatarfiles.alphacoders.com/827/thumb-82734.jpg',
                'https://avatarfiles.alphacoders.com/161/thumb-161888.png',
                'https://avatarfiles.alphacoders.com/321/thumb-32154.gif',
                'https://avatarfiles.alphacoders.com/108/thumb-108839.gif',
                'https://avatarfiles.alphacoders.com/967/thumb-96757.png',
                'https://avatarfiles.alphacoders.com/849/thumb-84930.png',
                'https://avatarfiles.alphacoders.com/320/thumb-32018.png',
                'https://avatarfiles.alphacoders.com/106/thumb-10677.gif',
                'https://avatarfiles.alphacoders.com/108/thumb-108672.gif',
                'https://avatarfiles.alphacoders.com/970/thumb-97021.png',
                'https://avatarfiles.alphacoders.com/905/thumb-90595.gif',
                'https://avatarfiles.alphacoders.com/910/thumb-91042.gif',
                'https://avatarfiles.alphacoders.com/477/thumb-47.jpg',
                'https://avatarfiles.alphacoders.com/982/thumb-9825.jpg',
                'https://avatarfiles.alphacoders.com/782/thumb-78200.png',
                'https://avatarfiles.alphacoders.com/108/thumb-108917.png',
                'https://avatarfiles.alphacoders.com/134/thumb-13472.gif',
                'https://avatarfiles.alphacoders.com/152/thumb-152197.png',
                'https://avatarfiles.alphacoders.com/162/thumb-162023.png',
                'https://avatarfiles.alphacoders.com/907/thumb-90762.png',
                'https://avatarfiles.alphacoders.com/837/thumb-83722.jpg',
                'https://avatarfiles.alphacoders.com/837/thumb-83705.png',
                'https://avatarfiles.alphacoders.com/174/thumb-174875.png',
                'https://avatarfiles.alphacoders.com/123/thumb-123211.png',
                'https://avatarfiles.alphacoders.com/946/thumb-94610.jpg',
                'https://avatarfiles.alphacoders.com/969/thumb-96992.gif',
                'https://avatarfiles.alphacoders.com/740/thumb-74085.png'
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
        },
        onLoginCallback: function (response:any) {

            const userData = decodeCredential(response.credential)
            this.loggedUser = userData;
            this.showWelcome = true;
            this.createUserStep = 0;
            // //@ts-ignore
            // window.user = userData;

        }

       
    },
   
    mounted(){
        const ctx = this;





    setTimeout(() => {
            googleOneTap()
            .then((response) => {
                ctx.onLoginCallback(response)
            })
            .catch((error) => {
                console.log("Handle the error", error)
            })
        
    }, 500);


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
    StarIcon,
    AnimeDetails,
    AnimeCard,
    Dialog,
    ArrowRightCircleIcon,
    CheckIcon
}
   
    
}
</script>
<style lang="">
    
</style>