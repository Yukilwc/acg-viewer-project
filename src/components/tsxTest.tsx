import { defineComponent, ref } from "vue"
const config = {
    setup() {
        const str = ref('tsx str')
        return () => (
            <button class='tsx-btn'>
                {str.value}
            </button>
        )
    }
}
const tsxBtn = defineComponent(
    config
)
export default tsxBtn