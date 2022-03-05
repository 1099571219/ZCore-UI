<demo>
  不同状态
  包含的状态有 [ normal, secondary, success, warning, error ]
</demo>

<template>
  <Button @click="onClick1">普通 normal</Button>
  <Button @click="onClick2">次级 secondary</Button>
  <Button @click="onClick3">成功 success</Button>
  <Button @click="onClick4">警告 warning</Button>
  <Button @click="onClick5">错误 error</Button>
</template>

<script lang="ts">
import {ToastConfig} from '../../lib/ToastConfig';
import  Button  from '../../lib/Button.vue';

export default {
  components: { Button },
  setup() {
    const onClick1 = () => {
      ToastConfig({ text: '这是一条普通的消息提示~', type: 'normal' });
    };
    const onClick2 = () => {
      ToastConfig({ text: '这是一条次要的消息提示~', type: 'secondary' });
    };
    const onClick3 = () => {
      ToastConfig({ text: '这是一条成功的消息提示~', type: 'success' });
    };
    const onClick4 = () => {
      ToastConfig({ text: '这是一条警告提示~', type: 'warning' });
    };
    const onClick5 = () => {
      ToastConfig({ text: '这是一条错误提示~', type: 'error' });
    };

    return { onClick1, onClick2, onClick3, onClick4, onClick5 };
  },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-top: 14px;
}
</style>
