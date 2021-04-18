<template>
  <div class="">
    列表页
    <list-item></list-item>
    <c-img
      class="c-img"
      src="https://ehgt.org/t/7f/68/7f68ffe34dac0bf8e61965747135c9c44d294f10-10930535-2197-3118-png_250.jpg"
    ></c-img>
    <c-img
      class="c-img"
      src="https://ehgt.org/t/7f/68/7f68ffe34dac0bf8e61965747135c9c44d294f10-10930535-2197-3118-png_250.jpg"
    ></c-img>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ListItem from "../../../components/list-item";
export default defineComponent({
  components: {
    ListItem,
  },
  setup() {},
});
</script>

<style lang='scss' scoped>
.c-img {
  width: 140px;
  height: 189px;
  margin-bottom: 14px;
}
</style>