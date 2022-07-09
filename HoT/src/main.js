import { createApp } from 'vue'
import App from './App.vue'
import maHero from './components/maHero.vue';
import router from './router.js';
const app= createApp(App).mount('#hhero');
//app.use(router)
const hs=createApp(maHero);
hs.mount('#hhero');
hs.use(router);
