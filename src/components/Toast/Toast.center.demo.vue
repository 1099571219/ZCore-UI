<demo>
  文字居中
  使用 center 属性让文字水平居中
</demo>

<template>
  <Button @click="onClick">打开 toast</Button>
</template>

<script lang="ts">
import {ToastConfig} from '../../lib/toastConfig';
import Button from '../../lib/Button.vue';

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      ToastConfig({
        text: '这是一条居中的消息提示~',
        center: true,
      });
    };

    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
</style>
