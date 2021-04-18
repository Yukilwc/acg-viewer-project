<template>
  <div class="">
    列表页
    <list-item></list-item>
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

<style>
</style>