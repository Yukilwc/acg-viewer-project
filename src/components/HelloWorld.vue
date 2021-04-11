<template>
  <div class="prefixer">prefixer</div>
  <div class="rem">rem fonts</div>
  <TsxBtn></TsxBtn>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import TsxBtn from "./tsxTest";

export default defineComponent({
  name: "HelloWorld",
  components: {
    TsxBtn,
  },
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
  filter: blur(4px);
}
.rem {
  font-size: 19.2px;
  width: 375px;
}
</style>
