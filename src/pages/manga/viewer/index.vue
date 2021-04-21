<template>
  <div class="container">
    <div class="wrapper">
      <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
          <manga-img :src="item"></manga-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";
// import {} from '../../../images/commic/合集[chinese]'
const modules = import.meta.globEager(
  "../../../images/commic/合集[chinese]/**/*.jpg"
);
console.log("==========modules ", modules);
export default defineComponent({
  setup() {
    let allList = Object.keys(modules).map((item) => modules[item].default);
    let list = allList.slice(0, 100);
    // console.log("==========list", list);
    onMounted(() => {
      // let node = document.querySelector
    });
    return {
      list,
    };
  },
});
</script>

<style>
body {
}
</style>
<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  direction: rtl;
  overflow-y: auto;
  .wrapper {
    .list {
      height: 100vh;
      display: flex;
      // align-items: center;
      // flex-direction: row-reverse;
      .list-item {
        flex: 0 0 auto;
        // width: 100vh;
        height: 100vh;
        // transform: rotate(90deg) translate(100%, -0%);
        // transform-origin: 100% 0;
        // img {
        // width: 100%;
        // height: auto;
        // display: block;
        // }
      }
    }
  }
}
</style>