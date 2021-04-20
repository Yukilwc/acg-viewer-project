<template>
  <div class="container">
    <div class="list">
      <div
        class="item"
        @click="itemClick"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="left">
          <c-img class="c-img" :src="item.cover"></c-img>
        </div>
        <div class="right">
          <div class="top">
            <div class="name">{{ item.name }}</div>
            <div class="artist">{{ item.artist }}</div>
          </div>
          <div class="bottom">
            <div class="type">{{ item.type || "none" }}</div>
            <div class="bottom-right">
              <div class="language">{{ item.language }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, Ref } from "vue";
// import ListItem from "../../../components/list-item";
interface IListItem {
  id: number;
  language: string;
  name: string;
  type?: string;
  time: string;
  artist: string;
  cover?: string;
}
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  components: {
    // ListItem,
  },
  setup() {
    const router = useRouter();
    const list: Ref<IListItem[]> = ref([
      {
        id: 1,
        cover:
          "https://ehgt.org/t/7f/68/7f68ffe34dac0bf8e61965747135c9c44d294f10-10930535-2197-3118-png_250.jpg",
        language: "Chinese",
        name:
          "(C97) [INST (Interstellar)] CHOKE (Kantai Collection -KanColle-) [Chinese] [零食汉化组]",
        time: "2020-12-12 15:20",
        artist: "interstellar",
      },
      {
        id: 1,
        cover:
          "https://ehgt.org/t/9e/91/9e91cf6b18117daab62b0398db9d9ae3de767ac3-4473136-2120-3020-jpg_250.jpg",
        language: "Chinese",
        name: "(C97) [INST (Interstellar)]",
        time: "2020-12-12 15:20",
        artist: "interstellar",
      },
      {
        id: 1,
        language: "Chinese",
        name:
          "(C97) [INST (Interstellar)] CHOKE (Kantai Collection -KanColle-) [Chinese] [零食汉化组]",
        time: "2020-12-12 15:20",
        artist: "interstellar",
      },
      {
        id: 1,
        language: "Chinese",
        name:
          "(C97) [INST (Interstellar)] CHOKE (Kantai Collection -KanColle-) [Chinese] [零食汉化组]",
        time: "2020-12-12 15:20",
        artist: "interstellar",
      },
      {
        id: 1,
        language: "Chinese",
        name:
          "(C97) [INST (Interstellar)] CHOKE (Kantai Collection -KanColle-) [Chinese] [零食汉化组]",
        time: "2020-12-12 15:20",
        artist: "interstellar",
      },
      {
        id: 1,
        language: "Chinese",
        name:
          "(C97) [INST (Interstellar)] CHOKE (Kantai Collection -KanColle-) [Chinese] [零食汉化组]",
        time: "2020-12-12 15:20",
        artist: "interstellar",
      },
    ]);
    const itemClick = () => {
      console.log("==========router push");
      router.push({
        path: "/manga/detail",
      });
    };
    return {
      list,
      itemClick,
    };
  },
});
</script>

<style lang='scss' scoped>
.container {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  .list {
    padding: 14px 14px;
    .item {
      width: 100%;
      height: 190px;
      display: flex;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 0px 7.1px rgba(0, 0, 0, 0.011),
        0 0.4px 12.7px rgba(0, 0, 0, 0.016), 0 1.7px 16.9px rgba(0, 0, 0, 0.02),
        0 4.9px 20.1px rgba(0, 0, 0, 0.023),
        0 12.4px 24.1px rgba(0, 0, 0, 0.026), 0 38px 41px rgba(0, 0, 0, 0.03);
      .left {
        flex: 0 0 auto;
        width: 140px;
        height: 100%;
        .c-img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        padding: 6px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .top {
          .name {
            color: #000000;
            font-size: 16px;
            width: 100%;
            @include ellipsis(3);
          }
          .artist {
            margin-top: 10px;
            font-size: 14px;
            color: #666666;
          }
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .type {
            display: inline-block;
            padding: 6px;
            border-radius: 4px;
            background: #ff0000;
            color: #fff;
          }
          .bottom-right {
            text-align: right;
            .language {
              font-size: 14px;
              color: #666666;
            }
            .time {
              font-size: 14px;
              color: #666666;
            }
          }
        }
      }
    }
  }
}
</style>