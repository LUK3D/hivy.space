import { createApp } from 'vue'
import 'virtual:windi.css'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics';
const app = createApp(App);

//@ts-ignore
// import gAuthPlugin from 'vue3-google-oauth2';

import vue3GoogleLogin from 'vue3-google-login'

console.log("KEY HERE-1:",import.meta.env.VITE_GOOGLE_API_KEY);

app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_API_CLIENT,
    scope:'email',
    prompt:'consent'
  })

// app.use(gAuthPlugin,{
//     clientId:gAuthClientId,
//     scope:'email',
//     prompt:'consent',

// })

app.mount('#app');

inject();

