<template>
  <div class="prefixer">prefixer</div>
  <div class="rem">rem fonts</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped lang='scss'>
.prefixer {
  transform: translateX(-10px);
}
.rem {
  font-size: 18px;
  width: 160px;
}
</style>
