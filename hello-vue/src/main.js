import { createApp } from 'vue'
import App from './App.vue'
import helloAPI from '@/services/helloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = helloAPI

app.mount('#app')
