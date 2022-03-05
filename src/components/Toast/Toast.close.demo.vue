<demo>
  可关闭
  可以使用 showClose 属性添加关闭按钮，默认3秒后消失。手动传入 delay 属性控制延时关闭的时间，单位：秒。delay 设置 0 不会被自动关闭。
</demo>

<template>
  <Button @click="onClick1">可关闭，delay: 5</Button>
  <Button @click="onClick2">可关闭，delay: 0</Button>
</template>

<script lang="ts">
import {ToastConfig} from '../../lib/ToastConfig';
import Button from "../../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick1 = () => {
      ToastConfig({
        text: "这是一条可以关闭的消息提示~",
        showClose: true,
        delay: 5,
      });
    };
    const onClick2 = () => {
      ToastConfig({
        text: "这是一条可以关闭的消息提示~",
        showClose: true,
        delay: 0,
      });
    };

    return { onClick1, onClick2 };
  },
};
</script>

<style lang="scss" scoped>
</style>
