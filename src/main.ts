import { createApp } from 'vue'
import App from './App.vue'
import './utils/setRem'
import './style/global.scss'
import router from './router/index'
import componentsPlugin from './plugins/components'

const app = createApp(App)
app.use(router)
app.use(componentsPlugin)
app.mount('#app')
