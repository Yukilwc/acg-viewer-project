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
    <div class="fixed-footer">
      <div class="wrapper">
        <div class="left" @click="showClick">目录</div>
        <div class="right" @click="routeToView">观看</div>
      </div>
    </div>
    <div class="overlay" @click="closeClick" v-if="show"></div>
    <div class="bottom-pop" :class="show ? 'bottom-pop--show' : ''">
      <div class="pop-wrapper">
        <div class="page-list">
          <div class="item" v-for="(item, index) in 30" :key="index">
            <c-img
              class="c-img"
              :src="'https://ehgt.org/t/7f/68/7f68ffe34dac0bf8e61965747135c9c44d294f10-10930535-2197-3118-png_250.jpg'"
            ></c-img>
          </div>
        </div>
        <div class="close" @click="closeClick">关闭</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { useRouter, useRoute } from "vue-router";
import { defineComponent, ref, reactive, Ref } from "vue";
export default defineComponent({
  setup() {
    const router = useRouter();
    let show = ref(false);
    const closeClick = () => {
      show.value = false;
    };
    const showClick = () => {
      show.value = true;
    };
    const routeToView = () => {
      router.push("/manga/viewer");
    };
    return {
      show,
      closeClick,
      showClick,
      routeToView,
    };
  },
});
</script>

<style lang='scss' scoped>
.container {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  .wrapper {
    padding: 6px 6px 44px;
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
  .fixed-footer {
    width: 100%;
    height: 44px;
    box-shadow: 0 0px 1.9px rgba(0, 0, 0, 0.024), 0 0px 3px rgba(0, 0, 0, 0.035),
      0 0px 3.4px rgba(0, 0, 0, 0.042), 0 0px 3.3px rgba(0, 0, 0, 0.049),
      0 0px 3.2px rgba(0, 0, 0, 0.06), 0 0px 4px rgba(0, 0, 0, 0.08);
    position: fixed;
    bottom: 0px;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 0 0px;
      .left {
        color: #6d757a;
        padding: 0 20px;
      }
      .right {
        color: #00a1d6;
        padding: 0 20px;
      }
    }
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0px;
    left: 0px;
    bottom: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 990;
    transition: all ease-in-out 0.35s;
  }
  .bottom-pop {
    position: fixed;
    max-height: 90vh;
    width: 100%;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background-color: #fff;
    z-index: 1000;
    padding: 10px 0 0;
    transform: translateY(100%);
    transition: all ease-in-out 0.35s;
    &.bottom-pop--show {
      transform: translateY(0);
    }
    .pop-wrapper {
      width: 100%;
      height: 100%;
      padding: 0 8px;
      .page-list {
        max-height: calc(90vh - 44px - 10px);
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        $itemMargin: 8px;
        .item {
          overflow: hidden;
          border-radius: 4px;
          flex: 0 0 auto;
          width: calc((100% - #{$itemMargin} * 3) / 4);
          height: 110px;
          margin-bottom: 10px;
          margin-right: $itemMargin;
          &:nth-child(4n) {
            margin-right: 0px;
          }
          .c-img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .close {
        width: 100%;
        height: 44px;
        border-top: 1px solid #f4f4f4;
        color: #32aaff;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>