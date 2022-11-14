<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import Animes from './pages/Animes.vue';

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div :class="`w-screen h-screen overflow-hidden flex flex-col ${theme}`">
    <Animes :onThemeChanged="(isDark?:boolean)=>{
      theme = (isDark)?'dark':'';
    }"></Animes>
  </div>
</template>
<script lang="ts">
export default {
  data:function(){
    return {
      theme:'',
    }
  }
    
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
