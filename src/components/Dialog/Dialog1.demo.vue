<demo>
常规使用
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>警告</strong>
    </template>
    <template v-slot:content>
      <strong>危险警告</strong>
      <div>小心危险</div>
    </template>
    <div>2</div></Dialog
  >
</template>
<script lang="ts">
import {ref} from 'vue'
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
export default {
    components:{Dialog,Button},
    setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;//控制点击OK是否自动关闭弹窗
    };
    const f2 = () => {};
   
    return { x, toggle, f1, f2 };
  },
};
</script>