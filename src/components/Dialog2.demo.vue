<demo>
示例2
</demo>
<template>
  <Button @click="showDialog">toggle</Button>
</template>
<script>
import { openDialog } from "../lib/openDialog";
import Button from "../lib/Button.vue";
export default {
    components:{
        Button
    },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "提示",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
        closeOnClickOverlay: false,
      });
    };
    return { showDialog };
  },
};
</script>