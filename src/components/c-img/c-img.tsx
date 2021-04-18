import { defineComponent, getTransitionRawChildren, onMounted, reactive, ref } from "vue";
import { Ref } from 'vue'
// interface CImgProps {
//     src: string
// }
import styles from './c-img.module.scss'
import lottie from 'lottie-web'
import aniData from '../../images/lottie/triangle-loading.json'
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
        let nodeRef: Ref<Element | null> = ref(null)
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
            let node = nodeRef.value
            let loadingNode = node?.querySelector(`.` + styles['img-loading'])
            console.log('loadingNode ', loadingNode)
            if (node !== null && loadingNode) {
                lottie.loadAnimation({
                    container: loadingNode, // the dom element that will contain the animation
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: aniData // the path to the animation json
                });
            }
        })
        return () => (
            <div ref={nodeRef} class='c-img-container'>
                {renderNode.value}
            </div>
        )
    }
})
export default CImg