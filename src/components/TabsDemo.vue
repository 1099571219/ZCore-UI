<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航1">1</Tab>
    <Tab title="导航2222222">2</Tab>
  </Tabs>
</template>
<script lang='ts'>
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: { Tab, Tabs },
  setup() {
    const x = ref("导航1");
    return { x };
  },
};
</script>