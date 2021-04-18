// 全局组件注册
import { App } from 'vue'
import CImg from '../components/c-img/c-img'
export default {
    install: (app: App, options: any[]) => {
        console.log('==========执行全局组件注册插件',);
        app.component('c-img', CImg)
    }
}