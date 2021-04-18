import { defineComponent, getTransitionRawChildren, onMounted, reactive, ref } from "vue";
import { Ref } from 'vue'
// interface CImgProps {
//     src: string
// }
import styles from './style/c-img.module.scss'
const CImg = defineComponent({
    props: {
        src: {
            type: String,
            default: ''
        }
    },
    setup(props, { }) {
        console.log('styles', styles)
        let src = props.src
        type ImgStatus = 'completed' | "loading" | "error"
        let status: Ref<ImgStatus> = ref('loading')
        let renderNode = ref(<div></div>)
        let loadingNode = <div class={styles['img-loading']}><span class={styles['text']}>加载中</span></div>
        let errorNode = <div>加载失败</div>
        let imgNode = <img src={src}></img>
        renderNode.value = loadingNode
        let img = new Image()
        img.src = src
        img.onload = () => {
            console.log('图片加载完成', src)
            status.value = 'completed'
            // renderNode.value = imgNode
        }
        img.onerror = () => {
            console.log('图片加载失败', src)
            status.value = 'error'
            renderNode.value = errorNode
        }
        onMounted(() => {
        })
        return () => (
            renderNode.value
        )
    }
})
export default CImg