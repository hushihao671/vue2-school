import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import router from './router'
import MyVue from './MyVue.vue'
const app = createApp(MyVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
