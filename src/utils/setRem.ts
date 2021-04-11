import { } from './tools'

function setRem() {
    console.log('==========set rem',);
    let viewWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let rootValue = 16 // 插件配置的基数
    let blueprintSize = 375 // 基于得设计图尺寸
    let htmlFontSize = viewWidth * rootValue / blueprintSize
    console.log('==========htmlFontSize ', htmlFontSize);
    let htmlEl = document.getElementsByTagName('html')[0]
    htmlEl.style.fontSize = `${htmlFontSize}px`

}
setRem()

window.addEventListener('resize', () => {
    setRem()
})