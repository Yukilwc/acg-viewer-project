import { createApp } from 'vue'
import App from './App.vue'
import './utils/setRem'
import './style/global.scss'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
