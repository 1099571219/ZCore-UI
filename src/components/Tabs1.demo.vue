<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="开始">开始</Tab>
    <Tab title="设置">查看设置</Tab>
    <Tab title="安全">查看安全</Tab>
    <Tab title="查看版本">v 0.0.1</Tab>
  </Tabs>
</template>
<script lang='ts'>
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import {ref} from 'vue'
export default {
  components: { Tab, Tabs },
  setup() {
    const x = ref("开始");
    return { x };
  },
};
</script>