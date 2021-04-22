<template>
  <div
    class="manga-img"
    :style="{ width: containerWidth + 'vh', height: containerHeight + 'vh' }"
  >
    <img
      :style="{ width: containerHeight + 'vh' }"
      class="img"
      v-if="completed"
      ref="imgRef"
      :src="src"
    />
    <div v-else class="loading"><span class="text">加载中...</span></div>
  </div>
</template>

<script lang='ts'>
import { toRefs, ref, Ref } from "vue";
interface IPorps {
  src: string;
}
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  setup(props: IPorps) {
    let { src } = toRefs(props);
    const completed = ref(false);
    let imgRef: Ref<Element | null> = ref(null);
    let containerWidth = ref(50);
    let containerHeight = ref(100);
    let img = new Image();
    img.src = src.value;
    img.onload = () => {
      let originWidth = img.width;
      let originHeight = img.height;
      containerWidth.value =
        containerHeight.value * (originHeight / originWidth);
      console.log("==========", originWidth, originHeight, containerWidth);
      completed.value = true;
    };
    img.onerror = () => {};

    return {
      imgRef,
      completed,
      containerWidth,
      containerHeight,
    };
  },
};
</script>

<style lang='scss' scoped>
.manga-img {
  overflow: hidden;
  .img {
    height: auto;
    display: block;
    transform: rotate(90deg) translate(100%, -0%);
    transform-origin: 100% 0;
  }
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      transform: rotate(90deg);
    }
  }
}
</style>