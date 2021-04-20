<template>
  <div class="container">
    <div class="wrapper">
      <div class="cover-area">
        <c-img
          class="c-img"
          :src="'https://ehgt.org/t/7f/68/7f68ffe34dac0bf8e61965747135c9c44d294f10-10930535-2197-3118-png_250.jpg'"
        ></c-img>
      </div>
      <div class="name">
        (C97) [INST (Interstellar)] CHOKE (Kantai Collection -KanColle-)
        [Chinese] [零食汉化组]
      </div>
      <div class="language">Chinese</div>
      <div class="label">作者:</div>
      <div class="artist-list">
        <div class="item">interstellar</div>
        <div class="item">aco</div>
      </div>
      <div class="label">标签:</div>
      <div class="tag-list">
        <div class="item">rape</div>
        <div class="item">ntr</div>
      </div>
    </div>
    <div class="bottom-pop"></div>
  </div>
</template>

<script lang='ts'>
import { useRouter, useRoute } from "vue-router";
import { defineComponent, ref, reactive, Ref } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<style lang='scss' scoped>
.container {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  .wrapper {
    padding: 6px;
    width: 100%;
    .cover-area {
      width: 180px;
      height: 280px;
      overflow: hidden;
      .c-img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin-top: 10px;
      color: #000000;
      font-size: 16px;
      width: 100%;
    }
    .language {
      margin-top: 10px;
      font-size: 14px;
      color: #666666;
    }
    .label {
      margin-top: 10px;
      padding-bottom: 6px;
    }
    .artist-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        padding: 6px 8px;
        background-color: #f5f7f8;
        border-radius: 6px;
        margin-right: 10px;
      }
    }
    .tag-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        padding: 6px 8px;
        background-color: #f5f7f8;
        border-radius: 6px;
        margin-right: 10px;
      }
    }
  }
  .bottom-pop {
  }
}
</style>