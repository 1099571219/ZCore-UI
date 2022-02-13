<demo>
示例1
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
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>你好</strong>
      <div>几点了</div>
    </template>
    <div>2</div></Dialog
  >
</template>
<script lang="ts">
import {ref} from 'vue'
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
export default {
    components:{Dialog,Button},
    setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
   
    return { x, toggle, f1, f2 };
  },
};
</script>