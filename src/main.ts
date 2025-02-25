import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createPinia } from 'pinia'


const app = createApp(App);
app.use(router)
app.use(createPinia());  // 註冊 Pinia
app.mount('#app')

