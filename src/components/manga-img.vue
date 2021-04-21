<template>
  <div class="manga-img" :style="{ width: containerWidth }">
    <img class="img" v-if="completed" ref="imgRef" :src="src" />
    <div v-else class="loading"><span class="text">加载中...</span></div>
  </div>
</template>

<script lang='ts'>
import { toRefs, ref, Ref } from "vue";
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let { src } = toRefs(props);
    const completed = ref(false);
    let imgRef: Ref<Element | null> = ref(null);
    let containerWidth = ref("0vh");
    let img = new Image();
    img.src = src.value;
    img.onload = () => {
      let originWidth = img.width;
      let originHeight = img.height;
      containerWidth.value = 100 * (originHeight / originWidth) + "vh";
      console.log("==========", originWidth, originHeight, containerWidth);
      completed.value = true;
    };
    img.onerror = () => {};

    return {
      imgRef,
      completed,
      containerWidth,
    };
  },
};
</script>

<style lang='scss' scoped>
.manga-img {
  height: 100vh;
  overflow: hidden;
  .img {
    width: 100vh;
    height: auto;
    display: block;
    transform: rotate(90deg) translate(100%, -0%);
    transform-origin: 100% 0;
  }
  .loading {
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      transform: rotate(90deg);
    }
  }
}
</style>