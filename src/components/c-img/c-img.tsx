import { defineComponent, getTransitionRawChildren, onMounted, reactive, ref } from "vue";
import { Ref } from 'vue'
// interface CImgProps {
//     src: string
// }
import styles from './c-img.module.scss'
import lottie, { AnimationItem } from 'lottie-web'
import aniData from '../../images/lottie/triangle-loading.json'
const CImg = defineComponent({
    props: {
        src: {
            type: String,
            default: ''
        }
    },
    setup(props, { }) {
        // console.log('styles', styles)
        let instance: AnimationItem
        let src = props.src
        let renderNode = ref(<div></div>)
        let nodeRef: Ref<Element | null> = ref(null)
        let loadingNode = <div class={styles['img-loading']}></div>
        let errorNode = <div class={styles['img-error']}>加载失败</div>
        let imgNode = <img class={styles['img-completed']} src={src}></img>
        renderNode.value = loadingNode
        let img = new Image()
        img.src = src
        img.onload = () => {
            // console.log('图片加载完成', src)
            if (instance) {
                instance.destroy()
            }
            renderNode.value = imgNode

        }
        img.onerror = () => {
            // console.log('图片加载失败', src)
            if (instance) {
                instance.destroy()
            }
            renderNode.value = errorNode
        }
        onMounted(() => {
            let node = nodeRef.value
            if (!node) return
            let loadingNode = node.querySelector(`.` + styles['img-loading'])
            console.log('loadingNode ', loadingNode, `.` + styles['img-loading'])
            if (node !== null && loadingNode) {
                instance = lottie.loadAnimation({
                    container: loadingNode, // the dom element that will contain the animation
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: aniData // the path to the animation json
                });
            }
        })
        return () => (
            <div ref={nodeRef} class={styles['c-img-container']}>
                {renderNode.value}
            </div>
        )
    }
})
export default CImg