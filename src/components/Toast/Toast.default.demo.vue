<demo>
  常规使用
  从顶部出现，3秒后消失
</demo>

<template>
  <Button @click="onClick">打开 ToastConfig</Button>
</template>

<script lang="ts">
import {ToastConfig} from '../../lib/ToastConfig';
import Button from "../../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    let index = 1;
    const onClick = () => {
      ToastConfig({ text: `这是第 ${index++} 条消息提示~` });
    };

    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
</style>
